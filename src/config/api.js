// Configuration de l'API n8n
export const API_CONFIG = {
  // URL de base de ton instance n8n
  // En développement : http://localhost:5678
  // En production : https://ton-n8n.railway.app
  baseUrl: import.meta.env.VITE_N8N_URL || 'http://localhost:5678',
  
  // Endpoints pour chaque assistant
  endpoints: {
    // John - Marketing
    john: {
      generatePost: '/webhook/john/generate-post',
      removeBackground: '/webhook/john/remove-background',
      publishPost: '/webhook/john/publish-post',
    },
    // Mickael - Relation Client
    mickael: {
      createChatbot: '/webhook/mickael/create-chatbot',
      sendMessage: '/webhook/mickael/chat',
    },
    // Lou - SEO
    lou: {
      auditSeo: '/webhook/lou/audit-seo',
      optimizeContent: '/webhook/lou/optimize-content',
    },
    // Elio - Commercial
    elio: {
      searchProspects: '/webhook/elio/search-prospects',
      launchCampaign: '/webhook/elio/launch-campaign',
    },
    // Tom - Téléphonie
    tom: {
      transcribe: '/webhook/tom/transcribe',
    },
    // Charly - Générale
    charly: {
      chat: '/webhook/charly/chat',
    },
    // Manue - Comptable
    manue: {
      createInvoice: '/webhook/manue/create-invoice',
      createQuote: '/webhook/manue/create-quote',
    },
    // Julia - Juridique
    julia: {
      generateContract: '/webhook/julia/generate-contract',
    },
  },
};

// Fonction helper pour appeler n8n
export async function callN8n(endpoint, data = {}) {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur API n8n:', error);
    throw error;
  }
}