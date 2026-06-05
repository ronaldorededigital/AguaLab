import React from 'react';
import { ShieldCheck, Database, FileText, Activity, Download, ExternalLink } from 'lucide-react';
import { REFERENCES, SUPPORT_DOCS } from '../constants';

const InfoSections: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* Vigiagua Section */}
      <section id="vigiagua" className="scroll-mt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-green-100 rounded-lg">
                 <ShieldCheck className="w-6 h-6 text-green-700" />
               </div>
               <h2 className="text-3xl font-bold text-slate-900">Programa Vigiagua</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              O Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano (Vigiagua) 
              consiste em um conjunto de ações contínuas adotadas pelas autoridades de saúde pública. 
              O objetivo principal é garantir que a água consumida pela população atenda aos padrões 
              de potabilidade estabelecidos na legislação vigente, promovendo a saúde e prevenindo doenças de veiculação hídrica.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <p className="ml-4 text-slate-600"><strong>Diagnóstico:</strong> Avaliação regular das condições dos sistemas de abastecimento.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <p className="ml-4 text-slate-600"><strong>Gerenciamento de Risco:</strong> Identificação e mitigação de perigos à saúde.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <p className="ml-4 text-slate-600"><strong>Promoção da Saúde:</strong> Ações educativas e preventivas junto à comunidade.</p>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 bg-slate-100 rounded-2xl p-8 border border-slate-200">
             <h3 className="text-xl font-semibold text-slate-800 mb-4">Atuação Nacional</h3>
             <p className="text-slate-600 mb-4">
               O Vigiagua atua em todos os municípios brasileiros, articulando ações entre as secretarias municipais e estaduais de saúde e o Ministério da Saúde.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                   <span className="block text-2xl font-bold text-blue-600 mb-1">SUS</span>
                   <span className="text-sm text-slate-500">Parte integrante das ações do Sistema Único de Saúde.</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                   <span className="block text-2xl font-bold text-blue-600 mb-1">Normas</span>
                   <span className="text-sm text-slate-500">Baseado nas Portarias de Potabilidade.</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sisagua Section */}
      <section id="sisagua" className="scroll-mt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center lg:grid-flow-row-dense">
          <div className="lg:col-start-2">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-indigo-100 rounded-lg">
                 <Database className="w-6 h-6 text-indigo-700" />
               </div>
               <h2 className="text-3xl font-bold text-slate-900">Sistema Sisagua</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              O Sistema de Informação de Vigilância da Qualidade da Água para Consumo Humano (Sisagua) 
              é a ferramenta tecnológica que apoia o Vigiagua. É nele que são registrados os dados 
              sobre a qualidade da água provenientes do controle (realizado pelos prestadores de serviço) 
              e da vigilância (realizado pelo setor saúde).
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Activity className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Módulo Controle</h4>
                  <p className="text-slate-600">Dados inseridos pelos responsáveis pelo abastecimento (companhias de saneamento, autarquias), demonstrando o cumprimento legal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Módulo Vigilância</h4>
                  <p className="text-slate-600">Dados gerados pelas Secretarias de Saúde para monitoramento independente e avaliação de riscos à população.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
             <h3 className="text-xl font-semibold text-indigo-900 mb-4">Transparência da Informação</h3>
             <p className="text-indigo-800 mb-6">
               Os dados do Sisagua são públicos e fundamentais para a sociedade acompanhar a qualidade da água que chega em suas torneiras.
             </p>
             <div className="space-y-3">
               {REFERENCES.map((ref, idx) => (
                 <a 
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all group"
                 >
                    <div>
                      <span className="block font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{ref.title}</span>
                      <span className="text-xs text-slate-500">{ref.description}</span>
                    </div>
                    <FileText className="w-5 h-5 text-slate-300 group-hover:text-indigo-500" />
                 </a>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Support Documents Section */}
      <section id="documentos" className="scroll-mt-24">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Download className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Documentos de Apoio</h2>
              <p className="text-sm text-slate-500">Manuais e guias disponíveis no Google Drive.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORT_DOCS.map((doc, idx) => (
              <a 
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all h-full"
              >
                <div className="flex items-start justify-between mb-2">
                  <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 leading-snug">
                  {doc.title}
                </span>
                <div className="mt-auto pt-3">
                   <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 group-hover:text-blue-400">Acessar Arquivo</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
            <strong>Nota:</strong> Os arquivos estão hospedados no Google Drive e abrirão em uma nova aba.
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="resources" className="bg-slate-50 border-t border-slate-200 pt-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Aviso Legal</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Este site é uma interface educativa e de demonstração. O agente fornece orientações gerais. 
                  Para decisões técnicas e legais, consulte sempre as portarias oficiais e os dados diretamente no portal do Sisagua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InfoSections;