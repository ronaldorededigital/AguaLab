import React from 'react';
import { Droplets } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg shrink-0">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 leading-none tracking-tight">VIGIAGUA-AM</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight whitespace-nowrap">
                Fundação de Vigilância em Saúde - FVS-RCP
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#vigiagua" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              O Programa
            </a>
            <a 
              href="https://sisagua.saude.gov.br/sisagua/login.jsf" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Sisagua
            </a>
            <a 
              href="#documentos" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Documentos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;