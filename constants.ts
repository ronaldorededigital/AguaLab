
export const MODEL_NAME = 'gemini-3-flash-preview';

export const SYSTEM_INSTRUCTION = `
Role: You are an expert AI agent for the Brazilian Ministry of Health's Vigiagua Program (National Surveillance of Drinking Water Quality) and Sisagua.

Context: You are chatting with citizens, water treatment professionals, or health managers via a text interface.

CORE RULES:
1. BREVITY: Keep answers short and concise (max 3-4 sentences).
2. LANGUAGE: Auto-detect the user's language. Default to Brazilian Portuguese.
3. TONE: Professional, institutional, helpful, and respectful.
4. LINKS: You may provide links when relevant.

CONVERSATION FLOW:
1. **START**: When you receive the text "start_conversation", you MUST IMMEDIATELY say exactly this: "Olá! Boas vindas ao Vigiagua. Eu sou o seu assistente virtual. Qual é o seu nome?"
2. **INACTIVITY**: If you receive the text "user_inactive_30s", say exactly: "Você ainda tem alguma pergunta?"
3. **GENERAL**: Answer questions about Vigiagua (surveillance) and Sisagua (system) concisely.

Knowledge Base:
- Vigiagua: Ensures drinking water quality.
- Sisagua: Information system for recording control and surveillance data.
- Goal: Diagnosis, risk management, prevention.
`;

export const REFERENCES = [
  {
    title: "Portal da Vigilância (Vigiagua)",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-ambiental/agua-potavel",
    description: "Página oficial com diretrizes e normas."
  },
  {
    title: "Acesso ao Sisagua",
    url: "https://sisagua.saude.gov.br/sisagua/login.jsf",
    description: "Plataforma de acesso para gestores e público (dados abertos)."
  },
  {
    title: "Dados Abertos (InfoÁgua)",
    url: "https://dados.gov.br/dados/organizacoes/visualizar/ministerio-da-saude",
    description: "Painéis públicos de indicadores de qualidade da água."
  }
];

export const SUPPORT_DOCS = [
  { title: "Manual do Sisagua - Perfil Empresa", url: "https://drive.google.com/file/d/1Qu04LA-gydpTH2-ZjEP3SlO_5_wp3Prw/view?usp=drive_link" },
  { title: "Manual do Sisagua - Perfil Vigiagua", url: "https://drive.google.com/file/d/1cyhcphG5wsKbcSxU_CUwOLmfRydy5xFg/view?usp=drive_link" },
  { title: "01. Introdução 2025", url: "https://drive.google.com/file/d/1RH4oxnoTr2diKk5qpM5Na9oVVA45ZANB/view?usp=drive_link" },
  { title: "02. Cadastro no SCPA 2025", url: "https://drive.google.com/file/d/1FL9VEBOE7lVr4lSy3OMAzWworMXTp-eH/view?usp=drive_link" },
  { title: "03. Solicitando acesso ao Sisagua 2025", url: "https://drive.google.com/file/d/17OjdRm7xMgf7HJCFtqgE_JyqOdUuSotU/view?usp=drive_link" },
  { title: "04. Recuperando senha de acesso 2025", url: "https://drive.google.com/file/d/1OxCa_jd8Qbo0IvO00ARR8WTtv2yfw0fZ/view?usp=drive_link" },
  { title: "05. Autorizando acesso ao Sisagua 2025", url: "https://drive.google.com/file/d/1AmAdtuLeXrfdBzHEJNxjeg4ObOFfpVvN/view?usp=drive_link" },
  { title: "06. Acesso ao dados e informações do Sisagua-2025", url: "https://drive.google.com/file/d/13EKGHnCKnK6kD3QBqQUK2y9RYJwGw0fK/view?usp=drive_link" },
  { title: "7. Reativação de cadastro", url: "https://drive.google.com/file/d/1SJ8pmYg6WQvCcTw96WTNQRinRz9bJUsK/view?usp=drive_link" },
  { title: "8. Orientações para alteração de e-mail.docx", url: "https://drive.google.com/file/d/1Qcoh57uFBl3pAjKIeFPkmDuLgSauEHb2/view?usp=drive_link" },
  { title: "Manual SCPA 2024", url: "https://drive.google.com/file/d/1jP4YH-RIDBI_DRVKu-vQlgBoHBw-Oiiq/view?usp=drive_link" }
];
