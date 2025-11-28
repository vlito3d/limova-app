import React, { useState, useEffect, useRef } from 'react';
import { Home, Grid, Wand2, Building2, Zap, Users, Settings, CreditCard, FileText, HelpCircle, Map, LogOut, ChevronLeft, ChevronRight, ChevronDown, Plus, Send, Mic, Paperclip, Globe, X, Check, Calendar, Clock, Download, Edit, Trash2, Eye, EyeOff, Image, MessageSquare, Linkedin, Instagram, Facebook, Twitter, Search, Filter, MoreHorizontal, MoreVertical, Play, Pause, RefreshCw, Upload, Sparkles, Phone, Scale, Calculator, Target, TrendingUp, Mail, Headphones, Camera, AlertCircle, CheckCircle, Info, Copy, ExternalLink, Share2, Bell, User, Lock, Shield, Palette, Moon, Sun, Monitor, Link, Unlink, Bot, Video, Type, Layers, Hash, Star, Award, Volume2, FileUp, Code, Smartphone, DollarSign, Package, Crown, Rocket, Briefcase, PieChart, BarChart3, Activity, ArrowUpRight, BookOpen, Coffee, Gift, Heart, Lightbulb, Music, Pencil, Save, ShoppingBag, Tag, Truck, Umbrella, Wifi, Wrench, Youtube, Bookmark, Flag } from 'lucide-react';

// ============ CONSTANTS ============
const ASSISTANTS = [
  { id: 'john', name: 'John', role: 'Assistant Marketing', color: 'from-purple-500 to-pink-500', bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500', icon: Camera, powers: ['Créer et publier', 'Effacer arrière-plan', 'Studio de création'], description: 'Créez, planifiez et publiez vos contenus en un clic.', greeting: 'Hey ! Je suis John, votre assistant marketing. Comment puis-je vous aider aujourd\'hui ?' },
  { id: 'mickael', name: 'Mickael', role: 'Assistant Relation Client', color: 'from-pink-500 to-rose-500', bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500', icon: MessageSquare, powers: ['Chatbot autonome', 'Analyse conversations'], description: 'Support instantané sur votre site & WhatsApp.', greeting: 'Bonjour ! Je suis Mickael. Je peux créer des chatbots intelligents pour vous.' },
  { id: 'lou', name: 'Lou', role: 'Assistante SEO', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500', icon: TrendingUp, powers: ['Audit SEO', 'Optimisation contenu', 'Recherche mots-clés'], description: 'Optimisez votre visibilité sur Google.', greeting: 'Salut ! Je suis Lou, votre experte SEO. Prête à booster votre visibilité !' },
  { id: 'elio', name: 'Elio', role: 'Assistant Commercial', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500', icon: Linkedin, powers: ['Automatisation LinkedIn', 'Gestion prospects'], description: 'Générez des leads sur LinkedIn.', greeting: 'Hey ! Je suis Elio. Je vais vous aider à générer plus de leads qualifiés.' },
  { id: 'tom', name: 'Tom', role: 'Assistant Téléphonie', color: 'from-orange-500 to-red-500', bgColor: 'bg-gradient-to-br from-orange-500 to-red-500', icon: Phone, powers: ['Transcription audio', 'Appels automatisés'], description: 'Automatisez vos appels et transcriptions.', greeting: 'Bonjour ! Je suis Tom. Envoyez-moi un audio, je le transcris pour vous.' },
  { id: 'charly', name: 'Charly', role: 'Assistante générale', color: 'from-amber-500 to-yellow-500', bgColor: 'bg-gradient-to-br from-amber-500 to-yellow-500', icon: Sparkles, powers: ['Chat général', 'Recherche web', 'Rédaction'], description: 'Votre assistante polyvalente.', greeting: 'Coucou ! Je suis Charly, votre assistante générale. Que puis-je faire pour vous ?' },
  { id: 'manue', name: 'Manue', role: 'Assistante Comptable', color: 'from-emerald-500 to-green-500', bgColor: 'bg-gradient-to-br from-emerald-500 to-green-500', icon: Calculator, powers: ['Facturation', 'Devis', 'Suivi dépenses'], description: 'Gérez votre comptabilité simplement.', greeting: 'Bonjour ! Je suis Manue. Je gère vos factures et devis en un clin d\'œil.' },
  { id: 'julia', name: 'Julia', role: 'Assistante Juridique', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500', icon: Scale, powers: ['Contrats', 'CGV', 'Mentions légales'], description: 'Vos documents juridiques en un clic.', greeting: 'Bonjour ! Je suis Julia. Je rédige vos documents juridiques sur mesure.' }
];

const SOCIAL_PLATFORMS = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-purple-500 via-pink-500 to-orange-500', connected: true, account: '@pulsoragency' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-500', connected: false },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-blue-600', connected: true, account: 'Pulsor Agency' },
  { id: 'twitter', name: 'X', icon: Twitter, color: 'from-gray-800 to-gray-900', connected: false, comingSoon: true }
];

// ============ UI COMPONENTS ============
const Avatar = ({ assistant, size = 'md' }) => {
  const sizes = { xs: 'w-6 h-6', sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16', xl: 'w-20 h-20' };
  const iconSizes = { xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-10 h-10' };
  const Icon = assistant.icon;
  return (
    <div className={`${sizes[size]} ${assistant.bgColor} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
      <Icon className={iconSizes[size]} />
    </div>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
    ghost: 'hover:bg-gray-100 text-gray-600',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    gradient: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
  };
  const sizes = { xs: 'px-2 py-1 text-xs', sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  return (
    <button className={`${variants[variant]} ${sizes[size]} rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', onClick, hover = false }) => (
  <div onClick={onClick} className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${hover ? 'hover:shadow-lg hover:border-gray-200 cursor-pointer transition-all' : ''} ${className}`}>
    {children}
  </div>
);

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;
  const sizes = { sm: 'max-w-md', md: 'max-w-2xl', lg: 'max-w-4xl', xl: 'max-w-6xl' };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className={`${sizes[size]} w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col`} onClick={e => e.stopPropagation()}>
        {title && (
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700'
  };
  return <span className={`${variants[variant]} px-2 py-0.5 rounded-full text-xs font-medium`}>{children}</span>;
};

const Input = ({ label, ...props }) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" {...props} />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" {...props} />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white" {...props}>
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
  </div>
);

const Toggle = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div className={`w-11 h-6 rounded-full transition-colors relative ${checked ? 'bg-blue-600' : 'bg-gray-300'}`} onClick={onChange}>
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </div>
    {label && <span className="text-sm">{label}</span>}
  </label>
);

const Tabs = ({ tabs, active, onChange }) => (
  <div className="flex gap-1 p-1 bg-gray-100 rounded-xl">
    {tabs.map(tab => (
      <button key={tab.id} onClick={() => onChange(tab.id)} className={`px-4 py-2 rounded-lg font-medium transition-all ${active === tab.id ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
        {tab.label}
      </button>
    ))}
  </div>
);

const Steps = ({ steps, current }) => (
  <div className="flex items-center justify-center gap-2">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${i + 1 < current ? 'bg-green-500 text-white' : i + 1 === current ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 'bg-gray-200 text-gray-500'}`}>
          {i + 1 < current ? <Check className="w-5 h-5" /> : i + 1}
        </div>
        {i < steps.length - 1 && <div className={`w-16 h-1 rounded ${i + 1 < current ? 'bg-green-500' : 'bg-gray-200'}`} />}
      </React.Fragment>
    ))}
  </div>
);

const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 mb-6 max-w-sm">{description}</p>
    {action}
  </div>
);

// ============ SIDEBAR ============
const Sidebar = ({ page, setPage, assistant, setAssistant }) => {
  const mainMenu = [
    { id: 'home', icon: Home, label: 'Accueil' },
    { id: 'assistants', icon: Grid, label: 'Mes Assistants' },
    { id: 'workflows', icon: Wand2, label: 'Workflows', badge: 'Bientôt' },
  ];
  
  const businessMenu = [
    { id: 'entreprise', icon: Building2, label: 'Entreprise' },
    { id: 'integrations', icon: Zap, label: 'Intégrations' },
    { id: 'team', icon: Users, label: 'Équipe' },
  ];
  
  const accountMenu = [
    { id: 'settings', icon: Settings, label: 'Paramètres' },
    { id: 'billing', icon: CreditCard, label: 'Facturation' },
  ];

  const getAssistantMenu = () => {
    if (!assistant) return [];
    const menus = {
      john: [
        { id: 'power-john-0', icon: Sparkles, label: 'Créer et publier' },
        { id: 'power-john-1', icon: Image, label: 'Effacer arrière-plan' },
        { id: 'calendar', icon: Calendar, label: 'Calendrier' },
        { id: 'all-contents', icon: Grid, label: 'Tous mes contenus' },
        { id: 'social', icon: Share2, label: 'Réseaux sociaux' },
      ],
      mickael: [
        { id: 'power-mickael-0', icon: Bot, label: 'Chatbot autonome' },
        { id: 'conversations', icon: MessageSquare, label: 'Conversations' },
      ],
      lou: [
        { id: 'power-lou-0', icon: Search, label: 'Audit SEO' },
        { id: 'power-lou-1', icon: FileText, label: 'Optimisation contenu' },
        { id: 'power-lou-2', icon: Hash, label: 'Mots-clés' },
      ],
      elio: [
        { id: 'power-elio-0', icon: Linkedin, label: 'Automatisation LinkedIn' },
        { id: 'prospects', icon: Users, label: 'Mes prospects' },
      ],
      tom: [
        { id: 'power-tom-0', icon: Headphones, label: 'Transcription audio' },
        { id: 'power-tom-1', icon: Phone, label: 'Appels automatisés' },
      ],
      charly: [
        { id: 'assistant-chat', icon: MessageSquare, label: 'Chat général' },
      ],
      manue: [
        { id: 'power-manue-0', icon: FileText, label: 'Facturation' },
        { id: 'power-manue-1', icon: FileText, label: 'Devis' },
        { id: 'power-manue-2', icon: DollarSign, label: 'Dépenses' },
      ],
      julia: [
        { id: 'power-julia-0', icon: FileText, label: 'Contrats' },
        { id: 'power-julia-1', icon: FileText, label: 'CGV' },
        { id: 'power-julia-2', icon: FileText, label: 'Mentions légales' },
      ]
    };
    return menus[assistant.id] || [];
  };

  return (
    <div className="w-64 bg-white border-r flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow">
          <span className="text-white font-bold text-xl">L</span>
        </div>
        <span className="font-bold text-xl">Limova</span>
      </div>

      {/* Current Assistant */}
      {assistant && (
        <div className="p-4 border-b bg-gray-50">
          <button onClick={() => { setAssistant(null); setPage('home'); }} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-3 text-sm">
            <ChevronLeft className="w-4 h-4" /> Vos Assistants IA <Badge variant="primary">8</Badge>
          </button>
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer" onClick={() => setPage('assistant-chat')}>
            <Avatar assistant={assistant} size="md" />
            <div>
              <h3 className="font-semibold">{assistant.name}</h3>
              <p className="text-xs text-gray-500">{assistant.role}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Principal</p>
        {mainMenu.map(item => (
          <button key={item.id} onClick={() => { setPage(item.id); if (item.id === 'home') setAssistant(null); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 ${page === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <item.icon className="w-5 h-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && <Badge variant="purple">{item.badge}</Badge>}
          </button>
        ))}

        <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">Entreprise</p>
        {businessMenu.map(item => (
          <button key={item.id} onClick={() => setPage(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 ${page === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}

        <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">Compte</p>
        {accountMenu.map(item => (
          <button key={item.id} onClick={() => setPage(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 ${page === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}

        {/* Assistant Menu */}
        {assistant && getAssistantMenu().length > 0 && (
          <>
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">Super pouvoirs</p>
            {getAssistantMenu().map(item => (
              <button key={item.id} onClick={() => setPage(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 ${page === item.id ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                <item.icon className="w-5 h-5 text-purple-500" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </>
        )}
      </nav>

      {/* Bottom */}
      <div className="p-2 border-t">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <HelpCircle className="w-5 h-5" />
          <span>Centre d'aide</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="text-lg">🇫🇷</span>
          <span className="text-sm text-gray-600">Français</span>
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600">
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

// ============ HOME PAGE ============
const HomePage = ({ setPage, setAssistant }) => {
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState(null);

  const quickActions = [
    { label: 'Créer un post Insta', icon: Instagram, assistant: 'john', power: 0 },
    { label: 'Optimiser mon SEO', icon: TrendingUp, assistant: 'lou', power: 0 },
    { label: 'Retranscrire un audio', icon: Headphones, assistant: 'tom', power: 0 },
    { label: 'Rédiger un email', icon: Mail, assistant: 'charly', power: 0 },
    { label: 'Rédiger un contrat', icon: FileText, assistant: 'julia', power: 0 },
    { label: 'Lancer une prospection', icon: Target, assistant: 'elio', power: 0 },
  ];

  const handleQuickAction = (action) => {
    const a = ASSISTANTS.find(x => x.id === action.assistant);
    setAssistant(a);
    setPage(`power-${action.assistant}-${action.power}`);
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-50 to-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Bonjour, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Théo</span> 👋
          </h1>
          <p className="text-gray-600">Que souhaitez-vous accomplir aujourd'hui ?</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20" />
            <div className="relative flex items-center bg-white rounded-full border shadow-lg">
              <input
                type="text"
                placeholder="Demandez n'importe quoi à vos assistants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-6 py-4 bg-transparent outline-none text-lg rounded-full"
              />
              <div className="flex items-center gap-2 pr-2">
                <button className="p-2 hover:bg-gray-100 rounded-full"><Paperclip className="w-5 h-5 text-gray-400" /></button>
                <button className="p-2 hover:bg-gray-100 rounded-full"><Mic className="w-5 h-5 text-gray-400" /></button>
                <button className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {quickActions.map((action, i) => (
            <button key={i} onClick={() => handleQuickAction(action)} className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border hover:border-blue-300 hover:bg-blue-50 hover:shadow transition-all text-sm group">
              <action.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-500" />
              <span className="group-hover:text-blue-600">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Assistants Grid */}
        <div className="grid grid-cols-4 gap-6">
          {ASSISTANTS.map((a) => (
            <div
              key={a.id}
              onClick={() => setPreview(a)}
              className={`${a.bgColor} rounded-2xl p-6 text-white cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <a.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{a.name}</h3>
                <p className="text-white/80 text-sm mb-4">{a.role}</p>
                <div className="flex flex-wrap gap-1">
                  {a.powers.slice(0, 2).map((p, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur px-2 py-1 rounded-full text-xs">{p}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transform translate-x-4 translate-y-4">
                <a.icon className="w-32 h-32" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <Modal isOpen={!!preview} onClose={() => setPreview(null)} size="lg">
        {preview && (
          <div className="p-6">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-24 h-24 ${preview.bgColor} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                <preview.icon className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{preview.name}</h2>
                <Badge variant="primary">{preview.role}</Badge>
                <p className="text-gray-600 mt-2">{preview.description}</p>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="bg-gray-50 rounded-2xl p-5 border mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Avatar assistant={preview} size="sm" />
                <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border">
                  <p>{preview.greeting}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input placeholder={`Message à ${preview.name}...`} className="flex-1 px-4 py-3 border rounded-xl" />
                <button className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Powers */}
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" /> Super pouvoirs
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {preview.powers.map((power, i) => (
                <button
                  key={i}
                  onClick={() => { setAssistant(preview); setPage(`power-${preview.id}-${i}`); setPreview(null); }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 border border-purple-100"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{power}</p>
                    <p className="text-sm text-gray-500">Ouvrir →</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setPreview(null)}>Fermer</Button>
              <Button onClick={() => { setAssistant(preview); setPage('assistant-chat'); setPreview(null); }}>
                <MessageSquare className="w-4 h-4" /> Discuter
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

// ============ ASSISTANT CHAT ============
const AssistantChat = ({ assistant }) => {
  const [messages, setMessages] = useState([{ role: 'assistant', content: assistant.greeting }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);
    
    await new Promise(r => setTimeout(r, 1500));
    
    const responses = {
      john: "Je peux vous aider à créer du contenu engageant ! Voulez-vous que je génère un post pour vos réseaux sociaux ?",
      mickael: "Je vais vous aider avec votre relation client. Souhaitez-vous créer un chatbot ou analyser des conversations ?",
      lou: "Je vais analyser votre SEO. Donnez-moi l'URL de votre site et je lance un audit complet.",
      elio: "Je suis prêt pour la prospection LinkedIn ! Voulez-vous lancer une nouvelle campagne ?",
      tom: "Envoyez-moi un fichier audio et je le transcris en quelques secondes.",
      charly: "Je suis là pour vous aider ! Dites-moi ce dont vous avez besoin.",
      manue: "Je peux créer une facture ou un devis. De quoi avez-vous besoin ?",
      julia: "Je vais rédiger vos documents juridiques. Quel type de document vous faut-il ?"
    };
    
    setMessages(prev => [...prev, { role: 'assistant', content: responses[assistant.id] || "Comment puis-je vous aider ?" }]);
    setLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 h-full">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <Avatar assistant={assistant} />
          <div>
            <h2 className="font-semibold text-lg">{assistant.name}</h2>
            <p className="text-sm text-gray-500">{assistant.role}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && <Avatar assistant={assistant} size="sm" />}
              <div className={`max-w-[70%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border shadow-sm rounded-bl-none'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <Avatar assistant={assistant} size="sm" />
              <div className="bg-white border p-4 rounded-2xl rounded-bl-none shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 bg-gray-100 rounded-2xl p-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send())}
                placeholder={`Message à ${assistant.name}...`}
                rows={1}
                className="w-full bg-transparent px-3 py-2 outline-none resize-none"
              />
              <div className="flex items-center justify-between px-2">
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-gray-200 rounded-lg"><Paperclip className="w-5 h-5 text-gray-500" /></button>
                  <button className="p-2 hover:bg-gray-200 rounded-lg"><Image className="w-5 h-5 text-gray-500" /></button>
                  <button className="p-2 hover:bg-gray-200 rounded-lg"><Globe className="w-5 h-5 text-gray-500" /></button>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-lg"><Mic className="w-5 h-5 text-gray-500" /></button>
              </div>
            </div>
            <button onClick={send} disabled={!input.trim()} className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 disabled:opacity-50">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ POST CREATOR (John Power 0) ============
const PostCreator = ({ assistant, setPage }) => {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('ai');
  const [description, setDescription] = useState('');
  const [dimension, setDimension] = useState('square');
  const [textLength, setTextLength] = useState('standard');
  const [generating, setGenerating] = useState(false);
  const [post, setPost] = useState(null);
  const [platforms, setPlatforms] = useState(['instagram']);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('10:00');
  const [publishNow, setPublishNow] = useState(false);
  const [caption, setCaption] = useState('');

  const dimensions = [
    { id: 'square', label: 'Carré (1:1)', desc: 'Instagram, Facebook' },
    { id: 'landscape', label: 'Paysage (16:9)', desc: 'LinkedIn, YouTube' },
    { id: 'portrait', label: 'Portrait (4:5)', desc: 'Instagram' },
    { id: 'story', label: 'Story (9:16)', desc: 'Stories' }
  ];

  const generate = async () => {
    setGenerating(true);
    await new Promise(r => setTimeout(r, 2500));
    const captions = {
      short: "⚽ Finale Champions League\n31 mai 2025 • 21h\n#Football #UCL",
      standard: "⚽ Ne manquez pas la finale de la Ligue des Champions !\n\n📅 31 mai 2025 à 21h\n🏆 PSG vs Inter Milan\n\n#ChampionsLeague #Football",
      detailed: "⚽ La plus grande soirée de football européen arrive !\n\nLe 31 mai 2025 à 21h, assistez à la finale de la Ligue des Champions : PSG vs Inter Milan.\n\n🏟️ Une ambiance de folie\n⭐ Les meilleures stars\n🏆 Un seul vainqueur\n\n#ChampionsLeague #UCL #PSG #Inter"
    };
    setCaption(captions[textLength]);
    setPost({ caption: captions[textLength], date: new Date().toLocaleDateString('fr-FR') });
    setGenerating(false);
    setStep(2);
  };

  const publish = async () => {
    setGenerating(true);
    await new Promise(r => setTimeout(r, 2000));
    setGenerating(false);
    setStep(4);
  };

  const togglePlatform = (id) => {
    const p = SOCIAL_PLATFORMS.find(x => x.id === id);
    if (p?.comingSoon || !p?.connected) return;
    setPlatforms(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Avatar assistant={assistant} size="lg" /></div>
          <h1 className="text-2xl font-bold">Créer un post pour vos réseaux sociaux</h1>
          <p className="text-gray-600 mt-2">Gagnez du temps et boostez votre présence en ligne</p>
        </div>

        <div className="mb-8"><Steps steps={['Création', 'Aperçu', 'Planification']} current={step} /></div>

        {/* Step 1 */}
        {step === 1 && (
          <Card className="p-6">
            <div className="flex justify-center mb-8">
              <Tabs tabs={[{ id: 'ai', label: `✨ Avec ${assistant.name}` }, { id: 'manual', label: '✍️ Manuellement' }]} active={mode} onChange={setMode} />
            </div>

            {mode === 'ai' ? (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-semibold text-lg">1. De quoi parle votre post ?</label>
                    <button className="text-sm text-purple-600 flex items-center gap-1"><Sparkles className="w-4 h-4" /> Suggestion</button>
                  </div>
                  <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Génère un post sur la finale de la Ligue des Champions entre le PSG et l'Inter Milan le 31 mai 2025" rows={4} />
                </div>

                <div>
                  <label className="font-semibold text-lg block mb-3">2. Format de l'image</label>
                  <div className="grid grid-cols-4 gap-4">
                    {dimensions.map(d => (
                      <button key={d.id} onClick={() => setDimension(d.id)} className={`p-4 rounded-xl border-2 text-center transition-all ${dimension === d.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <p className="font-medium">{d.label}</p>
                        <p className="text-xs text-gray-500">{d.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-lg block mb-3">3. Longueur du texte</label>
                  <div className="flex gap-3">
                    {['short', 'standard', 'detailed'].map(l => (
                      <button key={l} onClick={() => setTextLength(l)} className={`flex-1 py-4 rounded-xl font-medium transition-all ${textLength === l ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        {l === 'short' ? 'Court' : l === 'standard' ? 'Standard' : 'Détaillé'}
                      </button>
                    ))}
                  </div>
                </div>

                <Button onClick={generate} disabled={!description.trim()} variant="gradient" className="w-full py-4 text-lg">
                  {generating ? <><RefreshCw className="w-5 h-5 animate-spin" /> Génération...</> : <><Sparkles className="w-5 h-5" /> GÉNÉRER MON POST</>}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <Input label="Titre du post" placeholder="Mon super post" />
                <Textarea label="Contenu" placeholder="Écrivez votre post..." rows={6} />
                <div className="border-2 border-dashed rounded-xl p-12 text-center hover:border-blue-300 cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">Cliquez pour télécharger une image</p>
                </div>
                <Button className="w-full py-4">Continuer</Button>
              </div>
            )}
          </Card>
        )}

        {/* Step 2 */}
        {step === 2 && post && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Avatar assistant={assistant} size="sm" />
                <p className="font-semibold">Voici votre post !</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setStep(1)}><RefreshCw className="w-4 h-4" /> Régénérer</Button>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 rounded-xl flex items-center justify-center text-white relative overflow-hidden shadow-xl">
                  <div className="text-center p-6 relative z-10">
                    <p className="text-xs tracking-widest opacity-80 mb-2">UEFA CHAMPIONS LEAGUE</p>
                    <p className="text-4xl font-black mb-4">FINALE</p>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-full" />
                      <span className="text-xl font-bold">VS</span>
                      <div className="w-14 h-14 bg-white/20 rounded-full" />
                    </div>
                    <p className="text-lg font-bold">31 MAI 2025</p>
                    <p className="opacity-80">21H00</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1"><Download className="w-4 h-4" /> Télécharger</Button>
                  <Button variant="outline" size="sm" className="flex-1"><Edit className="w-4 h-4" /> Modifier</Button>
                </div>
              </div>

              <div className="flex-1">
                <label className="font-semibold block mb-2">Légende</label>
                <Textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows={8} />
                <p className="text-sm text-gray-400 mt-2">Créé le {post.date}</p>
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="ghost" onClick={() => setStep(1)}><ChevronLeft className="w-4 h-4" /> Retour</Button>
              <div className="flex gap-3">
                <Button variant="outline">Sauvegarder</Button>
                <Button onClick={() => setStep(3)}>Publier <ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 text-center">Où et quand publier ?</h2>

            <div className="mb-8">
              <label className="font-semibold block mb-4">Choisissez vos plateformes</label>
              <div className="grid grid-cols-4 gap-4">
                {SOCIAL_PLATFORMS.map(p => (
                  <button key={p.id} onClick={() => togglePlatform(p.id)} disabled={p.comingSoon} className={`p-5 rounded-xl border-2 transition-all relative ${platforms.includes(p.id) ? 'border-blue-500 bg-blue-50' : p.comingSoon ? 'border-gray-200 opacity-50' : p.connected ? 'border-gray-200 hover:border-gray-300' : 'border-gray-200 bg-gray-50'}`}>
                    {platforms.includes(p.id) && <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${p.color} flex items-center justify-center mx-auto mb-3 shadow`}>
                      <p.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-semibold">{p.name}</p>
                    {p.connected ? <p className="text-xs text-gray-500">{p.account}</p> : p.comingSoon ? <Badge>Bientôt</Badge> : <p className="text-xs text-blue-600">Connecter</p>}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <label className="font-semibold block mb-4">Quand publier ?</label>
              <div className="flex gap-4 mb-4">
                <input type="date" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} className="flex-1 px-4 py-3 border rounded-xl" />
                <input type="time" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} className="flex-1 px-4 py-3 border rounded-xl" />
              </div>
              <div className="text-center text-gray-400">— ou —</div>
              <button onClick={() => setPublishNow(true)} className={`w-full mt-4 py-4 rounded-xl font-medium flex items-center justify-center gap-2 ${publishNow ? 'bg-green-500 text-white' : 'border-2 border-dashed border-gray-300 hover:border-green-400'}`}>
                <Send className="w-5 h-5" /> Publier immédiatement
              </button>
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)}><ChevronLeft className="w-4 h-4" /> Retour</Button>
              <Button onClick={publish} disabled={platforms.length === 0 || (!scheduleDate && !publishNow)}>
                {generating ? <><RefreshCw className="w-4 h-4 animate-spin" /> Publication...</> : publishNow ? <><Send className="w-4 h-4" /> Publier maintenant</> : <><Calendar className="w-4 h-4" /> Planifier</>}
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4 - Success */}
        {step === 4 && (
          <Card className="p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{publishNow ? 'Post publié ! 🎉' : 'Post planifié ! 📅'}</h2>
            <p className="text-gray-600 mb-8">{publishNow ? `Publié sur ${platforms.join(', ')}` : `Sera publié le ${scheduleDate} à ${scheduleTime}`}</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => setPage('calendar')}><Calendar className="w-4 h-4" /> Calendrier</Button>
              <Button variant="outline" onClick={() => setPage('all-contents')}><Grid className="w-4 h-4" /> Mes contenus</Button>
              <Button onClick={() => { setStep(1); setPost(null); setDescription(''); setPublishNow(false); }}><Plus className="w-4 h-4" /> Nouveau post</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

// ============ BACKGROUND REMOVER (John Power 1) ============
const BackgroundRemover = ({ assistant }) => {
  const [image, setImage] = useState(null);
  const [processed, setProcessed] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const process = async () => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 3000));
    setProcessed(true);
    setProcessing(false);
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center gap-4 mb-8">
          <Avatar assistant={assistant} size="lg" />
          <div>
            <h1 className="text-2xl font-bold">Effacer l'arrière-plan</h1>
            <p className="text-gray-600">Supprimez l'arrière-plan de vos images en un clic</p>
          </div>
        </div>

        <Card className="p-8">
          {!image ? (
            <div className="border-2 border-dashed rounded-2xl p-16 text-center hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-pointer">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-purple-500" />
              </div>
              <p className="text-xl font-semibold mb-2">Glissez votre image ici</p>
              <p className="text-gray-500 mb-6">ou cliquez pour sélectionner</p>
              <input type="file" className="hidden" id="bg-upload" accept="image/*" onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])} />
              <label htmlFor="bg-upload"><Button variant="gradient" className="cursor-pointer"><Upload className="w-4 h-4" /> Choisir une image</Button></label>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Image originale</h3>
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"><img src={image} alt="Original" className="w-full h-full object-contain" /></div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Résultat</h3>
                    {processed && <Badge variant="success">Terminé</Badge>}
                  </div>
                  <div className="aspect-square bg-[repeating-conic-gradient(#e5e7eb_0%_25%,#f3f4f6_0%_50%)] bg-[size:20px_20px] rounded-2xl flex items-center justify-center">
                    {processing ? (
                      <div className="text-center"><RefreshCw className="w-8 h-8 animate-spin text-purple-500 mx-auto mb-2" /><p className="text-gray-500">Traitement...</p></div>
                    ) : processed ? (
                      <img src={image} alt="Processed" className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-center text-gray-400"><Wand2 className="w-12 h-12 mx-auto mb-2 opacity-50" /><p>Cliquez sur "Supprimer le fond"</p></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => { setImage(null); setProcessed(false); }}><RefreshCw className="w-4 h-4" /> Nouvelle image</Button>
                {!processed ? (
                  <Button variant="gradient" onClick={process} disabled={processing}>
                    {processing ? <><RefreshCw className="w-4 h-4 animate-spin" /> Traitement...</> : <><Wand2 className="w-4 h-4" /> Supprimer le fond</>}
                  </Button>
                ) : (
                  <Button variant="success"><Download className="w-4 h-4" /> Télécharger PNG</Button>
                )}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

// ============ CALENDAR ============
const CalendarPage = ({ assistant, setPage }) => {
  const [date, setDate] = useState(new Date(2025, 4, 1));
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const posts = [
    { day: 15, title: 'Lancement', status: 'scheduled' },
    { day: 20, title: 'Promo', status: 'draft' },
    { day: 25, title: 'Event', status: 'scheduled' },
    { day: 30, title: 'Finale UCL', status: 'published' },
    { day: 31, title: 'Finale UCL', status: 'scheduled' }
  ];

  const getDays = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const result = [];
    let start = firstDay.getDay() - 1;
    if (start === -1) start = 6;
    for (let i = start; i > 0; i--) result.push({ d: new Date(year, month, 1 - i), current: false });
    for (let i = 1; i <= lastDay.getDate(); i++) result.push({ d: new Date(year, month, i), current: true });
    while (result.length < 42) result.push({ d: new Date(year, month + 1, result.length - lastDay.getDate() - start + 1), current: false });
    return result;
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Calendrier de publication</h1>
            <p className="text-gray-600">Planifiez vos contenus à l'avance</p>
          </div>
          <Button onClick={() => setPage('power-john-0')}><Plus className="w-4 h-4" /> Nouveau post</Button>
        </div>

        <Card className="mb-6">
          <div className="flex items-center justify-between p-4 border-b">
            <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeft className="w-5 h-5" /></button>
            <h2 className="text-xl font-semibold">{months[date.getMonth()]} {date.getFullYear()}</h2>
            <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="grid grid-cols-7">
            {days.map(d => <div key={d} className="p-3 text-center font-medium text-gray-500 border-b bg-gray-50">{d}</div>)}
            {getDays().map((day, i) => {
              const dayPosts = posts.filter(p => p.day === day.d.getDate() && day.current);
              return (
                <div key={i} className={`min-h-24 p-2 border-b border-r ${day.current ? 'bg-white' : 'bg-gray-50'}`}>
                  <p className={`text-sm ${day.current ? 'text-gray-900' : 'text-gray-400'}`}>{day.d.getDate()}</p>
                  {dayPosts.map((p, j) => (
                    <div key={j} className={`mt-1 p-1 rounded text-xs text-white truncate ${p.status === 'published' ? 'bg-green-500' : p.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                      🏆 {p.title}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </Card>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded" /> Publié</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded" /> Planifié</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-400 rounded" /> Brouillon</div>
        </div>
      </div>
    </div>
  );
};

// ============ ALL CONTENTS ============
const AllContents = ({ assistant, setPage }) => {
  const [filter, setFilter] = useState('all');
  const contents = [
    { id: 1, title: 'Finale UCL', platform: 'instagram', date: '30/05/2025', status: 'published', emoji: '🏆' },
    { id: 2, title: 'Finale UCL', platform: 'instagram', date: '31/05/2025', status: 'scheduled', emoji: '⚽' },
    { id: 3, title: 'Lancement', platform: 'linkedin', date: '15/05/2025', status: 'published', emoji: '🚀' },
    { id: 4, title: 'Promo été', platform: 'instagram', date: '01/06/2025', status: 'draft', emoji: '☀️' },
  ];

  const filtered = contents.filter(c => filter === 'all' || c.status === filter);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Tous mes contenus</h1>
            <p className="text-gray-600">Gérez tous vos posts créés</p>
          </div>
          <Button onClick={() => setPage('power-john-0')}><Plus className="w-4 h-4" /> Nouveau post</Button>
        </div>

        <Card className="p-4 mb-6">
          <div className="flex gap-2">
            {[{ id: 'all', label: 'Tous' }, { id: 'published', label: 'Publiés' }, { id: 'scheduled', label: 'Planifiés' }, { id: 'draft', label: 'Brouillons' }].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} className={`px-4 py-2 rounded-lg font-medium ${filter === f.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                {f.label} ({contents.filter(c => f.id === 'all' || c.status === f.id).length})
              </button>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-6">
          {filtered.map(c => (
            <Card key={c.id} className="overflow-hidden group" hover>
              <div className="h-48 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center text-6xl relative">
                {c.emoji}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100"><Eye className="w-5 h-5" /></button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100"><Edit className="w-5 h-5" /></button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{c.title}</p>
                  <Badge variant={c.status === 'published' ? 'success' : c.status === 'scheduled' ? 'primary' : 'default'}>
                    {c.status === 'published' ? 'Publié' : c.status === 'scheduled' ? 'Planifié' : 'Brouillon'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Instagram className="w-4 h-4" /> {c.platform}</span>
                  <span>{c.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ SOCIAL CONNECTIONS ============
const SocialConnections = () => {
  const [platforms, setPlatforms] = useState(SOCIAL_PLATFORMS);
  const [connecting, setConnecting] = useState(null);

  const connect = async (id) => {
    setConnecting(id);
    await new Promise(r => setTimeout(r, 2000));
    setPlatforms(prev => prev.map(p => p.id === id ? { ...p, connected: true, account: '@moncompte' } : p));
    setConnecting(null);
  };

  const disconnect = (id) => {
    setPlatforms(prev => prev.map(p => p.id === id ? { ...p, connected: false, account: '' } : p));
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Connectez vos réseaux sociaux</h1>
          <p className="text-gray-600">Publiez automatiquement sur toutes vos plateformes</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {platforms.map(p => (
            <Card key={p.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center shadow-lg`}>
                  <p.icon className="w-8 h-8 text-white" />
                </div>
                {p.connected && <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" /> Connecté</Badge>}
              </div>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Publiez automatiquement sur {p.name}</p>
              {p.connected && <div className="bg-gray-50 rounded-lg p-3 mb-4"><p className="text-sm text-gray-600">Compte: <strong>{p.account}</strong></p></div>}
              {p.comingSoon ? (
                <Button variant="secondary" disabled className="w-full"><Clock className="w-4 h-4" /> Bientôt disponible</Button>
              ) : p.connected ? (
                <Button variant="outline" onClick={() => disconnect(p.id)} className="w-full text-red-600 border-red-200 hover:bg-red-50"><Unlink className="w-4 h-4" /> Déconnecter</Button>
              ) : (
                <Button onClick={() => connect(p.id)} className="w-full" disabled={connecting === p.id}>
                  {connecting === p.id ? <><RefreshCw className="w-4 h-4 animate-spin" /> Connexion...</> : <><Link className="w-4 h-4" /> Connecter</>}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ CHATBOT CREATOR (Mickael Power 0) ============
const ChatbotCreator = ({ assistant, setPage }) => {
  const [step, setStep] = useState(1);
  const [chatbots, setChatbots] = useState([{ id: 1, name: 'Support Client', status: 'active', conversations: 156, messages: 1420 }]);
  const [creating, setCreating] = useState(false);
  const [data, setData] = useState({ name: '', role: '', personality: '', prompt: '', welcomeMessage: 'Bonjour ! Comment puis-je vous aider ?', files: [], transferMessage: 'Je veux parler à un humain', conditions: { userRequest: true, notUnderstanding: false, keyword: false } });

  const create = () => {
    setChatbots(prev => [...prev, { id: Date.now(), name: data.name, status: 'active', conversations: 0, messages: 0 }]);
    setCreating(false);
    setStep(1);
    setData({ name: '', role: '', personality: '', prompt: '', welcomeMessage: 'Bonjour ! Comment puis-je vous aider ?', files: [], transferMessage: 'Je veux parler à un humain', conditions: { userRequest: true, notUnderstanding: false, keyword: false } });
  };

  if (!creating) {
    return (
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Mes Chatbots</h1>
              <p className="text-gray-600">Créez et gérez vos chatbots intelligents</p>
            </div>
            <Button onClick={() => setCreating(true)} variant="success"><Plus className="w-4 h-4" /> Nouveau chatbot</Button>
          </div>

          {chatbots.length === 0 ? (
            <EmptyState icon={Bot} title="Aucun chatbot" description="Créez votre premier chatbot" action={<Button onClick={() => setCreating(true)}>Créer un chatbot</Button>} />
          ) : (
            <div className="grid grid-cols-2 gap-6">
              {chatbots.map(bot => (
                <Card key={bot.id} className="p-6" hover>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white"><Bot className="w-6 h-6" /></div>
                      <div>
                        <h3 className="font-semibold">{bot.name}</h3>
                        <Badge variant={bot.status === 'active' ? 'success' : 'default'}>{bot.status === 'active' ? 'Actif' : 'Inactif'}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><p className="text-2xl font-bold text-blue-600">{bot.conversations}</p><p className="text-sm text-gray-500">Conversations</p></div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><p className="text-2xl font-bold text-green-600">{bot.messages}</p><p className="text-sm text-gray-500">Messages</p></div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1"><Edit className="w-4 h-4" /> Modifier</Button>
                    <Button variant="outline" size="sm" className="flex-1"><Eye className="w-4 h-4" /> Tester</Button>
                    <Button size="sm" className="flex-1"><Code className="w-4 h-4" /> Intégrer</Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto p-8">
        <button onClick={() => setCreating(false)} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4"><ChevronLeft className="w-4 h-4" /> Retour</button>
        <h1 className="text-2xl font-bold mb-6">Créer un chatbot</h1>
        <div className="mb-8"><Steps steps={['Configuration', 'Transfert', 'Ressources']} current={step} /></div>

        {step === 1 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input label="Nom du chatbot" placeholder="Ex: Assistant Support" value={data.name} onChange={(e) => setData(d => ({ ...d, name: e.target.value }))} />
                <Select label="Rôle" options={[{ value: '', label: 'Choisir...' }, { value: 'support', label: 'Support Client' }, { value: 'sales', label: 'Commercial' }, { value: 'booking', label: 'Prise de RDV' }]} value={data.role} onChange={(e) => setData(d => ({ ...d, role: e.target.value }))} />
              </div>
              <Select label="Personnalité" options={[{ value: '', label: 'Choisir...' }, { value: 'professional', label: 'Professionnel' }, { value: 'friendly', label: 'Amical' }, { value: 'formal', label: 'Formel' }]} value={data.personality} onChange={(e) => setData(d => ({ ...d, personality: e.target.value }))} />
              <Input label="Message d'accueil" placeholder="Bonjour ! Comment puis-je vous aider ?" value={data.welcomeMessage} onChange={(e) => setData(d => ({ ...d, welcomeMessage: e.target.value }))} />
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium">Instructions (Prompt)</label>
                  <button className="text-sm text-purple-600 flex items-center gap-1"><Sparkles className="w-4 h-4" /> Améliorer</button>
                </div>
                <Textarea placeholder="Décrivez le comportement souhaité..." value={data.prompt} onChange={(e) => setData(d => ({ ...d, prompt: e.target.value }))} rows={6} />
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={() => setCreating(false)}><ChevronLeft className="w-4 h-4" /> Annuler</Button>
                <Button onClick={() => setStep(2)} disabled={!data.name}>Continuer <ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Conditions de transfert</h3>
                <p className="text-sm text-gray-500 mb-4">Quand transférer vers un humain ?</p>
                <div className="space-y-3">
                  {[
                    { key: 'userRequest', label: "L'utilisateur demande à parler à un humain" },
                    { key: 'notUnderstanding', label: "L'IA ne comprend pas après plusieurs tentatives" },
                    { key: 'keyword', label: "L'IA détecte un mot-clé spécifique" }
                  ].map(c => (
                    <label key={c.key} className="flex items-center gap-3 p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" checked={data.conditions[c.key]} onChange={(e) => setData(d => ({ ...d, conditions: { ...d.conditions, [c.key]: e.target.checked } }))} className="w-5 h-5 rounded" />
                      <span>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Input label="Message de transfert" value={data.transferMessage} onChange={(e) => setData(d => ({ ...d, transferMessage: e.target.value }))} />
              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={() => setStep(1)}><ChevronLeft className="w-4 h-4" /> Retour</Button>
                <Button onClick={() => setStep(3)}>Continuer <ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Base de connaissances</h3>
                <p className="text-sm text-gray-500 mb-4">Ajoutez des documents pour enrichir les réponses</p>
                <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-blue-300 cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-blue-500 mb-3" />
                  <p className="font-medium text-blue-600">Télécharger des documents</p>
                  <p className="text-sm text-gray-400">PDF, Word, TXT</p>
                </div>
              </div>
              <Textarea label="Informations complémentaires" placeholder="Ajoutez des infos supplémentaires..." rows={4} />
              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={() => setStep(2)}><ChevronLeft className="w-4 h-4" /> Retour</Button>
                <Button onClick={create} variant="success"><CheckCircle className="w-4 h-4" /> Créer le chatbot</Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

// ============ LINKEDIN AUTOMATION (Elio Power 0) ============
const LinkedInAutomation = ({ assistant }) => {
  const [tab, setTab] = useState('overview');
  const [showCampaign, setShowCampaign] = useState(false);
  const [campaignStep, setCampaignStep] = useState(1);
  const [selected, setSelected] = useState([]);

  const prospects = [
    { id: 1, name: 'Geoffrey Martin', title: 'CEO @ TechStartup', location: 'Paris' },
    { id: 2, name: 'Virginie POULET', title: 'DRH @ Entreprise', location: 'Lyon' },
    { id: 3, name: 'Aurélien Morillon', title: 'Fondateur @ Agence', location: 'Nantes' },
    { id: 4, name: 'Jean-Daniel C.', title: 'Directeur Finance', location: 'Marseille' },
    { id: 5, name: 'Carla Danielou', title: 'Brand Manager', location: 'Lille' },
  ];

  const campaigns = [
    { id: 1, name: 'Prospection Q2', status: 'active', sent: 89, accepted: 45, replied: 12 },
    { id: 2, name: 'Lancement produit', status: 'active', sent: 156, accepted: 78, replied: 23 },
  ];

  const stats = { total: 3, active: 2, sent: 270, accepted: 131, rate: '49%', replied: 37, replyRate: '28%' };

  const toggle = (id) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Avatar assistant={assistant} size="lg" />
            <div>
              <h1 className="text-2xl font-bold">Automatisation LinkedIn</h1>
              <p className="text-gray-600">Automatisez votre prospection</p>
            </div>
          </div>
          <Button onClick={() => setShowCampaign(true)}><Plus className="w-4 h-4" /> Nouvelle campagne</Button>
        </div>

        <div className="mb-6"><Tabs tabs={[{ id: 'overview', label: "Vue d'ensemble" }, { id: 'prospects', label: 'Prospects' }, { id: 'campaigns', label: 'Campagnes' }]} active={tab} onChange={setTab} /></div>

        {tab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Campagnes</p><p className="text-3xl font-bold">{stats.total}</p></Card>
              <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Actives</p><p className="text-3xl font-bold text-green-600">{stats.active}</p></Card>
              <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Envoyées</p><p className="text-3xl font-bold text-blue-600">{stats.sent}</p></Card>
              <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Taux acceptation</p><p className="text-3xl font-bold text-purple-600">{stats.rate}</p></Card>
            </div>
            <Card className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl flex items-center justify-center"><Linkedin className="w-7 h-7 text-white" /></div>
                  <div><p className="font-semibold">LinkedIn connecté</p><p className="text-sm text-gray-500">Théo Martin • +500 connexions</p></div>
                </div>
                <div className="text-right"><p className="text-sm text-gray-500">Invitations restantes</p><p className="font-bold text-blue-600">75 / 100</p></div>
              </div>
            </Card>
          </div>
        )}

        {tab === 'prospects' && (
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input placeholder="Rechercher des prospects..." className="w-full pl-10 pr-4 py-3 border rounded-xl" />
                </div>
                <Button variant="outline"><Filter className="w-4 h-4" /> Filtres</Button>
                <Button><Search className="w-4 h-4" /> Rechercher</Button>
              </div>
            </Card>
            <Card>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <input type="checkbox" checked={selected.length === prospects.length} onChange={() => setSelected(selected.length === prospects.length ? [] : prospects.map(p => p.id))} className="w-5 h-5 rounded" />
                  <span className="text-gray-600">Tout sélectionner</span>
                  {selected.length > 0 && <Badge variant="primary">{selected.length} sélectionné(s)</Badge>}
                </div>
                {selected.length > 0 && <Button size="sm" onClick={() => setShowCampaign(true)}><Send className="w-4 h-4" /> Lancer campagne</Button>}
              </div>
              <div className="divide-y">
                {prospects.map(p => (
                  <div key={p.id} className={`flex items-center gap-4 p-4 hover:bg-gray-50 ${selected.includes(p.id) ? 'bg-blue-50' : ''}`}>
                    <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggle(p.id)} className="w-5 h-5 rounded" />
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">{p.name.charAt(0)}</div>
                    <div className="flex-1"><p className="font-medium">{p.name}</p><p className="text-sm text-gray-500">{p.title}</p></div>
                    <p className="text-sm text-gray-500">{p.location}</p>
                    <Badge>2e</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {tab === 'campaigns' && (
          <div className="space-y-4">
            {campaigns.map(c => (
              <Card key={c.id} className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${c.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-gray-500">{c.status === 'active' ? 'En cours' : 'En pause'}</p></div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center"><p className="text-2xl font-bold text-blue-600">{c.sent}</p><p className="text-xs text-gray-500">Envoyées</p></div>
                    <div className="text-center"><p className="text-2xl font-bold text-green-600">{c.accepted}</p><p className="text-xs text-gray-500">Acceptées</p></div>
                    <div className="text-center"><p className="text-2xl font-bold text-purple-600">{c.replied}</p><p className="text-xs text-gray-500">Réponses</p></div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm"><Pause className="w-4 h-4" /></Button>
                      <Button variant="outline" size="sm"><Edit className="w-4 h-4" /></Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          <div><p className="text-blue-800 font-medium">Limite LinkedIn</p><p className="text-blue-600 text-sm">100 invitations/semaine. Il vous reste <strong>75 invitations</strong>.</p></div>
        </div>
      </div>

      <Modal isOpen={showCampaign} onClose={() => { setShowCampaign(false); setCampaignStep(1); }} title="Créer une campagne" size="md">
        <div className="p-6">
          <Steps steps={['Sélection', 'Configuration', 'Message']} current={campaignStep} />
          {campaignStep === 1 && (
            <div className="mt-8 text-center">
              <div className="text-6xl mb-6">👋</div>
              <p className="text-gray-600 mb-2">Vous allez créer une campagne avec</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">{selected.length || 25} prospects</p>
            </div>
          )}
          {campaignStep === 2 && (
            <div className="mt-8"><Input label="Nom de la campagne" placeholder="Ex: Prospection Q2 2025" /></div>
          )}
          {campaignStep === 3 && (
            <div className="mt-8"><Textarea label="Message d'invitation (optionnel)" placeholder="Bonjour {prénom}, j'ai vu votre profil..." rows={4} /></div>
          )}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button variant="ghost" onClick={() => campaignStep > 1 ? setCampaignStep(campaignStep - 1) : setShowCampaign(false)}><ChevronLeft className="w-4 h-4" /> {campaignStep === 1 ? 'Annuler' : 'Retour'}</Button>
            {campaignStep < 3 ? (
              <Button onClick={() => setCampaignStep(campaignStep + 1)}>Continuer <ChevronRight className="w-4 h-4" /></Button>
            ) : (
              <Button variant="success" onClick={() => { setShowCampaign(false); setCampaignStep(1); }}><Send className="w-4 h-4" /> Lancer</Button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

// ============ AUDIO TRANSCRIPTION (Tom Power 0) ============
const AudioTranscription = ({ assistant }) => {
  const [file, setFile] = useState(null);
  const [transcribing, setTranscribing] = useState(false);
  const [transcription, setTranscription] = useState('');

  const transcribe = async () => {
    setTranscribing(true);
    await new Promise(r => setTimeout(r, 3000));
    setTranscription("Bonjour, je vous appelle concernant notre réunion de demain. Je voulais confirmer l'horaire et le lieu. Pouvez-vous me rappeler quand vous avez un moment ? Merci beaucoup, à bientôt.");
    setTranscribing(false);
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center gap-4 mb-8">
          <Avatar assistant={assistant} size="lg" />
          <div>
            <h1 className="text-2xl font-bold">Transcription audio</h1>
            <p className="text-gray-600">Convertissez vos fichiers audio en texte</p>
          </div>
        </div>

        <Card className="p-8">
          {!file && !transcription ? (
            <div className="border-2 border-dashed rounded-2xl p-16 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors cursor-pointer">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-orange-500" />
              </div>
              <p className="text-xl font-semibold mb-2">Déposez votre fichier audio ici</p>
              <p className="text-gray-500 mb-6">MP3, WAV, M4A jusqu'à 25MB</p>
              <input type="file" className="hidden" id="audio-upload" accept="audio/*" onChange={(e) => e.target.files[0] && setFile(e.target.files[0])} />
              <label htmlFor="audio-upload"><Button className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-500"><Upload className="w-4 h-4" /> Choisir un fichier</Button></label>
            </div>
          ) : !transcription ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center"><Volume2 className="w-6 h-6 text-orange-500" /></div>
                <div className="flex-1"><p className="font-medium">{file?.name || 'audio.mp3'}</p><p className="text-sm text-gray-500">{((file?.size || 0) / 1024 / 1024).toFixed(2)} MB</p></div>
                <button onClick={() => setFile(null)} className="p-2 hover:bg-gray-200 rounded-lg"><Trash2 className="w-5 h-5 text-red-500" /></button>
              </div>
              <Button onClick={transcribe} disabled={transcribing} className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500">
                {transcribing ? <><RefreshCw className="w-5 h-5 animate-spin" /> Transcription en cours...</> : <><Headphones className="w-5 h-5" /> Transcrire</>}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Transcription</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Copy className="w-4 h-4" /> Copier</Button>
                  <Button variant="outline" size="sm"><Download className="w-4 h-4" /> Télécharger</Button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border"><p className="text-gray-700 whitespace-pre-wrap">{transcription}</p></div>
              <Button variant="outline" onClick={() => { setFile(null); setTranscription(''); }} className="w-full"><RefreshCw className="w-4 h-4" /> Nouvelle transcription</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

// ============ INVOICE CREATOR (Manue Power 0) ============
const InvoiceCreator = ({ assistant }) => {
  const [invoices] = useState([
    { id: 'INV-001', client: 'Acme Corp', amount: '2 500 €', date: '15/05/2025', status: 'paid' },
    { id: 'INV-002', client: 'TechStart', amount: '1 200 €', date: '20/05/2025', status: 'pending' },
    { id: 'INV-003', client: 'Design Studio', amount: '800 €', date: '25/05/2025', status: 'draft' },
  ]);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar assistant={assistant} size="lg" />
            <div>
              <h1 className="text-2xl font-bold">Facturation</h1>
              <p className="text-gray-600">Gérez vos factures simplement</p>
            </div>
          </div>
          <Button variant="success"><Plus className="w-4 h-4" /> Nouvelle facture</Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Total facturé</p><p className="text-2xl font-bold">4 500 €</p></Card>
          <Card className="p-5"><p className="text-sm text-gray-500 mb-1">En attente</p><p className="text-2xl font-bold text-yellow-600">1 200 €</p></Card>
          <Card className="p-5"><p className="text-sm text-gray-500 mb-1">Payé</p><p className="text-2xl font-bold text-green-600">2 500 €</p></Card>
        </div>

        <Card>
          <div className="p-4 border-b"><h3 className="font-semibold">Mes factures</h3></div>
          <div className="divide-y">
            {invoices.map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"><FileText className="w-5 h-5 text-green-600" /></div>
                  <div><p className="font-medium">{inv.id}</p><p className="text-sm text-gray-500">{inv.client}</p></div>
                </div>
                <p className="font-semibold">{inv.amount}</p>
                <p className="text-sm text-gray-500">{inv.date}</p>
                <Badge variant={inv.status === 'paid' ? 'success' : inv.status === 'pending' ? 'warning' : 'default'}>
                  {inv.status === 'paid' ? 'Payé' : inv.status === 'pending' ? 'En attente' : 'Brouillon'}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Eye className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Download className="w-4 h-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ============ CONTRACT CREATOR (Julia Power 0) ============
const ContractCreator = ({ assistant }) => {
  const templates = [
    { id: 1, name: 'Contrat de prestation', desc: 'Pour vos services', icon: FileText },
    { id: 2, name: 'CGV', desc: 'Conditions générales', icon: Scale },
    { id: 3, name: 'NDA', desc: 'Confidentialité', icon: Lock },
    { id: 4, name: 'Mentions légales', desc: 'Pour votre site', icon: Shield },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center gap-4 mb-8">
          <Avatar assistant={assistant} size="lg" />
          <div>
            <h1 className="text-2xl font-bold">Documents juridiques</h1>
            <p className="text-gray-600">Créez vos documents en quelques clics</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {templates.map(t => (
            <Card key={t.id} className="p-6" hover>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center"><t.icon className="w-7 h-7 text-indigo-600" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t.desc}</p>
                  <Button size="sm"><Sparkles className="w-4 h-4" /> Générer</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Ou décrivez votre besoin</h3>
          <Textarea placeholder="Ex: J'ai besoin d'un contrat de freelance pour un développeur web..." rows={4} />
          <Button className="mt-4" variant="gradient"><Sparkles className="w-4 h-4" /> Générer avec Julia</Button>
        </Card>
      </div>
    </div>
  );
};

// ============ SETTINGS PAGE ============
const SettingsPage = () => {
  const [tab, setTab] = useState('profile');

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
        <div className="flex gap-8">
          <div className="w-48 space-y-1">
            {[{ id: 'profile', label: 'Profil', icon: User }, { id: 'security', label: 'Sécurité', icon: Shield }, { id: 'notifications', label: 'Notifications', icon: Bell }, { id: 'appearance', label: 'Apparence', icon: Palette }].map(item => (
              <button key={item.id} onClick={() => setTab(item.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg ${tab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                <item.icon className="w-5 h-5" />{item.label}
              </button>
            ))}
          </div>
          <Card className="flex-1 p-6">
            {tab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Informations du profil</h2>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">T</div>
                  <div><Button variant="outline" size="sm">Changer la photo</Button></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Prénom" defaultValue="Théo" />
                  <Input label="Nom" defaultValue="Martin" />
                </div>
                <Input label="Email" defaultValue="theo@pulsoragency.com" />
                <Button>Sauvegarder</Button>
              </div>
            )}
            {tab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Sécurité</h2>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div><p className="font-medium">Mot de passe</p><p className="text-sm text-gray-500">Dernière modification il y a 3 mois</p></div>
                  <Button variant="outline" size="sm">Modifier</Button>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div><p className="font-medium">Double authentification</p><p className="text-sm text-gray-500">Sécurisez votre compte</p></div>
                  <Toggle checked={false} onChange={() => {}} />
                </div>
              </div>
            )}
            {tab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Notifications</h2>
                {['Notifications email', 'Posts publiés', 'Nouvelles conversations', 'Invitations LinkedIn'].map((n, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                    <p className="font-medium">{n}</p>
                    <Toggle checked={i < 2} onChange={() => {}} />
                  </div>
                ))}
              </div>
            )}
            {tab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Apparence</h2>
                <p className="font-medium mb-3">Thème</p>
                <div className="flex gap-4">
                  {[{ id: 'light', label: 'Clair', icon: Sun }, { id: 'dark', label: 'Sombre', icon: Moon }, { id: 'system', label: 'Système', icon: Monitor }].map(t => (
                    <button key={t.id} className={`flex-1 p-4 rounded-xl border-2 text-center ${t.id === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                      <t.icon className="w-6 h-6 mx-auto mb-2" /><p className="font-medium">{t.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

// ============ BILLING PAGE ============
const BillingPage = () => {
  const plans = [
    { id: 'free', name: 'Gratuit', price: '0€', features: ['10 posts/mois', '1 chatbot', 'Support email'], current: false },
    { id: 'pro', name: 'Pro', price: '29€', features: ['100 posts/mois', '5 chatbots', 'LinkedIn basique', 'Support prioritaire'], current: true },
    { id: 'business', name: 'Business', price: '79€', features: ['Posts illimités', 'Chatbots illimités', 'LinkedIn avancé', 'API access', 'Support dédié'], current: false }
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-2">Facturation</h1>
        <p className="text-gray-600 mb-8">Gérez votre abonnement et vos factures</p>

        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Plan actuel</p>
              <p className="text-2xl font-bold">Pro <Badge variant="primary">Actif</Badge></p>
              <p className="text-gray-600">29€/mois • Renouvelé le 15/06/2025</p>
            </div>
            <Button variant="outline">Changer de plan</Button>
          </div>
        </Card>

        <h2 className="text-lg font-semibold mb-4">Tous les plans</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {plans.map(p => (
            <Card key={p.id} className={`p-6 ${p.current ? 'ring-2 ring-blue-500' : ''}`}>
              {p.current && <Badge variant="primary" className="mb-2">Plan actuel</Badge>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-3xl font-bold mt-2">{p.price}<span className="text-base font-normal text-gray-500">/mois</span></p>
              <ul className="mt-4 space-y-2">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{f}</li>
                ))}
              </ul>
              <Button variant={p.current ? 'secondary' : 'primary'} className="w-full mt-6" disabled={p.current}>
                {p.current ? 'Plan actuel' : 'Choisir'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ INTEGRATIONS PAGE ============
const IntegrationsPage = () => {
  const integrations = [
    { id: 1, name: 'Slack', desc: 'Notifications dans Slack', icon: MessageSquare, connected: false },
    { id: 2, name: 'Zapier', desc: 'Automatisations', icon: Zap, connected: true },
    { id: 3, name: 'Google Drive', desc: 'Stockage fichiers', icon: Folder, connected: false },
    { id: 4, name: 'Notion', desc: 'Documentation', icon: BookOpen, connected: false },
    { id: 5, name: 'HubSpot', desc: 'CRM', icon: Target, connected: true },
    { id: 6, name: 'Stripe', desc: 'Paiements', icon: CreditCard, connected: false },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-2">Intégrations</h1>
        <p className="text-gray-600 mb-8">Connectez vos outils préférés</p>

        <div className="grid grid-cols-3 gap-6">
          {integrations.map(int => (
            <Card key={int.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><int.icon className="w-6 h-6 text-gray-600" /></div>
                {int.connected && <Badge variant="success">Connecté</Badge>}
              </div>
              <h3 className="font-semibold">{int.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{int.desc}</p>
              <Button variant={int.connected ? 'outline' : 'primary'} size="sm" className="w-full">
                {int.connected ? 'Configurer' : 'Connecter'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ TEAM PAGE ============
const TeamPage = () => {
  const members = [
    { id: 1, name: 'Théo Martin', email: 'theo@pulsor.com', role: 'Admin', avatar: 'T' },
    { id: 2, name: 'Marie Dupont', email: 'marie@pulsor.com', role: 'Éditeur', avatar: 'M' },
    { id: 3, name: 'Lucas Bernard', email: 'lucas@pulsor.com', role: 'Membre', avatar: 'L' },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Équipe</h1>
            <p className="text-gray-600">Gérez les membres de votre équipe</p>
          </div>
          <Button><Plus className="w-4 h-4" /> Inviter</Button>
        </div>

        <Card>
          <div className="divide-y">
            {members.map(m => (
              <div key={m.id} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">{m.avatar}</div>
                  <div><p className="font-medium">{m.name}</p><p className="text-sm text-gray-500">{m.email}</p></div>
                </div>
                <Badge variant={m.role === 'Admin' ? 'purple' : m.role === 'Éditeur' ? 'primary' : 'default'}>{m.role}</Badge>
                <Button variant="ghost" size="sm"><MoreHorizontal className="w-4 h-4" /></Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ============ ENTERPRISE PAGE ============
const EnterprisePage = () => (
  <div className="flex-1 bg-gray-50 overflow-y-auto">
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">Entreprise</h1>
      <p className="text-gray-600 mb-8">Informations de votre entreprise</p>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">P</div>
            <div><Button variant="outline" size="sm">Changer le logo</Button></div>
          </div>
          <Input label="Nom de l'entreprise" defaultValue="Pulsor Agency" />
          <Input label="Site web" defaultValue="https://pulsoragency.com" />
          <Textarea label="Description" defaultValue="Agence de marketing digital spécialisée dans les réseaux sociaux." rows={3} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Secteur d'activité" defaultValue="Marketing digital" />
            <Input label="Taille de l'entreprise" defaultValue="1-10 employés" />
          </div>
          <Button>Sauvegarder</Button>
        </div>
      </Card>
    </div>
  </div>
);

// ============ ASSISTANTS PAGE ============
const AssistantsPage = ({ setPage, setAssistant }) => (
  <div className="flex-1 bg-gray-50 overflow-y-auto">
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">Mes Assistants IA</h1>
      <p className="text-gray-600 mb-8">Découvrez tous vos assistants et leurs super pouvoirs</p>

      <div className="grid grid-cols-2 gap-6">
        {ASSISTANTS.map(a => (
          <Card key={a.id} className="p-6" hover onClick={() => { setAssistant(a); setPage('assistant-chat'); }}>
            <div className="flex items-start gap-4">
              <Avatar assistant={a} size="lg" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{a.name}</h3>
                <Badge variant="primary">{a.role}</Badge>
                <p className="text-gray-600 mt-2 text-sm">{a.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {a.powers.map((p, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

// ============ MAIN APP ============
export default function App() {
  const [page, setPage] = useState('home');
  const [assistant, setAssistant] = useState(null);

  const renderPage = () => {
    // Power pages
    if (page.startsWith('power-')) {
      const [, id, idx] = page.split('-');
      const a = ASSISTANTS.find(x => x.id === id) || assistant;
      
      if (id === 'john' && idx === '0') return <PostCreator assistant={a} setPage={setPage} />;
      if (id === 'john' && idx === '1') return <BackgroundRemover assistant={a} />;
      if (id === 'mickael' && idx === '0') return <ChatbotCreator assistant={a} setPage={setPage} />;
      if (id === 'elio' && idx === '0') return <LinkedInAutomation assistant={a} />;
      if (id === 'tom' && idx === '0') return <AudioTranscription assistant={a} />;
      if (id === 'manue' && idx === '0') return <InvoiceCreator assistant={a} />;
      if (id === 'julia' && idx === '0') return <ContractCreator assistant={a} />;
      
      return <AssistantChat assistant={a} />;
    }

    switch (page) {
      case 'home': return <HomePage setPage={setPage} setAssistant={setAssistant} />;
      case 'assistant-chat': return assistant ? <AssistantChat assistant={assistant} /> : <HomePage setPage={setPage} setAssistant={setAssistant} />;
      case 'calendar': return assistant ? <CalendarPage assistant={assistant} setPage={setPage} /> : null;
      case 'all-contents': return assistant ? <AllContents assistant={assistant} setPage={setPage} /> : null;
      case 'social': return <SocialConnections />;
      case 'assistants': return <AssistantsPage setPage={setPage} setAssistant={setAssistant} />;
      case 'settings': return <SettingsPage />;
      case 'billing': return <BillingPage />;
      case 'integrations': return <IntegrationsPage />;
      case 'team': return <TeamPage />;
      case 'entreprise': return <EnterprisePage />;
      default: return <HomePage setPage={setPage} setAssistant={setAssistant} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar page={page} setPage={setPage} assistant={assistant} setAssistant={setAssistant} />
      {renderPage()}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">
        T
      </div>
    </div>
  );
}

const Folder = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const CodeIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
