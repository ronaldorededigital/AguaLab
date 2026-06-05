
import { useState, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { ConnectionState } from '../types';
import { MODEL_NAME, SYSTEM_INSTRUCTION } from '../constants';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

// Fix: Declarations of 'aistudio' must have identical modifiers and types.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    readonly aistudio: AIStudio;
  }
}

export function useChat() {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.DISCONNECTED);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [needsKey, setNeedsKey] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);

  const checkApiKey = async () => {
    if (window.aistudio) {
      try {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          setNeedsKey(true);
          return false;
        }
      } catch (e) {
        // If not in aistudio context, just continue
      }
    }
    return true;
  };

  const startSession = useCallback(async () => {
    try {
      setConnectionState(ConnectionState.CONNECTING);
      setMessages([]);
      
      const hasKey = await checkApiKey();
      if (!hasKey) {
        setConnectionState(ConnectionState.DISCONNECTED);
        return;
      }

      // Re-instantiate for freshness as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      
      chatSessionRef.current = chat;
      setConnectionState(ConnectionState.CONNECTED);
      setNeedsKey(false);

      // Trigger the "Welcome" message
      setIsTyping(true);
      const response: GenerateContentResponse = await chat.sendMessage({ message: "start_conversation" });
      
      if (response.text) {
        setMessages([{ role: 'model', text: response.text }]);
      }
      setIsTyping(false);

    } catch (error: any) {
      console.error("Chat initialization failed", error);
      if (error?.message?.includes("Requested entity was not found")) {
        setNeedsKey(true);
      }
      setConnectionState(ConnectionState.ERROR);
      setIsTyping(false);
    }
  }, []);

  const sendMessage = useCallback(async (text: string, isHiddenCommand: boolean = false) => {
    // If we lost the session or need to re-initialize
    if (!chatSessionRef.current) {
      await startSession();
    }
    
    if (!chatSessionRef.current) return;

    try {
      if (!isHiddenCommand) {
        setMessages(prev => [...prev, { role: 'user', text }]);
      }
      
      setIsTyping(true);
      
      // The SDK recommendation is to recreate client if key changes, 
      // but here we rely on the session being active.
      const response: GenerateContentResponse = await chatSessionRef.current.sendMessage({ message: text });
      setIsTyping(false);

      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text }]);
      }
    } catch (error: any) {
      console.error("Message sending failed", error);
      setIsTyping(false);
      
      if (error?.message?.includes("Requested entity was not found")) {
        setNeedsKey(true);
        setConnectionState(ConnectionState.DISCONNECTED);
      }
    }
  }, [startSession]);

  const openKeySelection = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setNeedsKey(false);
      // Proceed immediately after triggering the dialog to mitigate race conditions
      await startSession();
    }
  };

  const disconnect = useCallback(() => {
    chatSessionRef.current = null;
    setConnectionState(ConnectionState.DISCONNECTED);
    setMessages([]);
  }, []);

  return { 
    startSession, 
    disconnect, 
    sendMessage, 
    connectionState, 
    messages, 
    isTyping,
    needsKey,
    openKeySelection
  };
}
