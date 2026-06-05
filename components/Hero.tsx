import React from 'react';
import { MessageSquare } from 'lucide-react';

interface HeroProps {
  onStartVoice: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartVoice }) => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
            <span className="block">Água Potável é</span>
            <span className="block text-blue-600">Saúde e Direito</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Bem-vindo ao portal informativo do <strong>Vigiagua</strong> e <strong>Sisagua</strong>. 
            Aqui você encontra informações sobre a vigilância da qualidade da água para consumo humano no Brasil.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-5">
            <button
              onClick={onStartVoice}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10 transition-all shadow-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageSquare className="w-6 h-6 animate-bounce group-hover:animate-none" />
              Chat com Atendente Virtual
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Tire dúvidas rápidas via chat sobre o programa e o sistema.
          </p>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-blue-100 fill-current">
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;