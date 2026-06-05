
import React, { useEffect, useRef, useState } from 'react';
import { X, Send, MessageSquare, AlertCircle, Key, ExternalLink } from 'lucide-react';
import { useChat, Message } from '../hooks/useGeminiLive';
import { ConnectionState } from '../types';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceModal: React.FC<VoiceModalProps> = ({ isOpen, onClose }) => {
  const { 
    startSession, 
    disconnect, 
    sendMessage, 
    connectionState, 
    messages, 
    isTyping, 
    needsKey, 
    openKeySelection 
  } = useChat();
  
  const [inputValue, setInputValue] = useState('');
  const lastActivityRef = useRef<number>(Date.now());
  const [warningSent, setWarningSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Session
  useEffect(() => {
    if (isOpen) {
      startSession();
      lastActivityRef.current = Date.now();
      setWarningSent(false);
    } else {
      disconnect();
    }
  }, [isOpen, startSession, disconnect]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle Inactivity
  useEffect(() => {
    if (!isOpen || connectionState !== ConnectionState.CONNECTED) return;

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - lastActivityRef.current;
      
      // 60 seconds: Close
      if (elapsed > 60000) {
        disconnect();
        onClose();
      } 
      // 30 seconds: Warning prompt (only once)
      else if (elapsed > 30000 && !warningSent) {
        sendMessage("user_inactive_30s", true); // True = hidden command
        setWarningSent(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isOpen, connectionState, warningSent, sendMessage, disconnect, onClose]);

  const updateActivity = () => {
    lastActivityRef.current = Date.now();
    if (warningSent) setWarningSent(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue('');
    updateActivity();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900 bg-opacity-90 transition-opacity" onClick={onClose}></div>

      {/* Modal Panel */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto h-[600px] max-h-full">
          
          {/* Header */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${connectionState === ConnectionState.CONNECTED ? 'bg-green-400' : 'bg-yellow-400'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${connectionState === ConnectionState.CONNECTED ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                </span>
                Atendente Vigiagua
              </h3>
            </div>
            <button onClick={onClose} className="bg-white rounded-full p-2 hover:bg-slate-200 transition-colors">
              <X className="h-5 w-5 text-slate-500" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100">
            {needsKey ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Key className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Configuração Necessária</h4>
                <p className="text-slate-600 text-sm max-w-xs">
                  Para utilizar o assistente em ambiente de demonstração, é necessário selecionar uma chave de API válida.
                </p>
                <button
                  onClick={openKeySelection}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                >
                  Selecionar Chave de API
                </button>
                <a 
                  href="https://ai.google.dev/gemini-api/docs/billing" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  Documentação de Faturamento <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ) : (
              <>
                {connectionState === ConnectionState.CONNECTING && (
                  <div className="flex justify-center py-4">
                      <span className="text-xs text-slate-400 animate-pulse">Iniciando conversa...</span>
                  </div>
                )}
                
                {connectionState === ConnectionState.ERROR && (
                  <div className="flex flex-col items-center justify-center h-full text-red-500 space-y-2 p-6 text-center">
                      <AlertCircle className="w-8 h-8" />
                      <p className="font-medium">Erro ao conectar com o serviço de IA.</p>
                      <button 
                        onClick={() => startSession()} 
                        className="text-sm text-blue-600 hover:underline mt-2"
                      >
                        Tentar reconectar
                      </button>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-white text-slate-800 rounded-bl-none border border-slate-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                      <div className="flex space-x-1.5 h-4 items-center">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 shrink-0">
             <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => { setInputValue(e.target.value); updateActivity(); }}
                  onKeyDown={handleKeyDown}
                  placeholder={needsKey ? "Selecione a chave primeiro..." : "Digite sua dúvida..."}
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400 disabled:opacity-50"
                  disabled={connectionState !== ConnectionState.CONNECTED || needsKey}
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || connectionState !== ConnectionState.CONNECTED || needsKey}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
             </div>
             {!needsKey && (
               <p className="text-center text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-medium">
                 Encerramento automático em 60s
               </p>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VoiceModal;
