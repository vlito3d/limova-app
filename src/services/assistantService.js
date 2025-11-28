import { API_CONFIG, callN8n } from '../config/api';

// ============ JOHN - MARKETING ============

export const johnService = {
  // Générer un post
  async generatePost({ description, dimension, textLength, platform }) {
    return callN8n(API_CONFIG.endpoints.john.generatePost, {
      description,
      dimension,
      textLength,
      platform,
    });
  },

  // Supprimer l'arrière-plan
  async removeBackground(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await fetch(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.john.removeBackground}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    return response.json();
  },

  // Publier un post
  async publishPost({ caption, platforms, scheduledDate }) {
    return callN8n(API_CONFIG.endpoints.john.publishPost, {
      caption,
      platforms,
      scheduledDate,
    });
  },
};

// ============ MICKAEL - CHATBOT ============

export const mickaelService = {
  // Créer un chatbot
  async createChatbot(config) {
    return callN8n(API_CONFIG.endpoints.mickael.createChatbot, config);
  },

  // Envoyer un message au chatbot
  async sendMessage({ chatbotId, message, history }) {
    return callN8n(API_CONFIG.endpoints.mickael.sendMessage, {
      chatbotId,
      message,
      history,
    });
  },
};

// ============ LOU - SEO ============

export const louService = {
  // Audit SEO d'une URL
  async auditSeo(url) {
    return callN8n(API_CONFIG.endpoints.lou.auditSeo, { url });
  },

  // Optimiser un contenu
  async optimizeContent({ content, keywords }) {
    return callN8n(API_CONFIG.endpoints.lou.optimizeContent, {
      content,
      keywords,
    });
  },
};

// ============ ELIO - COMMERCIAL ============

export const elioService = {
  // Rechercher des prospects
  async searchProspects(filters) {
    return callN8n(API_CONFIG.endpoints.elio.searchProspects, filters);
  },

  // Lancer une campagne
  async launchCampaign({ prospectIds, message, campaignName }) {
    return callN8n(API_CONFIG.endpoints.elio.launchCampaign, {
      prospectIds,
      message,
      campaignName,
    });
  },
};

// ============ TOM - TÉLÉPHONIE ============

export const tomService = {
  // Transcrire un audio
  async transcribe(audioFile) {
    const formData = new FormData();
    formData.append('audio', audioFile);
    
    const response = await fetch(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.tom.transcribe}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    return response.json();
  },
};

// ============ CHARLY - GÉNÉRALE ============

export const charlyService = {
  // Chat général
  async chat({ message, history }) {
    return callN8n(API_CONFIG.endpoints.charly.chat, {
      message,
      history,
    });
  },
};

// ============ MANUE - COMPTABLE ============

export const manueService = {
  // Créer une facture
  async createInvoice(invoiceData) {
    return callN8n(API_CONFIG.endpoints.manue.createInvoice, invoiceData);
  },

  // Créer un devis
  async createQuote(quoteData) {
    return callN8n(API_CONFIG.endpoints.manue.createQuote, quoteData);
  },
};

// ============ JULIA - JURIDIQUE ============

export const juliaService = {
  // Générer un contrat
  async generateContract({ type, parties, clauses }) {
    return callN8n(API_CONFIG.endpoints.julia.generateContract, {
      documentType: type,
      parties,
      clauses,
    });
  },
};