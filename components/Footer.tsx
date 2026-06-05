import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="text-white font-bold text-lg">Vigiagua</span>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Vigilância da Qualidade da Água para Consumo Humano. Garantindo saúde e segurança para a população brasileira.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-white font-semibold">Links Oficiais</span>
            <div className="mt-2 flex flex-col md:items-end space-y-2 text-sm">
              <a href="https://www.gov.br/saude" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ministério da Saúde</a>
              <a href="https://sisagua.saude.gov.br/sisagua/login.jsf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Acesso ao Sisagua</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Atendimento Educativo e Baseado em dados públicos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;