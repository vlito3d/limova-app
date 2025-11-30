import React, { useState, useEffect, useRef } from 'react';
import { Home, Grid, Wand2, Building2, Zap, Users, Settings, CreditCard, FileText, HelpCircle, Map, LogOut, ChevronLeft, ChevronRight, ChevronDown, Plus, Send, Mic, Paperclip, Globe, X, Check, Calendar, Clock, Download, Edit, Trash2, Eye, EyeOff, Image, MessageSquare, Linkedin, Instagram, Facebook, Twitter, Search, Filter, MoreHorizontal, MoreVertical, Play, Pause, RefreshCw, Upload, Sparkles, Phone, Scale, Calculator, Target, TrendingUp, Mail, Headphones, Camera, AlertCircle, CheckCircle, Info, Copy, ExternalLink, Share2, Bell, User, Lock, Shield, Palette, Moon, Sun, Monitor, Link, Unlink, Bot, Video, Type, Layers, Hash, Star, Award, Volume2, FileUp, Code, Smartphone, DollarSign, Package, Crown, Rocket, Briefcase, PieChart, BarChart3, Activity, ArrowUpRight, BookOpen, Coffee, Gift, Heart, Lightbulb, Music, Pencil, Save, ShoppingBag, Tag, Truck, Umbrella, Wifi, Wrench, Youtube, Bookmark, Flag } from 'lucide-react';

// ============ CONSTANTS ============
const ASSISTANTS = [
  { id: 'john', name: 'John', role: 'Assistant Marketing', color: 'from-purple-500 to-pink-500', bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500', icon: Camera, powers: ['Créer et publier', 'Effacer arrière-plan', 'Studio de création'], description: 'Créez, planifiez et publiez vos contenus en un clic.', greeting: 'Hey ! Je suis John, votre assistant marketing. Comment puis-je vous aider aujourd\'hui ?' },
  { id: 'mickael', name: 'Mickael', role: 'Assistant Créateur Musical', color: 'from-pink-500 to-rose-500', bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500', icon: MessageSquare, powers: ['Créer un projet musical', 'Comptines, clips, musiques'], description: 'Génère des musiques, comptines et clips vidéo avec l\'IA', greeting: 'Salut ! 🎵 Je suis Mickael, ton créateur musical. Je peux générer des comptines, des musiques, des clips rap, et bien plus encore ! Quel type de projet musical veux-tu créer ?' },
  { id: 'lou', name: 'Lou', role: 'Assistante SEO', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500', icon: TrendingUp, powers: ['Audit SEO', 'Optimisation contenu', 'Recherche mots-clés'], description: 'Optimisez votre visibilité sur Google.', greeting: 'Salut ! Je suis Lou, votre experte SEO. Prête à booster votre visibilité !' },
  { id: 'elio', name: 'Elio', role: 'Assistant Commercial', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500', icon: Linkedin, powers: ['Automatisation LinkedIn', 'Gestion prospects'], description: 'Générez des leads sur LinkedIn.', greeting: 'Hey ! Je suis Elio. Je vais vous aider à générer plus de leads qualifiés.' },
  { id: 'tom', name: 'Tom', role: 'Assistant Téléphonie', color: 'from-orange-500 to-red-500', bgColor: 'bg-gradient-to-br from-orange-500 to-red-500', icon: Phone, powers: ['Transcription audio', 'Appels automatisés'], description: 'Automatisez vos appels et transcriptions.', greeting: 'Bonjour ! Je suis Tom. Envoyez-moi un audio, je le transcris pour vous.' },
  { id: 'charly', name: 'Charly', role: 'Assistante générale', color: 'from-amber-500 to-yellow-500', bgColor: 'bg-gradient-to-br from-amber-500 to-yellow-500', icon: Sparkles, powers: ['Chat général', 'Recherche web', 'Rédaction'], description: 'Votre assistante polyvalente.', greeting: 'Coucou ! Je suis Charly, votre assistante générale. Que puis-je faire pour vous ?' },
  { id: 'manue', name: 'Manue', role: 'Assistante Comptable', color: 'from-emerald-500 to-green-500', bgColor: 'bg-gradient-to-br from-emerald-500 to-green-500', icon: Calculator, powers: ['Facturation', 'Devis', 'Suivi dépenses'], description: 'Gérez votre comptabilité simplement.', greeting: 'Bonjour ! Je suis Manue. Je gère vos factures et devis en un clin d\'œil.' },
  { id: 'julia', name: 'Julia', role: 'Assistante Juridique', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500', icon: Scale, powers: ['Contrats', 'CGV', 'Mentions légales'], description: 'Vos documents juridiques en un clic.', greeting: 'Bonjour ! Je suis Julia. Je rédige vos documents juridiques sur mesure.' }
];

const TikTok = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>;
const Pinterest = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 00-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.37-.74-.37-1.82c0-1.7 1-2.97 2.24-2.97 1.06 0 1.57.8 1.57 1.75 0 1.06-.68 2.65-1.03 4.13-.3 1.24.62 2.26 1.84 2.26 2.2 0 3.9-2.33 3.9-5.7 0-2.97-2.13-5.05-5.18-5.05-3.53 0-5.6 2.65-5.6 5.38 0 1.06.4 2.2.92 2.83.1.12.12.23.08.36l-.34 1.4c-.06.23-.18.28-.42.17-1.56-.73-2.54-3-2.54-4.83 0-3.94 2.86-7.55 8.26-7.55 4.33 0 7.7 3.1 7.7 7.22 0 4.32-2.72 7.8-6.5 7.8-1.27 0-2.46-.66-2.87-1.44l-.78 2.98c-.28 1.1-1.05 2.47-1.56 3.3A12 12 0 1012 0z"/></svg>;
const Snapchat = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.21 1.5c2.72 0 4.5 1.37 5.36 2.73.7 1.1 1.02 2.4 1.02 4.07 0 .47-.03.93-.07 1.4l.02.01c.4.17.72.37.94.7.28.4.34.87.17 1.32-.26.7-.9 1.08-1.48 1.25.05.24.12.47.2.7.45 1.23 1.1 2.1 1.75 2.67.4.35.83.6 1.2.73.23.08.52.14.85.14.15 0 .3-.01.45-.04l.08-.02c.08-.02.16-.02.24-.02.32 0 .57.12.73.24.26.2.4.5.38.84-.03.47-.36.87-.96 1.17-.74.37-1.77.6-3.06.7-.1.13-.18.42-.25.66-.07.26-.15.53-.28.78-.15.3-.4.53-.85.53h-.04c-.2 0-.42-.04-.67-.1a7.6 7.6 0 00-1.48-.2c-.37 0-.72.04-1.05.12-.5.12-.94.37-1.44.66-.73.43-1.56.92-2.85.92h-.12c-1.3 0-2.12-.49-2.86-.92-.5-.3-.94-.54-1.44-.66a4.9 4.9 0 00-1.05-.12c-.53 0-1.03.08-1.48.2-.25.06-.47.1-.67.1h-.04c-.46 0-.7-.24-.85-.53-.13-.25-.2-.52-.28-.78-.07-.24-.15-.53-.25-.66-1.29-.1-2.32-.33-3.06-.7-.6-.3-.93-.7-.96-1.17-.02-.33.12-.64.38-.84.16-.12.4-.24.73-.24.08 0 .16 0 .24.02l.08.02c.15.03.3.04.45.04.33 0 .62-.06.85-.14.37-.13.8-.38 1.2-.73.65-.56 1.3-1.44 1.75-2.67.08-.23.15-.46.2-.7-.58-.17-1.22-.55-1.48-1.25-.17-.45-.1-.92.17-1.32.22-.33.55-.53.94-.7l.02-.01c-.04-.47-.07-.93-.07-1.4 0-1.67.32-2.97 1.02-4.07.86-1.36 2.64-2.73 5.36-2.73h.42z"/></svg>;
const XTwitter = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const Threads = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.015-3.58 1.205-6.334 3.509-8.184C6.96 2.171 9.814 1.5 12.068 1.5h.064c2.467.017 4.623.672 6.395 1.942.56.4.75 1.178.42 1.783-.326.594-1.07.83-1.69.55-.08-.04-.17-.07-.25-.11-1.39-.6-2.99-.96-4.75-.97-1.87 0-3.57.48-4.92 1.39-1.64 1.11-2.57 2.77-2.61 4.7v.13c.03 2.01.94 3.72 2.57 4.88 1.34.96 3.05 1.48 4.96 1.52 1.9-.04 3.45-.52 4.61-1.43.95-.74 1.47-1.72 1.5-2.84.01-.43-.06-.86-.22-1.26-.22-.54-.6-1.03-1.12-1.38-.36.97-.95 1.82-1.72 2.49-.96.83-2.13 1.4-3.46 1.68-.33.07-.67.1-1.01.1-1.03 0-2.03-.28-2.86-.8-.96-.6-1.6-1.5-1.8-2.52-.06-.32-.09-.65-.08-.99.04-1.13.55-2.14 1.43-2.86.77-.62 1.77-1.03 2.97-1.2.42-.06.86-.09 1.31-.09.86 0 1.7.1 2.5.3.53.13 1.04.3 1.52.52.13-1.1-.12-2.13-.72-2.94-.71-.95-1.87-1.52-3.36-1.65-.07 0-.13 0-.2-.01-1.2 0-2.38.27-3.42.78-.53.26-1.17.06-1.49-.44-.32-.5-.18-1.15.3-1.51 1.25-.93 2.86-1.5 4.6-1.5.14 0 .28 0 .42.01 2.27.16 4.07 1.08 5.21 2.64.87 1.18 1.27 2.67 1.18 4.33-.01.1-.01.2-.02.3 1.55 1.01 2.52 2.57 2.72 4.4.06.53.07 1.06.02 1.59-.17 1.76-.98 3.29-2.35 4.44-1.57 1.32-3.67 2.04-6.07 2.08h-.13zm-1.21-9.6c-.74.08-1.36.3-1.8.63-.43.33-.66.74-.68 1.22-.01.13.01.27.05.42.08.34.33.72.77 1 .5.31 1.17.48 1.87.48.21 0 .42-.02.63-.05.86-.18 1.59-.55 2.15-1.08.43-.4.77-.88.99-1.41-.34-.11-.7-.2-1.06-.27-.6-.12-1.23-.17-1.86-.16-.36 0-.72.02-1.06.07z"/></svg>;
const Telegram = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>;
const WhatsApp = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const YouTube = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const Brain = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const Cpu = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>;
const Cloud = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
const Workflow = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const Discord = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>;
const Github = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const Mic2 = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
const GridIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;

const SOCIAL_PLATFORMS = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500', connected: true, account: '@GCLVSai' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-700', connected: true, account: '@GCLVSai' },
  { id: 'tiktok', name: 'TikTok', icon: TikTok, color: 'from-gray-900 to-gray-800', connected: true, account: '@GCLVSai' },
  { id: 'youtube', name: 'YouTube', icon: YouTube, color: 'from-red-600 to-red-700', connected: true, account: '@GCLVSai' },
  { id: 'pinterest', name: 'Pinterest', icon: Pinterest, color: 'from-red-500 to-red-600', connected: true, account: '@GCLVSai' },
  { id: 'snapchat', name: 'Snapchat', icon: Snapchat, color: 'from-yellow-400 to-yellow-500', connected: true, account: '@GCLVSai' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-blue-800', connected: true, account: '@GCLVSai' },
  { id: 'x', name: 'X (Twitter)', icon: XTwitter, color: 'from-gray-900 to-black', connected: true, account: '@GCLVSai' },
  { id: 'threads', name: 'Threads', icon: Threads, color: 'from-gray-800 to-gray-900', connected: true, account: '@GCLVSai' },
  { id: 'telegram', name: 'Telegram', icon: Telegram, color: 'from-blue-400 to-blue-500', connected: true, account: '+33 7 60 23 98 79' },
  { id: 'whatsapp', name: 'WhatsApp', icon: WhatsApp, color: 'from-green-500 to-green-600', connected: true, account: '+33 7 60 23 98 79' },
  { id: 'gmail', name: 'Gmail', icon: Mail, color: 'from-red-500 to-orange-500', connected: true, account: 'gclvssteve@gmail.com' },
  { id: 'email', name: 'Email Pro', icon: Mail, color: 'from-blue-500 to-purple-500', connected: true, account: 'contact@gclvsai.fr' },
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
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <span className="font-bold text-xl">GCLVSai</span>
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
            Bonjour, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Steve</span> 👋
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
  const [sessionId] = useState(() => 'session-' + Date.now());
  const [failedImages, setFailedImages] = useState({});
  const [attachedImage, setAttachedImage] = useState(null);
  const [attachedImagePreview, setAttachedImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Gérer l'upload d'image
  const handleImageUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      setAttachedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachedImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Gérer le drag & drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  // Supprimer l'image attachée
  const removeAttachedImage = () => {
    setAttachedImage(null);
    setAttachedImagePreview(null);
  };

  const send = async () => {
    if (!input.trim() && !attachedImage) return;
    
    const userMessage = input;
    const userImage = attachedImagePreview;
    
    // Ajouter le message utilisateur avec l'image si présente
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userMessage || "Image envoyée",
      imageUrl: userImage,
      id: Date.now()
    }]);
    
    setInput('');
    setAttachedImage(null);
    setAttachedImagePreview(null);
    setLoading(true);
    
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/3e289c98-5a39-4f0d-ab0f-1dcc39f88c90/chat", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          image: userImage, // Base64 de l'image
          hasImage: !!userImage,
          sessionId: sessionId,
          assistantId: assistant.id,
          assistantName: assistant.name,
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const text = await response.text();
      if (!text) {
        throw new Error("Réponse vide");
      }
      
      const result = JSON.parse(text);
      const data = Array.isArray(result) ? result[0] : result;
      
      console.log("RÉPONSE CHATBOT:", data);
      
      const botResponse = data.response || data.message || data.text || data.output || "Je n'ai pas compris, pouvez-vous reformuler ?";
      const imageUrl = data.Url || data.url || data.imageUrl || null;
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: botResponse,
        imageUrl: imageUrl,
        id: Date.now()
      }]);
      
    } catch (error) {
      console.log("ERREUR:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, une erreur s'est produite. Réessayez." }]);
    } finally {
      setLoading(false);
    }
  };

  // Gérer l'échec de chargement d'image
  const handleImageError = (msgId, url) => {
    console.log("IMAGE FAILED:", url);
    setFailedImages(prev => ({ ...prev, [msgId]: true }));
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
              <div className={`max-w-[70%] rounded-2xl overflow-hidden ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border shadow-sm rounded-bl-none'}`}>
                
                {/* Image de l'utilisateur en haut */}
                {msg.role === 'user' && msg.imageUrl && (
                  <img 
                    src={msg.imageUrl} 
                    alt="Image envoyée" 
                    className="w-full max-h-60 object-contain"
                  />
                )}
                
                {/* Texte */}
                {msg.content && <div className="p-4">{msg.content}</div>}
                
                {/* Image de l'assistant */}
                {msg.role === 'assistant' && msg.imageUrl && (
                  <div className="border-t">
                    {!failedImages[msg.id] ? (
                      <img 
                        src={msg.imageUrl} 
                        alt="Image générée" 
                        className="w-full max-h-80 object-contain cursor-pointer hover:opacity-90"
                        onClick={() => window.open(msg.imageUrl, '_blank')}
                        onError={() => handleImageError(msg.id, msg.imageUrl)}
                      />
                    ) : (
                      <div className="p-6 bg-gray-100 flex flex-col items-center justify-center gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                          <Image className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 text-center">L'image ne peut pas être affichée directement</p>
                        <button 
                          onClick={() => window.open(msg.imageUrl, '_blank')}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" /> Ouvrir l'image
                        </button>
                      </div>
                    )}
                    <div className="p-2 flex gap-2 bg-gray-50">
                      <button 
                        onClick={() => window.open(msg.imageUrl, '_blank')}
                        className="flex-1 text-sm text-blue-600 hover:bg-blue-50 py-2 rounded-lg flex items-center justify-center gap-1"
                      >
                        <Eye className="w-4 h-4" /> Voir
                      </button>
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = msg.imageUrl;
                          link.download = 'image.png';
                          link.target = '_blank';
                          link.click();
                        }}
                        className="flex-1 text-sm text-blue-600 hover:bg-blue-50 py-2 rounded-lg flex items-center justify-center gap-1"
                      >
                        <Download className="w-4 h-4" /> Télécharger
                      </button>
                    </div>
                  </div>
                )}
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
          
          {/* Aperçu image attachée */}
          {attachedImagePreview && (
            <div className="mb-3 relative inline-block">
              <img src={attachedImagePreview} alt="Aperçu" className="h-24 rounded-xl border" />
              <button 
                onClick={removeAttachedImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          <div 
            className={`flex gap-2 ${isDragging ? 'ring-2 ring-blue-500 ring-offset-2 rounded-2xl' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className={`flex-1 bg-gray-100 rounded-2xl p-2 transition-colors ${isDragging ? 'bg-blue-50' : ''}`}>
              
              {isDragging ? (
                <div className="flex items-center justify-center py-6 text-blue-600">
                  <Upload className="w-6 h-6 mr-2" />
                  <span>Déposez l'image ici</span>
                </div>
              ) : (
                <>
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
                      <button 
                        className="p-2 hover:bg-gray-200 rounded-lg"
                        onClick={() => document.getElementById('chatImageInput').click()}
                      >
                        <Image className="w-5 h-5 text-gray-500" />
                      </button>
                      <input 
                        type="file" 
                        id="chatImageInput"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                        className="hidden"
                      />
                      <button className="p-2 hover:bg-gray-200 rounded-lg"><Globe className="w-5 h-5 text-gray-500" /></button>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded-lg"><Mic className="w-5 h-5 text-gray-500" /></button>
                  </div>
                </>
              )}
            </div>
            <button onClick={send} disabled={(!input.trim() && !attachedImage) || loading} className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 disabled:opacity-50">
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-2 text-center">
            Glissez-déposez une image ou cliquez sur 🖼️ pour en ajouter une
          </p>
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
  const [manualTitle, setManualTitle] = useState('');
  const [manualContent, setManualContent] = useState('');
  const [manualImage, setManualImage] = useState(null);
  const [manualImagePreview, setManualImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [generatingLegend, setGeneratingLegend] = useState(false);
  const [legendLength, setLegendLength] = useState('court');
  
  // Charger l'image depuis la bibliothèque si présente
  useEffect(() => {
    const savedImage = localStorage.getItem('postImage');
    if (savedImage) {
      const imageData = JSON.parse(savedImage);
      setManualImagePreview(imageData.imageUrl);
      setManualTitle(imageData.title || '');
      setManualContent(imageData.caption || '');
      setMode('manual');
      localStorage.removeItem('postImage');
    }
  }, []);


  const dimensions = [
    { id: 'square', label: 'Carré (1:1)', desc: 'Instagram, Facebook' },
    { id: 'landscape', label: 'Paysage (16:9)', desc: 'LinkedIn, YouTube' },
    { id: 'portrait', label: 'Portrait (4:5)', desc: 'Instagram' },
    { id: 'story', label: 'Story (9:16)', desc: 'Stories' }
  ];

    const generate = async () => {
    if (!description.trim()) return;
    setGenerating(true);
    
    try {
        const response = await fetch("https://n8n.nightcrow.fr/webhook/john/generate-post", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, dimension, textLength }),
        });
        
        if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
        }
        
        const text = await response.text();
        if (!text) {
        throw new Error("Réponse vide du webhook");
        }
        
        const result = JSON.parse(text);
        const data = Array.isArray(result) ? result[0] : result;
        
        // ✅ VOIR L'IMAGE URL
        console.log("IMAGE URL:", data.imageUrl);
        
        const fullCaption = data.caption + '\n\n' + data.hashtags;
        
        setCaption(fullCaption);
        setPost({ 
        caption: fullCaption,
        hashtags: data.hashtags,
        imageUrl: data.imageUrl,
        date: new Date().toLocaleDateString('fr-FR') 
        });
        
        setStep(2);
        
    } catch (error) {
        console.log("ERREUR:", error);
        alert("Erreur: " + error.message);
    } finally {
        setGenerating(false);
    }
    };

 // Gérer l'upload d'image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setManualImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setManualImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Envoyer le post manuel au webhook
  const submitManualPost = async () => {
    if (!manualTitle.trim() || !manualContent.trim()) {
      alert("Veuillez remplir le titre et le contenu");
      return;
    }
    
    setUploading(true);
    
    try {
      // Convertir l'image en base64 si elle existe
      let imageBase64 = null;
      if (manualImage) {
        imageBase64 = manualImagePreview;
      }
      
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Input_image", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: manualTitle,
          content: manualContent,
          image: imageBase64,
          imageName: manualImage?.name || null,
          createdAt: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const result = await response.json();
      console.log("RÉPONSE WEBHOOK:", result);
      
      // Mettre à jour le post et passer à l'étape 2
      setCaption(manualContent);
      setPost({
        caption: manualContent,
        title: manualTitle,
        imageUrl: result.imageUrl || manualImagePreview,
        hashtags: result.hashtags || '',
        date: new Date().toLocaleDateString('fr-FR')
      });
      
      setStep(2);
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setUploading(false);
    }
  };
  // Sauvegarder sur Google Drive
  const saveToGoogleDrive = async () => {
    setSaving(true);
    
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Save_google_drive", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          caption: caption,
          imageUrl: post.imageUrl,
          title: post.title || 'Post GCLVSai',
          hashtags: post.hashtags || '',
          createdAt: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const result = await response.json();
      console.log("SAUVEGARDÉ:", result);
      
      alert("✅ Sauvegardé sur Google Drive !");
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };
  // Générer une légende
  const generateLegend = async () => {
    setGeneratingLegend(true);
    
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Generate_legende", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentCaption: caption,
          imageUrl: post.imageUrl,
          length: legendLength,
          title: post.title || '',
          createdAt: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const result = await response.json();
      const data = Array.isArray(result) ? result[0] : result;
      
      console.log("LÉGENDE GÉNÉRÉE:", data);
      
      // Mettre à jour la légende
      setCaption(data.Captions || '');
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setGeneratingLegend(false);
    }
  };   

    const publish = async () => {
        setGenerating(true);
        await new Promise(r => setTimeout(r, 2000));
        setGenerating(false);
        setStep(4);
     };

    const addToCalendar = async () => {
        setGenerating(true);
        
        try {
        const response = await fetch("https://n8n.nightcrow.fr/webhook/Add_to_calendar", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            caption: caption,
            hashtags: post.hashtags,
            imageUrl: post.imageUrl,
            platforms: platforms,
            scheduleDate: scheduleDate,
            scheduleTime: scheduleTime,
            publishNow: publishNow,
            createdAt: new Date().toISOString()
            }),
        });
        
        if (!response.ok) {
            throw new Error("Erreur serveur: " + response.status);
        }
        
        const result = await response.json();
        console.log("CALENDRIER:", result);
        
        setStep(4);
        
        } catch (error) {
        console.log("ERREUR:", error);
        alert("Erreur: " + error.message);
        } finally {
        setGenerating(false);
        }
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
                <div>
                  <label className="font-semibold block mb-2">Titre du post</label>
                  <input 
                    type="text"
                    value={manualTitle}
                    onChange={(e) => setManualTitle(e.target.value)}
                    placeholder="Mon super post"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <label className="font-semibold block mb-2">Contenu</label>
                  <textarea 
                    value={manualContent}
                    onChange={(e) => setManualContent(e.target.value)}
                    placeholder="Écrivez votre post..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                
                <div>
                  <label className="font-semibold block mb-2">Image</label>
                  <div 
                    className="border-2 border-dashed rounded-xl p-8 text-center hover:border-blue-300 cursor-pointer relative overflow-hidden"
                    onClick={() => document.getElementById('imageInput').click()}
                  >
                    {manualImagePreview ? (
                      <div className="relative">
                        <img src={manualImagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                        <button 
                          onClick={(e) => { e.stopPropagation(); setManualImage(null); setManualImagePreview(null); }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <p className="text-sm text-gray-500 mt-2">{manualImage?.name}</p>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-600">Cliquez pour télécharger une image</p>
                        <p className="text-sm text-gray-400 mt-1">PNG, JPG, GIF jusqu'à 10MB</p>
                      </>
                    )}
                    <input 
                      type="file" 
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={submitManualPost} 
                  disabled={!manualTitle.trim() || !manualContent.trim() || uploading}
                  className="w-full py-4"
                >
                  {uploading ? (
                    <><RefreshCw className="w-5 h-5 animate-spin" /> Envoi en cours...</>
                  ) : (
                    <>Continuer</>
                  )}
                </Button>
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
                <div className="w-72 h-72 rounded-xl overflow-hidden shadow-xl bg-gray-100">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt="Post généré" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center text-white">
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
                  )}
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => { window.open(post.imageUrl, '_blank'); }}><Download className="w-4 h-4" /> Télécharger</Button>
                  <Button variant="outline" size="sm" className="flex-1"><Edit className="w-4 h-4" /> Modifier</Button>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-semibold">Légende</label>
                  <div className="flex items-center gap-2">
                    <select 
                      value={legendLength} 
                      onChange={(e) => setLegendLength(e.target.value)}
                      className="text-sm border rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="court">Court</option>
                      <option value="longue">Longue</option>
                    </select>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={generateLegend}
                      disabled={generatingLegend}
                    >
                      {generatingLegend ? (
                        <><RefreshCw className="w-4 h-4 animate-spin" /> Génération...</>
                      ) : (
                        <><Sparkles className="w-4 h-4" /> Générer</>
                      )}
                    </Button>
                  </div>
                </div>
                <Textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows={8} />
                <p className="text-sm text-gray-400 mt-2">Créé le {post.date}</p>
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="ghost" onClick={() => setStep(1)}><ChevronLeft className="w-4 h-4" /> Retour</Button>
              <div className="flex gap-3">
                <Button variant="outline" onClick={saveToGoogleDrive} disabled={saving}>
                {saving ? <><RefreshCw className="w-4 h-4 animate-spin" /> Sauvegarde...</> : <>Sauvegarder</>}
                </Button>
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
              <Button onClick={addToCalendar} disabled={platforms.length === 0 || (!scheduleDate && !publishNow)}>
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
  const [imagePreview, setImagePreview] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [processed, setProcessed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    
    setImage(file);
    setProcessed(false);
    setResultImage(null);
    setError(null);
    
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  // Drag & drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const process = async () => {
    setProcessing(true);
    setError(null);
    
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Erase_background", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: imagePreview,
          imageName: image?.name || 'image.png',
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const text = await response.text();
      if (!text) {
        throw new Error("Réponse vide");
      }
      
      const result = JSON.parse(text);
      const data = Array.isArray(result) ? result[0] : result;
      
      console.log("RÉSULTAT:", data);
      
      // Récupérer l'URL de l'image sans fond
      const resultUrl = data.imageUrl || data.url || data.Url || data.image || data.result || null;
      
      if (!resultUrl) {
        throw new Error("Aucune image retournée");
      }
      
      setResultImage(resultUrl);
      setProcessed(true);
      
    } catch (err) {
      console.log("ERREUR:", err);
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = () => {
    if (resultImage) {
      const link = document.createElement('a');
      link.href = resultImage;
      link.download = 'image-sans-fond.png';
      link.target = '_blank';
      link.click();
    }
  };

  const reset = () => {
    setImage(null);
    setImagePreview(null);
    setResultImage(null);
    setProcessed(false);
    setError(null);
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
          {!imagePreview ? (
            <div 
              className={`border-2 border-dashed rounded-2xl p-16 text-center transition-colors cursor-pointer ${isDragging ? 'border-purple-500 bg-purple-100' : 'hover:border-purple-400 hover:bg-purple-50'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('bg-upload').click()}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDragging ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <Upload className={`w-10 h-10 ${isDragging ? 'text-purple-600' : 'text-purple-500'}`} />
              </div>
              {isDragging ? (
                <p className="text-xl font-semibold text-purple-600">Déposez l'image ici</p>
              ) : (
                <>
                  <p className="text-xl font-semibold mb-2">Glissez votre image ici</p>
                  <p className="text-gray-500 mb-6">ou cliquez pour sélectionner</p>
                  <Button variant="gradient" className="cursor-pointer"><Upload className="w-4 h-4" /> Choisir une image</Button>
                </>
              )}
              <input 
                type="file" 
                className="hidden" 
                id="bg-upload" 
                accept="image/*" 
                onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])} 
              />
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Image originale</h3>
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                    <img src={imagePreview} alt="Original" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Résultat</h3>
                    {processed && <Badge variant="success">Terminé</Badge>}
                    {error && <Badge variant="danger">Erreur</Badge>}
                  </div>
                  <div className="aspect-square bg-[repeating-conic-gradient(#e5e7eb_0%_25%,#f3f4f6_0%_50%)] bg-[size:20px_20px] rounded-2xl flex items-center justify-center overflow-hidden">
                    {processing ? (
                      <div className="text-center">
                        <RefreshCw className="w-8 h-8 animate-spin text-purple-500 mx-auto mb-2" />
                        <p className="text-gray-500">Traitement en cours...</p>
                      </div>
                    ) : error ? (
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <X className="w-8 h-8 text-red-500" />
                        </div>
                        <p className="text-red-500 text-sm">{error}</p>
                      </div>
                    ) : processed && resultImage ? (
                      <img src={resultImage} alt="Processed" className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-center text-gray-400">
                        <Wand2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Cliquez sur "Supprimer le fond"</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={reset}>
                  <RefreshCw className="w-4 h-4" /> Nouvelle image
                </Button>
                {!processed ? (
                  <Button variant="gradient" onClick={process} disabled={processing}>
                    {processing ? (
                      <><RefreshCw className="w-4 h-4 animate-spin" /> Traitement...</>
                    ) : (
                      <><Wand2 className="w-4 h-4" /> Supprimer le fond</>
                    )}
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" onClick={process}>
                      <RefreshCw className="w-4 h-4" /> Réessayer
                    </Button>
                    <Button variant="success" onClick={downloadImage}>
                      <Download className="w-4 h-4" /> Télécharger PNG
                    </Button>
                  </>
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
  const [date, setDate] = useState(new Date());
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Champs éditables
  const [editTitle, setEditTitle] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editTime, setEditTime] = useState('');
  
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  // Charger les posts depuis Google Calendar
  const loadCalendar = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Get_calendar", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          month: date.getMonth() + 1,
          year: date.getFullYear()
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const text = await response.text();
      if (!text) {
        setPosts([]);
        return;
      }
      
      const result = JSON.parse(text);
      const data = Array.isArray(result) ? result : [result];
      
      console.log("RAW DATA:", data);
      
      // Les données sont déjà formatées par n8n, on les utilise directement
      const formattedPosts = data.map(event => {
        // Extraire l'image URL de la caption si pas dans imageUrl
        let imageUrl = event.imageUrl || null;
        
        if (!imageUrl && event.caption) {
          // Chercher URL imgBB ou Google Drive
          const imgbbMatch = event.caption.match(/https:\/\/i\.ibb\.co\/[^\s]+/i);
          const googleMatch = event.caption.match(/https:\/\/lh3\.googleusercontent\.com\/d\/[^\s]+/i);
          const driveMatch = event.caption.match(/https:\/\/drive\.google\.com\/[^\s]+/i);
          
          imageUrl = imgbbMatch?.[0] || googleMatch?.[0] || driveMatch?.[0] || null;
        }
        
        return {
          id: event.id,
          day: event.day,
          month: event.month,
          year: event.year,
          title: event.title || 'Sans titre',
          status: event.status || 'scheduled',
          caption: event.caption || '',
          description: event.caption || '',
          imageUrl: imageUrl,
          time: event.time || '00:00'
        };
      });
      
      console.log("FORMATTED:", formattedPosts);
      setPosts(formattedPosts);
      
    } catch (error) {
      console.log("ERREUR:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // Ouvrir le mode édition
  const openEdit = () => {
    setEditTitle(selectedPost.title);
    setEditCaption(selectedPost.description);
    setEditDate(`${selectedPost.year}-${String(selectedPost.month + 1).padStart(2, '0')}-${String(selectedPost.day).padStart(2, '0')}`);
    setEditTime(selectedPost.time);
    setEditMode(true);
  };

  // Enregistrer les modifications
  const saveChanges = async () => {
    setSaving(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Update_calendar", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: selectedPost.id,
          title: editTitle,
          description: editCaption,
          date: editDate,
          time: editTime,
          imageUrl: selectedPost.imageUrl
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      console.log("MODIFICATION ENREGISTRÉE");
      
      setSelectedPost(null);
      setEditMode(false);
      loadCalendar();
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Supprimer l'événement
  const deleteEvent = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce post ?")) return;
    
    setSaving(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Delete_calendar", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: selectedPost.id
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      console.log("ÉVÉNEMENT SUPPRIMÉ");
      
      setSelectedPost(null);
      setEditMode(false);
      loadCalendar();
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Charger au démarrage et quand le mois change
  useEffect(() => {
    loadCalendar();
  }, [date]);

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
          <div className="flex gap-2">
            <Button variant="outline" onClick={loadCalendar}><RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Actualiser</Button>
            <Button onClick={() => setPage('power-john-0')}><Plus className="w-4 h-4" /> Nouveau post</Button>
          </div>
        </div>

        <Card className="mb-6">
          <div className="flex items-center justify-between p-4 border-b">
            <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeft className="w-5 h-5" /></button>
            <h2 className="text-xl font-semibold">{months[date.getMonth()]} {date.getFullYear()}</h2>
            <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-5 h-5" /></button>
          </div>
          {loading ? (
            <div className="p-12 text-center text-gray-500">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
              <p>Chargement du calendrier...</p>
            </div>
          ) : (
            <div className="grid grid-cols-7">
              {days.map(d => <div key={d} className="p-3 text-center font-medium text-gray-500 border-b bg-gray-50">{d}</div>)}
              {getDays().map((day, i) => {
                const dayPosts = posts.filter(p => p.day === day.d.getDate() && p.month === day.d.getMonth() && p.year === day.d.getFullYear() && day.current);
                return (
                  <div key={i} className={`min-h-24 p-2 border-b border-r relative ${day.current ? 'bg-white' : 'bg-gray-50'}`}>
                    <p className={`text-sm ${day.current ? 'text-gray-900' : 'text-gray-400'}`}>{day.d.getDate()}</p>
                    {dayPosts.map((p, j) => (
                      <div 
                        key={j} 
                        className={`group mt-1 p-1 rounded text-xs text-white truncate cursor-pointer hover:opacity-80 relative ${p.status === 'published' ? 'bg-green-500' : p.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => setSelectedPost(p)}
                      >
                        📅 {p.title}
                        
                        {/* TOOLTIP AU SURVOL */}
                        <div className="hidden group-hover:block absolute z-50 left-full ml-2 top-0 bg-white text-gray-800 rounded-xl shadow-2xl border p-3 w-64">
                          {p.imageUrl && (
                            <img src={p.imageUrl} alt="Preview" className="w-full h-32 object-cover rounded-lg mb-2" />
                          )}
                          <p className="font-semibold text-sm truncate">{p.title}</p>
                          <p className="text-xs text-gray-500 mt-1">🕐 {p.time}</p>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{p.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </Card>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded" /> Publié</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded" /> Planifié</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-400 rounded" /> Brouillon</div>
        </div>
      </div>

      {/* POPUP AU CLIC */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => { setSelectedPost(null); setEditMode(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            {selectedPost.imageUrl && (
              <img src={selectedPost.imageUrl} alt="Post" className="w-full h-64 object-cover" />
            )}
            
            {/* Contenu */}
            <div className="p-6">
              {!editMode ? (
                <>
                  {/* MODE LECTURE */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{selectedPost.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs text-white ${selectedPost.status === 'published' ? 'bg-green-500' : selectedPost.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                      {selectedPost.status === 'published' ? 'Publié' : selectedPost.status === 'scheduled' ? 'Planifié' : 'Brouillon'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>📅 {selectedPost.day}/{selectedPost.month + 1}/{selectedPost.year}</span>
                    <span>🕐 {selectedPost.time}</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedPost.description}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={() => window.open(selectedPost.imageUrl, '_blank')}>
                      <Download className="w-4 h-4" /> Télécharger
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={openEdit}>
                      <Edit className="w-4 h-4" /> Modifier
                    </Button>
                    <Button variant="outline" className="flex-1 text-red-500 hover:bg-red-50" onClick={deleteEvent}>
                      <Trash2 className="w-4 h-4" /> Supprimer
                    </Button>
                  </div>
                  <Button className="w-full mt-3" onClick={() => setSelectedPost(null)}>
                    <X className="w-4 h-4" /> Fermer
                  </Button>
                </>
              ) : (
                <>
                  {/* MODE ÉDITION */}
                  <h3 className="text-xl font-bold mb-4">✏️ Modifier le post</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Titre</label>
                      <input 
                        type="text" 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Description / Caption</label>
                      <textarea 
                        value={editCaption} 
                        onChange={(e) => setEditCaption(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input 
                          type="date" 
                          value={editDate} 
                          onChange={(e) => setEditDate(e.target.value)}
                          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Heure</label>
                        <input 
                          type="time" 
                          value={editTime} 
                          onChange={(e) => setEditTime(e.target.value)}
                          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="flex-1" onClick={() => setEditMode(false)}>
                      <X className="w-4 h-4" /> Annuler
                    </Button>
                    <Button className="flex-1" onClick={saveChanges} disabled={saving}>
                      {saving ? (
                        <><RefreshCw className="w-4 h-4 animate-spin" /> Enregistrement...</>
                      ) : (
                        <><Check className="w-4 h-4" /> Enregistrer</>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ============ ALL CONTENTS ============
const AllContents = ({ assistant, setPage }) => {
  const [filter, setFilter] = useState('all');
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [pathHistory, setPathHistory] = useState(['/']);
  const [selectedContent, setSelectedContent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectMode, setSelectMode] = useState(false);
  
  // Champs éditables
  const [editTitle, setEditTitle] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [editStatus, setEditStatus] = useState('draft');

  // Charger les contenus depuis Google Drive
  const loadContents = async (path = '/') => {
    setLoading(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Get_my_library", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: path
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const text = await response.text();
      if (!text) {
        setContents([]);
        return;
      }
      
      const result = JSON.parse(text);
      const data = Array.isArray(result) ? result : [result];
      
      console.log("LIBRARY DATA:", data);
      setContents(data);
      
    } catch (error) {
      console.log("ERREUR:", error);
      setContents([]);
    } finally {
      setLoading(false);
    }
  };

  // Charger au démarrage
  useEffect(() => {
    loadContents(currentPath);
  }, []);

  // Naviguer dans un dossier
  const openFolder = (folderPath, folderName) => {
    const newPath = currentPath === '/' ? '/' + folderName : currentPath + '/' + folderName;
    setPathHistory([...pathHistory, newPath]);
    setCurrentPath(newPath);
    loadContents(newPath);
  };

  // Retour au dossier parent
  const goBack = () => {
    if (pathHistory.length > 1) {
      const newHistory = [...pathHistory];
      newHistory.pop();
      const previousPath = newHistory[newHistory.length - 1];
      setPathHistory(newHistory);
      setCurrentPath(previousPath);
      loadContents(previousPath);
    }
  };

  // Ouvrir le mode édition
  const openEdit = () => {
    setEditTitle(selectedContent.title || selectedContent.name || '');
    setEditCaption(selectedContent.caption || selectedContent.description || '');
    setEditStatus(selectedContent.status || 'draft');
    setEditMode(true);
  };

  // Sauvegarder les modifications
  const saveChanges = async () => {
    setSaving(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Update_library", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedContent.id,
          title: editTitle,
          caption: editCaption,
          status: editStatus,
          path: currentPath
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      console.log("MODIFICATION ENREGISTRÉE");
      
      setSelectedContent(null);
      setEditMode(false);
      loadContents(currentPath);
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Supprimer un contenu
  const deleteContent = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce contenu ?")) return;
    
    setSaving(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Delete_library", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedContent.id,
          path: currentPath
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      console.log("CONTENU SUPPRIMÉ");
      
      setSelectedContent(null);
      setEditMode(false);
      loadContents(currentPath);
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };
  // Toggle sélection d'un élément
  const toggleSelect = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Tout sélectionner / Tout désélectionner
  const toggleSelectAll = () => {
    const files = contents.filter(c => c.type !== 'folder');
    if (selectedItems.length === files.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(files);
    }
  };

  // Supprimer les éléments sélectionnés
  const deleteSelected = async () => {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer ${selectedItems.length} élément(s) ?`)) return;
    
    setSaving(true);
    try {
      for (const item of selectedItems) {
        await fetch("https://n8n.nightcrow.fr/webhook/Delete_library", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: item.id,
            path: currentPath
          }),
        });
      }
      
      console.log("ÉLÉMENTS SUPPRIMÉS:", selectedItems.length);
      
      setSelectedItems([]);
      setSelectMode(false);
      loadContents(currentPath);
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Annuler la sélection
  const cancelSelection = () => {
    setSelectedItems([]);
    setSelectMode(false);
  };

  // Filtrer les contenus
  const filtered = contents.filter(c => {
    if (c.type === 'folder') return true;
    return filter === 'all' || c.status === filter;
  });

  // Compter par statut
  const countByStatus = (status) => {
    if (status === 'all') return contents.filter(c => c.type !== 'folder').length;
    return contents.filter(c => c.status === status).length;
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Tous mes contenus</h1>
            <p className="text-gray-600">Gérez tous vos posts créés</p>
          </div>
          <div className="flex gap-2">
            {selectMode ? (
              <>
                <Button variant="outline" onClick={toggleSelectAll}>
                  <Check className="w-4 h-4" /> {selectedItems.length === contents.filter(c => c.type !== 'folder').length ? 'Tout désélectionner' : 'Tout sélectionner'}
                </Button>
                <Button variant="outline" onClick={cancelSelection}>
                  <X className="w-4 h-4" /> Annuler
                </Button>
                <Button 
                  variant="outline" 
                  className="text-red-500 hover:bg-red-50" 
                  onClick={deleteSelected}
                  disabled={selectedItems.length === 0 || saving}
                >
                  {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />} 
                  Supprimer ({selectedItems.length})
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setSelectMode(true)}>
                  <Check className="w-4 h-4" /> Sélectionner
                </Button>
                <Button variant="outline" onClick={() => loadContents(currentPath)}>
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Actualiser
                </Button>
                <Button onClick={() => setPage('power-john-0')}><Plus className="w-4 h-4" /> Nouveau post</Button>
              </>
            )}
          </div>
        </div>

        {/* Chemin actuel / Breadcrumb */}
        <Card className="p-3 mb-4">
          <div className="flex items-center gap-2">
            {currentPath !== '/' && (
              <button onClick={goBack} className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <Folder className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">{currentPath === '/' ? 'Racine' : currentPath}</span>
          </div>
        </Card>

        {/* Filtres */}
        <Card className="p-4 mb-6">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'Tous', color: null }, 
              { id: 'published', label: 'Publiés', color: 'bg-green-500' }, 
              { id: 'scheduled', label: 'Planifiés', color: 'bg-blue-500' }, 
              { id: 'draft', label: 'Brouillons', color: 'bg-gray-400' }
            ].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${filter === f.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                {f.color && <div className={`w-2 h-2 rounded-full ${f.color}`} />}
                {f.label} ({countByStatus(f.id)})
              </button>
            ))}
          </div>
        </Card>

        {/* Contenu */}
        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">Chargement de la bibliothèque...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <Folder className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Aucun contenu trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map((c, index) => (
              <Card 
                key={c.id || index} 
                className={`overflow-hidden group cursor-pointer relative ${selectedItems.find(i => i.id === c.id) ? 'ring-2 ring-blue-500' : ''}`} 
                hover
                onClick={() => {
                  if (c.type === 'folder') {
                    openFolder(c.path, c.name);
                  } else if (selectMode) {
                    toggleSelect(c);
                  } else {
                    setSelectedContent(c);
                  }
                }}
              >
                {/* Checkbox de sélection */}
                {selectMode && c.type !== 'folder' && (
                  <div 
                    className={`absolute top-2 left-2 z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedItems.find(i => i.id === c.id) ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`}
                    onClick={(e) => { e.stopPropagation(); toggleSelect(c); }}
                  >
                    {selectedItems.find(i => i.id === c.id) && <Check className="w-4 h-4 text-white" />}
                  </div>
                )}
                {/* Affichage pour les dossiers */}
                {c.type === 'folder' ? (
                  <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100">
                    <Folder className="w-16 h-16 text-yellow-500 mb-3" />
                    <p className="font-medium text-center">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.itemCount || 0} éléments</p>
                  </div>
                ) : (
                  /* Affichage pour les fichiers/posts */
                  <>
                    <div className="h-48 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center text-6xl relative overflow-hidden">
                      {c.imageUrl || c.thumbnailUrl ? (
                        <img src={c.imageUrl || c.thumbnailUrl} alt={c.title || c.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{c.emoji || '📄'}</span>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-white rounded-full hover:bg-gray-100 text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      {/* Badge de statut sur l'image */}
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white ${c.status === 'published' ? 'bg-green-500' : c.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                        {c.status === 'published' ? '✓ Publié' : c.status === 'scheduled' ? '📅 Planifié' : '📝 Brouillon'}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium truncate">{c.title || c.name}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          {c.platform === 'instagram' && <Instagram className="w-4 h-4" />}
                          {c.platform || 'Fichier'}
                        </span>
                        <span>{c.date || c.createdAt || ''}</span>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* POPUP APERÇU / MODIFICATION */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => { setSelectedContent(null); setEditMode(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            {(selectedContent.imageUrl || selectedContent.thumbnailUrl) && (
              <img src={selectedContent.imageUrl || selectedContent.thumbnailUrl} alt="Contenu" className="w-full h-72 object-cover" />
            )}
            
            {/* Contenu */}
            <div className="p-6">
              {!editMode ? (
                <>
                  {/* MODE LECTURE */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{selectedContent.title || selectedContent.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs text-white ${selectedContent.status === 'published' ? 'bg-green-500' : selectedContent.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                      {selectedContent.status === 'published' ? 'Publié' : selectedContent.status === 'scheduled' ? 'Planifié' : 'Brouillon'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>📅 {selectedContent.date || selectedContent.createdAt || 'Non daté'}</span>
                    {selectedContent.platform && (
                      <span className="flex items-center gap-1">
                        <Instagram className="w-4 h-4" /> {selectedContent.platform}
                      </span>
                    )}
                  </div>
                  
                  {(selectedContent.caption || selectedContent.description) && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <label className="font-semibold text-sm block mb-2">Légende</label>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedContent.caption || selectedContent.description}</p>
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={() => window.open(selectedContent.imageUrl || selectedContent.url, '_blank')}>
                      <Download className="w-4 h-4" /> Télécharger
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={openEdit}>
                      <Edit className="w-4 h-4" /> Modifier
                    </Button>
                    <Button variant="outline" className="flex-1 text-red-500 hover:bg-red-50" onClick={deleteContent}>
                      <Trash2 className="w-4 h-4" /> Supprimer
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600" 
                    onClick={() => {
                      localStorage.setItem('postImage', JSON.stringify({
                        imageUrl: selectedContent.imageUrl || selectedContent.thumbnailUrl,
                        title: selectedContent.title || selectedContent.name,
                        caption: selectedContent.caption || ''
                      }));
                      setSelectedContent(null);
                      setPage('power-john-0');
                    }}
                  >
                    <Send className="w-4 h-4" /> Créer un post avec cette image
                  </Button>
                  
                  <Button className="w-full mt-2" variant="outline" onClick={() => setSelectedContent(null)}>
                    <X className="w-4 h-4" /> Fermer
                  </Button>
                </>
              ) : (
                <>
                  {/* MODE ÉDITION */}
                  <h3 className="text-xl font-bold mb-4">✏️ Modifier le contenu</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Titre</label>
                      <input 
                        type="text" 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Légende / Description</label>
                      <textarea 
                        value={editCaption} 
                        onChange={(e) => setEditCaption(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Statut</label>
                      <select 
                        value={editStatus} 
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option value="draft">📝 Brouillon</option>
                        <option value="scheduled">📅 Planifié</option>
                        <option value="published">✓ Publié</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="flex-1" onClick={() => setEditMode(false)}>
                      <X className="w-4 h-4" /> Annuler
                    </Button>
                    <Button className="flex-1" onClick={saveChanges} disabled={saving}>
                      {saving ? (
                        <><RefreshCw className="w-4 h-4 animate-spin" /> Enregistrement...</>
                      ) : (
                        <><Check className="w-4 h-4" /> Enregistrer</>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
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
    setPlatforms(prev => prev.map(p => p.id === id ? { ...p, connected: true, account: '@GCLVSai' } : p));
    setConnecting(null);
  };

  const disconnect = (id) => {
    setPlatforms(prev => prev.map(p => p.id === id ? { ...p, connected: false, account: '' } : p));
  };

  const connectedCount = platforms.filter(p => p.connected).length;

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Connectez vos réseaux sociaux</h1>
              <p className="text-gray-600">Publiez automatiquement sur toutes vos plateformes</p>
            </div>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              ✓ {connectedCount}/{platforms.length} connectés
            </div>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            Réseaux Sociaux
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {platforms.filter(p => !['gmail', 'email', 'telegram', 'whatsapp'].includes(p.id)).map(p => (
              <Card key={p.id} className={`p-6 ${p.connected ? 'ring-2 ring-green-200' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center shadow-lg`}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  {p.connected && <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" /> Connecté</Badge>}
                </div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">Publiez automatiquement sur {p.name}</p>
                {p.connected && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600">Compte: <strong className="text-gray-900">{p.account}</strong></p>
                  </div>
                )}
                {p.connected ? (
                  <Button variant="outline" onClick={() => disconnect(p.id)} className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    <Unlink className="w-4 h-4" /> Déconnecter
                  </Button>
                ) : (
                  <Button onClick={() => connect(p.id)} className="w-full" disabled={connecting === p.id}>
                    {connecting === p.id ? <><RefreshCw className="w-4 h-4 animate-spin" /> Connexion...</> : <><Link className="w-4 h-4" /> Connecter</>}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Section Messageries */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-500" />
            Messageries
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {platforms.filter(p => ['telegram', 'whatsapp'].includes(p.id)).map(p => (
              <Card key={p.id} className={`p-6 ${p.connected ? 'ring-2 ring-green-200' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center shadow-lg`}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  {p.connected && <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" /> Connecté</Badge>}
                </div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">Recevez et envoyez des messages via {p.name}</p>
                {p.connected && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600">Numéro: <strong className="text-gray-900">{p.account}</strong></p>
                  </div>
                )}
                {p.connected ? (
                  <Button variant="outline" onClick={() => disconnect(p.id)} className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    <Unlink className="w-4 h-4" /> Déconnecter
                  </Button>
                ) : (
                  <Button onClick={() => connect(p.id)} className="w-full" disabled={connecting === p.id}>
                    {connecting === p.id ? <><RefreshCw className="w-4 h-4 animate-spin" /> Connexion...</> : <><Link className="w-4 h-4" /> Connecter</>}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Section Emails */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-red-500" />
            Emails
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {platforms.filter(p => ['gmail', 'email'].includes(p.id)).map(p => (
              <Card key={p.id} className={`p-6 ${p.connected ? 'ring-2 ring-green-200' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center shadow-lg`}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  {p.connected && <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" /> Connecté</Badge>}
                </div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">Envoyez des emails via {p.name}</p>
                {p.connected && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600">Email: <strong className="text-gray-900">{p.account}</strong></p>
                  </div>
                )}
                {p.connected ? (
                  <Button variant="outline" onClick={() => disconnect(p.id)} className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    <Unlink className="w-4 h-4" /> Déconnecter
                  </Button>
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
    </div>
  );
};

// ============ MUSIC CREATOR (Mickael) ============
const MusicCreator = ({ assistant, setPage }) => {
  const [view, setView] = useState('create');
  const [step, setStep] = useState(1);
  const [generating, setGenerating] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Navigation dans les dossiers
  const [currentPath, setCurrentPath] = useState('/');
  const [pathHistory, setPathHistory] = useState(['/']);
  const [currentFolderName, setCurrentFolderName] = useState('Mes Projets');
  
  // Lecteur audio persistant
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  
  const [project, setProject] = useState({
    projectName: '',
    projectType: '',
    description: '',
    musicGenre: '',
    musicMood: '',
    tempo: 'medium',
    duration: '60',
    vocalType: '',
    language: 'Français',
    lyricsStyle: '',
    hasVisual: false,
    visualStyle: '',
    animationType: '',
    targetAge: '',
    targetAudience: '',
    instruments: [],
    keySignature: '',
    reference: '',
    additionalNotes: ''
  });

  // ... garde tous les arrays (projectTypes, musicGenres, etc.) ...

  const projectTypes = [
    { id: 'music', label: '🎵 Musique seule', desc: 'Instrumental ou avec voix' },
    { id: 'clip', label: '🎬 Clip musical', desc: 'Musique + vidéo/animation' },
    { id: 'comptine', label: '👶 Comptine enfant', desc: 'Chanson pour enfants' },
    { id: 'comptine-video', label: '📺 Comptine animée', desc: 'Comptine + storyboard animé' },
    { id: 'rap', label: '🎤 Clip Rap/Hip-Hop', desc: 'Musique urbaine + visuel' },
    { id: 'jingle', label: '📢 Jingle/Pub', desc: 'Court format publicitaire' },
    { id: 'podcast-intro', label: '🎙️ Intro Podcast', desc: 'Musique d\'introduction' },
    { id: 'ambient', label: '🌙 Musique d\'ambiance', desc: 'Background/relaxation' }
  ];

  const musicGenres = [
    { id: 'pop', label: 'Pop' },
    { id: 'rock', label: 'Rock' },
    { id: 'hiphop', label: 'Hip-Hop/Rap' },
    { id: 'rnb', label: 'R&B' },
    { id: 'electronic', label: 'Électronique/EDM' },
    { id: 'jazz', label: 'Jazz' },
    { id: 'classical', label: 'Classique' },
    { id: 'folk', label: 'Folk/Acoustique' },
    { id: 'reggae', label: 'Reggae' },
    { id: 'latin', label: 'Latin/Salsa' },
    { id: 'afro', label: 'Afrobeat' },
    { id: 'country', label: 'Country' },
    { id: 'metal', label: 'Metal' },
    { id: 'indie', label: 'Indie' },
    { id: 'lofi', label: 'Lo-Fi' },
    { id: 'children', label: 'Musique enfantine' },
    { id: 'cinematic', label: 'Cinématique/Épique' },
    { id: 'ambient', label: 'Ambient/Chill' }
  ];

  const musicMoods = [
    { id: 'happy', label: '😊 Joyeux', color: 'from-yellow-400 to-orange-400' },
    { id: 'energetic', label: '⚡ Énergique', color: 'from-red-400 to-pink-400' },
    { id: 'calm', label: '😌 Calme', color: 'from-blue-300 to-cyan-300' },
    { id: 'romantic', label: '💕 Romantique', color: 'from-pink-400 to-rose-400' },
    { id: 'sad', label: '😢 Mélancolique', color: 'from-gray-400 to-blue-400' },
    { id: 'epic', label: '🦁 Épique', color: 'from-purple-500 to-indigo-500' },
    { id: 'mysterious', label: '🔮 Mystérieux', color: 'from-violet-500 to-purple-600' },
    { id: 'funny', label: '😂 Drôle', color: 'from-green-400 to-lime-400' },
    { id: 'inspiring', label: '✨ Inspirant', color: 'from-amber-400 to-yellow-400' },
    { id: 'dark', label: '🖤 Sombre', color: 'from-gray-700 to-gray-900' },
    { id: 'dreamy', label: '💭 Rêveur', color: 'from-indigo-300 to-purple-300' },
    { id: 'nostalgic', label: '📷 Nostalgique', color: 'from-amber-300 to-orange-300' }
  ];

  const vocalTypes = [
    { id: 'none', label: 'Instrumental (sans voix)' },
    { id: 'male', label: 'Voix masculine' },
    { id: 'female', label: 'Voix féminine' },
    { id: 'child', label: 'Voix enfantine' },
    { id: 'choir', label: 'Chœur/Chorale' },
    { id: 'rap-male', label: 'Rap - Voix masculine' },
    { id: 'rap-female', label: 'Rap - Voix féminine' },
    { id: 'duet', label: 'Duo (homme/femme)' },
    { id: 'robotic', label: 'Voix robotique/Auto-tune' }
  ];

  const visualStyles = [
    { id: 'aquarelle', label: '🎨 Aquarelle douce' },
    { id: 'cartoon', label: '🖼️ Cartoon coloré' },
    { id: 'anime', label: '🇯🇵 Style Anime' },
    { id: '3d', label: '🎮 Animation 3D' },
    { id: 'realistic', label: '📸 Réaliste/Photo' },
    { id: 'collage', label: '✂️ Papier découpé/Collage' },
    { id: 'retro', label: '📺 Rétro/Vintage' },
    { id: 'minimalist', label: '⬜ Minimaliste' },
    { id: 'psychedelic', label: '🌈 Psychédélique' },
    { id: 'urban', label: '🏙️ Urbain/Street art' },
    { id: 'neon', label: '💜 Néon/Cyberpunk' },
    { id: 'nature', label: '🌿 Nature/Organique' }
  ];

  const animationTypes = [
    { id: 'static', label: 'Images statiques (slideshow)' },
    { id: 'motion', label: 'Motion design' },
    { id: '2d-animation', label: 'Animation 2D' },
    { id: '3d-animation', label: 'Animation 3D' },
    { id: 'mixed', label: 'Mixte (réel + animation)' },
    { id: 'lyric-video', label: 'Lyric video (paroles animées)' },
    { id: 'storyboard', label: 'Storyboard animé (10 scènes)' }
  ];

  const targetAges = [
    { id: '0-3', label: '👶 0-3 ans' },
    { id: '3-6', label: '🧒 3-6 ans' },
    { id: '6-12', label: '👦 6-12 ans' },
    { id: '12-18', label: '🧑 12-18 ans' },
    { id: '18-25', label: '👨 18-25 ans' },
    { id: '25-40', label: '👩 25-40 ans' },
    { id: '40+', label: '👴 40+ ans' },
    { id: 'all', label: '👨‍👩‍👧‍👦 Tout public' }
  ];

  const instrumentsList = [
    'Piano', 'Guitare acoustique', 'Guitare électrique', 'Basse', 
    'Batterie', 'Violon', 'Violoncelle', 'Flûte', 'Saxophone',
    'Trompette', 'Synthétiseur', 'Ukulélé', 'Harpe', 'Xylophone',
    'Percussion africaine', 'Beatbox', '808 Bass', 'Orgue'
  ];

  const lyricsStyles = [
    { id: 'rhyming', label: 'Rimes classiques' },
    { id: 'storytelling', label: 'Narratif/Histoire' },
    { id: 'poetic', label: 'Poétique/Métaphorique' },
    { id: 'simple', label: 'Simple et répétitif' },
    { id: 'educational', label: 'Éducatif' },
    { id: 'freestyle', label: 'Freestyle/Improvisation' },
    { id: 'conscious', label: 'Engagé/Conscient' },
    { id: 'party', label: 'Festif/Party' }
  ];

  const languages = ['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'العربية', '日本語', '中文'];

  const tempos = [
    { id: 'very-slow', label: 'Très lent (60-80 BPM)', bpm: '60-80' },
    { id: 'slow', label: 'Lent (80-100 BPM)', bpm: '80-100' },
    { id: 'medium', label: 'Modéré (100-120 BPM)', bpm: '100-120' },
    { id: 'fast', label: 'Rapide (120-140 BPM)', bpm: '120-140' },
    { id: 'very-fast', label: 'Très rapide (140+ BPM)', bpm: '140+' }
  ];

  const durations = [
    { id: '15', label: '15 sec (Jingle)' },
    { id: '30', label: '30 sec (Intro)' },
    { id: '60', label: '1 min (Court)' },
    { id: '120', label: '2 min (Standard)' },
    { id: '180', label: '3 min (Chanson)' },
    { id: '240', label: '4 min (Long)' },
    { id: '300', label: '5 min+ (Épique)' }
  ];

  const updateProject = (field, value) => {
    setProject(prev => ({ ...prev, [field]: value }));
  };

  const toggleInstrument = (instrument) => {
    setProject(prev => ({
      ...prev,
      instruments: prev.instruments.includes(instrument)
        ? prev.instruments.filter(i => i !== instrument)
        : [...prev.instruments, instrument]
    }));
  };

  const needsVisual = ['clip', 'comptine-video', 'rap'].includes(project.projectType);

  // Charger les projets depuis Google Drive
  const loadProjects = async (path = '/') => {
    setLoadingProjects(true);
    try {
      const response = await fetch("https://n8n.nightcrow.fr/webhook/Get_music_projects", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: path }),
      });
      
      if (!response.ok) {
        throw new Error("Erreur serveur: " + response.status);
      }
      
      const text = await response.text();
      if (!text) {
        setProjects([]);
        return;
      }
      
      const result = JSON.parse(text);
      const data = Array.isArray(result) ? result : [result];
      
      console.log("PROJECTS:", data);
      setProjects(data);
      
    } catch (error) {
      console.log("ERREUR:", error);
      setProjects([]);
    } finally {
      setLoadingProjects(false);
    }
  };

  // Naviguer dans un dossier
  const openFolder = (folder) => {
    const newPath = currentPath === '/' ? '/' + folder.name : currentPath + '/' + folder.name;
    setPathHistory([...pathHistory, newPath]);
    setCurrentPath(newPath);
    setCurrentFolderName(folder.name);
    loadProjects(folder.id); // Utiliser l'ID du dossier pour Google Drive
  };

  // Retour au dossier parent
  const goBack = () => {
    if (pathHistory.length > 1) {
      const newHistory = [...pathHistory];
      newHistory.pop();
      const previousPath = newHistory[newHistory.length - 1];
      setPathHistory(newHistory);
      setCurrentPath(previousPath);
      setCurrentFolderName(previousPath === '/' ? 'Mes Projets' : previousPath.split('/').pop());
      
      // Recharger le dossier parent
      if (previousPath === '/') {
        loadProjects('/');
      } else {
        // Trouver l'ID du dossier parent
        loadProjects(previousPath);
      }
    }
  };

  // Retour à la racine
  const goToRoot = () => {
    setPathHistory(['/']);
    setCurrentPath('/');
    setCurrentFolderName('Mes Projets');
    loadProjects('/');
  };

  // Charger les projets quand on switch sur la vue projets
  useEffect(() => {
    if (view === 'projects') {
      loadProjects(currentPath === '/' ? '/' : currentPath);
    }
  }, [view]);

// Convertir URL Google Drive en URL streamable via proxy n8n
  const getStreamableUrl = (file) => {
    // Extraire l'ID du fichier
    let fileId = file.id;
    
    if (!fileId) {
      const url = file.url || file.webViewLink || '';
      const driveMatch = url.match(/\/file\/d\/([^\/]+)/);
      if (driveMatch) {
        fileId = driveMatch[1];
      }
    }
    
    if (fileId) {
      // Utiliser le proxy n8n
      return `https://n8n.nightcrow.fr/webhook/Stream_audio?id=${fileId}`;
    }
    
    return file.url || file.webViewLink;
  };

  // Jouer un audio
  const playAudio = (file) => {
    const streamUrl = getStreamableUrl(file);
    
    if (currentAudio && currentAudio.id === file.id) {
      // Toggle play/pause
      if (isPlaying) {
        audioRef?.pause();
        setIsPlaying(false);
      } else {
        audioRef?.play().catch(err => {
          console.log("Erreur lecture:", err);
          // Si erreur, ouvrir dans un nouvel onglet
          window.open(streamUrl, '_blank');
        });
        setIsPlaying(true);
      }
    } else {
      // Nouveau fichier
      if (audioRef) {
        audioRef.pause();
      }
      setCurrentAudio({ ...file, streamUrl });
      setIsPlaying(true);
    }
  };

  // Gérer erreur audio
  const handleAudioError = (e) => {
    console.log("Erreur audio:", e);
    setIsPlaying(false);
    // Proposer d'ouvrir dans un nouvel onglet
    if (currentAudio) {
      const openExternal = window.confirm(
        "Impossible de lire ce fichier directement. Voulez-vous l'ouvrir dans Google Drive ?"
      );
      if (openExternal) {
        window.open(currentAudio.webViewLink || `https://drive.google.com/file/d/${currentAudio.id}/view`, '_blank');
      }
    }
  };

  // Arrêter l'audio
  const stopAudio = () => {
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
    setCurrentAudio(null);
    setIsPlaying(false);
  };

  // Déterminer le type de fichier
  const getFileType = (file) => {
    if (file.type === 'folder' || file.mimeType?.includes('folder')) return 'folder';
    
    const name = file.name?.toLowerCase() || '';
    const mimeType = file.mimeType?.toLowerCase() || '';
    
    if (name.endsWith('.mp3') || name.endsWith('.wav') || name.endsWith('.m4a') || mimeType.includes('audio')) return 'audio';
    if (name.endsWith('.mp4') || name.endsWith('.mov') || name.endsWith('.avi') || mimeType.includes('video')) return 'video';
    if (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.gif') || mimeType.includes('image')) return 'image';
    if (name.endsWith('.txt') || name.endsWith('.pdf') || name.endsWith('.doc')) return 'document';
    
    return 'file';
  };

  // Icône selon le type
  const getFileIcon = (type) => {
    switch(type) {
      case 'folder': return <Folder className="w-8 h-8 text-yellow-500" />;
      case 'audio': return <Music className="w-8 h-8 text-purple-500" />;
      case 'video': return <Video className="w-8 h-8 text-pink-500" />;
      case 'image': return <Image className="w-8 h-8 text-blue-500" />;
      case 'document': return <FileText className="w-8 h-8 text-gray-500" />;
      default: return <FileText className="w-8 h-8 text-gray-400" />;
    }
  };

  // Couleur de fond selon le type
  const getFileBgColor = (type) => {
    switch(type) {
      case 'folder': return 'from-yellow-100 to-yellow-200';
      case 'audio': return 'from-purple-100 to-purple-200';
      case 'video': return 'from-pink-100 to-pink-200';
      case 'image': return 'from-blue-100 to-blue-200';
      default: return 'from-gray-100 to-gray-200';
    }
  };

  // Gérer le clic sur un fichier
  const handleFileClick = (file) => {
    const type = getFileType(file);
    
    if (type === 'folder') {
      openFolder(file);
    } else if (type === 'audio') {
      playAudio(file);
    } else if (type === 'image') {
      setSelectedProject(file);
    } else if (type === 'video') {
      setSelectedProject(file);
    } else {
      // Télécharger ou ouvrir
      window.open(file.url || file.webViewLink, '_blank');
    }
  };

  const submitProject = async () => {
    setGenerating(true);
    
    try {
      fetch("https://n8n.nightcrow.fr/webhook/Create_music_project", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...project,
          hasVisual: needsVisual,
          createdAt: new Date().toISOString()
        }),
      });
      
      setStep(4);
      
    } catch (error) {
      console.log("ERREUR:", error);
      alert("Erreur: " + error.message);
    } finally {
      setGenerating(false);
    }
  };

  const resetProject = () => {
    setStep(1);
    setProject({
      projectName: '',
      projectType: '',
      description: '',
      musicGenre: '',
      musicMood: '',
      tempo: 'medium',
      duration: '60',
      vocalType: '',
      language: 'Français',
      lyricsStyle: '',
      hasVisual: false,
      visualStyle: '',
      animationType: '',
      targetAge: '',
      targetAudience: '',
      instruments: [],
      keySignature: '',
      reference: '',
      additionalNotes: ''
    });
  };

  const canProceedStep1 = project.projectName && project.projectType && project.description;
  const canProceedStep2 = project.musicGenre && project.musicMood && project.vocalType;
  const canProceedStep3 = !needsVisual || (project.visualStyle && project.animationType);

  return (
    <div className={`flex-1 bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto ${currentAudio ? 'pb-24' : ''}`}>
      <div className="max-w-5xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar assistant={assistant} size="lg" />
            <div>
              <h1 className="text-2xl font-bold">🎵 Créateur de Musique & Clips</h1>
              <p className="text-gray-600">Créez des comptines, musiques et clips vidéo avec l'IA</p>
            </div>
          </div>
          
          <div className="flex bg-white rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setView('create')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${view === 'create' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Créer
            </button>
            <button
              onClick={() => setView('projects')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${view === 'projects' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Folder className="w-4 h-4 inline mr-2" />
              Mes Projets
            </button>
          </div>
        </div>

        {/* VUE: MES PROJETS */}
        {view === 'projects' && (
          <div>
            {/* Breadcrumb / Navigation */}
            <Card className="p-3 mb-4">
              <div className="flex items-center gap-2">
                {currentPath !== '/' && (
                  <button onClick={goBack} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                <button onClick={goToRoot} className="p-2 hover:bg-gray-100 rounded-lg">
                  <Home className="w-4 h-4" />
                </button>
                <span className="text-gray-300">/</span>
                <Folder className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">{currentFolderName}</span>
                <span className="text-sm text-gray-400 ml-2">({projects.length} éléments)</span>
              </div>
            </Card>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">📁 {currentFolderName}</h2>
              <Button variant="outline" onClick={() => loadProjects(currentPath === '/' ? '/' : currentPath)}>
                <RefreshCw className={`w-4 h-4 ${loadingProjects ? 'animate-spin' : ''}`} /> Actualiser
              </Button>
            </div>

            {loadingProjects ? (
              <div className="text-center py-12">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-purple-500 mb-4" />
                <p className="text-gray-500">Chargement...</p>
              </div>
            ) : projects.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Folder className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dossier vide</h3>
                <p className="text-gray-500 mb-6">Aucun fichier dans ce dossier</p>
                {currentPath !== '/' && (
                  <Button variant="outline" onClick={goBack}>
                    <ChevronLeft className="w-4 h-4" /> Retour
                  </Button>
                )}
              </Card>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {projects.map((file, index) => {
                  const type = getFileType(file);
                  const isCurrentlyPlaying = currentAudio && currentAudio.id === file.id && isPlaying;
                  
                  return (
                    <Card 
                      key={file.id || index} 
                      className={`overflow-hidden cursor-pointer hover:shadow-lg transition-all ${isCurrentlyPlaying ? 'ring-2 ring-purple-500' : ''}`}
                      onClick={() => handleFileClick(file)}
                    >
                      {/* Thumbnail ou icône */}
                      <div className={`h-32 bg-gradient-to-br ${getFileBgColor(type)} flex items-center justify-center relative`}>
                        {type === 'image' && file.thumbnailUrl ? (
                          <img src={file.thumbnailUrl} alt={file.name} className="w-full h-full object-cover" />
                        ) : type === 'video' && file.thumbnailUrl ? (
                          <>
                            <img src={file.thumbnailUrl} alt={file.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center">
                            {getFileIcon(type)}
                            {type === 'audio' && (
                              <div className="mt-2">
                                {isCurrentlyPlaying ? (
                                  <Pause className="w-6 h-6 text-purple-600" />
                                ) : (
                                  <Play className="w-6 h-6 text-purple-600" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Badge type */}
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white ${
                          type === 'folder' ? 'bg-yellow-500' :
                          type === 'audio' ? 'bg-purple-500' :
                          type === 'video' ? 'bg-pink-500' :
                          type === 'image' ? 'bg-blue-500' : 'bg-gray-500'
                        }`}>
                          {type === 'folder' ? '📁' : type === 'audio' ? '🎵' : type === 'video' ? '🎬' : type === 'image' ? '🖼️' : '📄'}
                        </div>
                      </div>
                      
                      <div className="p-3">
                        <p className="font-medium truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {type === 'folder' ? `${file.itemCount || '?'} éléments` : 
                           file.size ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : ''}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VUE: CRÉER UN PROJET */}
        {view === 'create' && (
          <>
            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {s === 4 ? '✓' : s}
                  </div>
                  {s < 4 && <div className={`w-16 h-1 ${step > s ? 'bg-purple-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <Card className="p-8">
                <h2 className="text-xl font-bold mb-6">📋 Étape 1: Définir votre projet</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="font-semibold block mb-2">Nom du projet *</label>
                    <input 
                      type="text"
                      value={project.projectName}
                      onChange={(e) => updateProject('projectName', e.target.value)}
                      placeholder="Ex: MaComptineMagique"
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Type de création *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {projectTypes.map(type => (
                        <button
                          key={type.id}
                          onClick={() => updateProject('projectType', type.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${project.projectType === type.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
                        >
                          <p className="font-semibold">{type.label}</p>
                          <p className="text-sm text-gray-500">{type.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-2">Description / Idée *</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject('description', e.target.value)}
                      placeholder="Décrivez votre projet..."
                      rows={4}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Tranche d'âge</label>
                    <div className="flex flex-wrap gap-2">
                      {targetAges.map(age => (
                        <button
                          key={age.id}
                          onClick={() => updateProject('targetAge', age.id)}
                          className={`px-4 py-2 rounded-full border-2 ${project.targetAge === age.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                        >
                          {age.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-2">Langue</label>
                    <select
                      value={project.language}
                      onChange={(e) => updateProject('language', e.target.value)}
                      className="w-full px-4 py-3 border rounded-xl"
                    >
                      {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                    </select>
                  </div>
                </div>

                <Button onClick={() => setStep(2)} disabled={!canProceedStep1} className="w-full mt-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600">
                  Continuer →
                </Button>
              </Card>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <Card className="p-8">
                <h2 className="text-xl font-bold mb-6">🎼 Étape 2: Style musical</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="font-semibold block mb-3">Genre musical *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {musicGenres.map(genre => (
                        <button
                          key={genre.id}
                          onClick={() => updateProject('musicGenre', genre.id)}
                          className={`px-4 py-3 rounded-xl border-2 ${project.musicGenre === genre.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                        >
                          {genre.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Ambiance *</label>
                    <div className="grid grid-cols-3 gap-3">
                      {musicMoods.map(mood => (
                        <button
                          key={mood.id}
                          onClick={() => updateProject('musicMood', mood.id)}
                          className={`p-3 rounded-xl border-2 ${project.musicMood === mood.id ? 'border-purple-500 ring-2 ring-purple-300' : 'border-gray-200'}`}
                        >
                          <div className={`w-full h-2 rounded-full bg-gradient-to-r ${mood.color} mb-2`} />
                          <p className="text-sm">{mood.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Type de voix *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {vocalTypes.map(vocal => (
                        <button
                          key={vocal.id}
                          onClick={() => updateProject('vocalType', vocal.id)}
                          className={`px-4 py-3 rounded-xl border-2 text-sm ${project.vocalType === vocal.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                        >
                          {vocal.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Tempo</label>
                    <div className="grid grid-cols-5 gap-2">
                      {tempos.map(t => (
                        <button
                          key={t.id}
                          onClick={() => updateProject('tempo', t.id)}
                          className={`p-3 rounded-xl border-2 text-center ${project.tempo === t.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                        >
                          <p className="text-xs font-semibold">{t.bpm}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block mb-3">Durée</label>
                    <div className="grid grid-cols-4 gap-2">
                      {durations.map(d => (
                        <button
                          key={d.id}
                          onClick={() => updateProject('duration', d.id)}
                          className={`px-4 py-3 rounded-xl border-2 text-sm ${project.duration === d.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-4">← Retour</Button>
                  <Button onClick={() => setStep(3)} disabled={!canProceedStep2} className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600">
                    Continuer →
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <Card className="p-8">
                <h2 className="text-xl font-bold mb-6">{needsVisual ? '🎨 Étape 3: Visuel' : '✨ Finalisation'}</h2>
                
                <div className="space-y-6">
                  {needsVisual && (
                    <>
                      <div>
                        <label className="font-semibold block mb-3">Style visuel *</label>
                        <div className="grid grid-cols-3 gap-3">
                          {visualStyles.map(s => (
                            <button
                              key={s.id}
                              onClick={() => updateProject('visualStyle', s.id)}
                              className={`p-4 rounded-xl border-2 ${project.visualStyle === s.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold block mb-3">Animation *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {animationTypes.map(a => (
                            <button
                              key={a.id}
                              onClick={() => updateProject('animationType', a.id)}
                              className={`p-4 rounded-xl border-2 ${project.animationType === a.id ? 'border-purple-500 bg-purple-100' : 'border-gray-200'}`}
                            >
                              {a.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="font-semibold block mb-2">Référence musicale</label>
                    <input 
                      type="text"
                      value={project.reference}
                      onChange={(e) => updateProject('reference', e.target.value)}
                      placeholder="Ex: Style Disney, ambiance Jazz..."
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="font-bold mb-4">📋 Récap</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><span className="text-gray-500">Nom:</span> {project.projectName}</p>
                      <p><span className="text-gray-500">Type:</span> {projectTypes.find(t => t.id === project.projectType)?.label}</p>
                      <p><span className="text-gray-500">Genre:</span> {musicGenres.find(g => g.id === project.musicGenre)?.label}</p>
                      <p><span className="text-gray-500">Mood:</span> {musicMoods.find(m => m.id === project.musicMood)?.label}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1 py-4">← Retour</Button>
                  <Button onClick={submitProject} disabled={generating || (needsVisual && !canProceedStep3)} className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600">
                    {generating ? <><RefreshCw className="w-5 h-5 animate-spin" /> Envoi...</> : <><Sparkles className="w-5 h-5" /> Lancer</>}
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <Card className="p-8 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">🎉 Projet envoyé !</h2>
                <p className="text-gray-500 mb-8">Génération en cours... Retrouvez votre projet dans "Mes Projets".</p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={resetProject}><Plus className="w-4 h-4" /> Nouveau</Button>
                  <Button onClick={() => { setView('projects'); goToRoot(); }}><Folder className="w-4 h-4" /> Mes Projets</Button>
                </div>
              </Card>
            )}
          </>
        )}

        {/* POPUP APERÇU IMAGE/VIDEO */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
            <div className="max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-2xl overflow-hidden">
                {getFileType(selectedProject) === 'image' ? (
                  <img src={selectedProject.url || selectedProject.webViewLink} alt={selectedProject.name} className="w-full max-h-[70vh] object-contain" />
                ) : getFileType(selectedProject) === 'video' ? (
                  <video controls autoPlay className="w-full max-h-[70vh]">
                    <source src={selectedProject.url || selectedProject.webViewLink} />
                  </video>
                ) : null}
                <div className="p-4 flex items-center justify-between">
                  <p className="font-medium">{selectedProject.name}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => window.open(selectedProject.url || selectedProject.webViewLink, '_blank')}>
                      <Download className="w-4 h-4" /> Télécharger
                    </Button>
                    <Button onClick={() => setSelectedProject(null)}>
                      <X className="w-4 h-4" /> Fermer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    {/* LECTEUR AUDIO PERSISTANT */}
      {currentAudio && (
        <div className="fixed bottom-0 left-64 right-0 bg-white border-t shadow-lg z-40">
          <div className="max-w-5xl mx-auto px-6 py-3">
            <div className="flex items-center gap-4">
              {/* Info */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{currentAudio.name}</p>
                  <p className="text-sm text-gray-500">{isPlaying ? '▶ En lecture' : '⏸ En pause'}</p>
                </div>
              </div>
              
              {/* Contrôles */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => playAudio(currentAudio)}
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </button>
                
                <button 
                  onClick={() => window.open(`https://drive.google.com/file/d/${currentAudio.id}/view`, '_blank')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                  title="Ouvrir dans Google Drive"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={stopAudio}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Audio element - via proxy n8n */}
              <audio 
                ref={(ref) => setAudioRef(ref)}
                src={getStreamableUrl(currentAudio)}
                autoPlay
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={(e) => {
                  console.log("Erreur audio:", e);
                  setIsPlaying(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
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
                  <div><p className="font-semibold">LinkedIn connecté</p><p className="text-sm text-gray-500">Steve Gonçalves • +500 connexions</p></div>
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
                  <Input label="Prénom" defaultValue="Steve" />
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
  const [integrations, setIntegrations] = useState({
    google: [
      { id: 'google-drive', name: 'Google Drive', desc: 'Stockage et partage de fichiers', icon: Folder, connected: true },
      { id: 'google-calendar', name: 'Google Calendar', desc: 'Gestion des événements et planification', icon: Calendar, connected: true },
      { id: 'google-sheets', name: 'Google Sheets', desc: 'Tableurs et données', icon: Grid, connected: true },
      { id: 'gmail', name: 'Gmail', desc: 'Envoi et réception d\'emails', icon: Mail, connected: true },
      { id: 'youtube', name: 'YouTube', desc: 'Upload et gestion de vidéos', icon: YouTube, connected: true },
    ],
    llm: [
      { id: 'openai', name: 'OpenAI GPT-4o', desc: 'GPT-4o, GPT-4 Turbo, DALL-E 3', icon: Sparkles, connected: true, badge: 'Principal' },
      { id: 'anthropic', name: 'Anthropic Claude', desc: 'Claude 3.5 Sonnet, Claude 3 Opus', icon: Brain, connected: true, badge: 'Nouveau' },
      { id: 'google-ai', name: 'Google Gemini', desc: 'Gemini Pro, Gemini Ultra', icon: Cpu, connected: true },
      { id: 'mistral', name: 'Mistral AI', desc: 'Mistral Large, Mixtral 8x7B', icon: Zap, connected: false },
      { id: 'meta-llama', name: 'Meta Llama 3', desc: 'Llama 3 70B, Llama 3 8B', icon: Bot, connected: false },
      { id: 'perplexity', name: 'Perplexity AI', desc: 'Recherche augmentée par IA', icon: Search, connected: false },
      { id: 'groq', name: 'Groq', desc: 'Inférence ultra-rapide', icon: Zap, connected: false, badge: 'Rapide' },
      { id: 'replicate', name: 'Replicate', desc: 'Modèles open-source hébergés', icon: Cloud, connected: true },
    ],
    productivity: [
      { id: 'notion', name: 'Notion', desc: 'Documentation et wikis', icon: BookOpen, connected: true },
      { id: 'github', name: 'GitHub', desc: 'Repositories et code', icon: Github, connected: true },
      { id: 'custom-api', name: 'Custom API', desc: 'Vos APIs personnalisées', icon: Code, connected: true },
      { id: 'n8n', name: 'n8n', desc: 'Automatisation workflows', icon: Workflow, connected: true, badge: 'Core' },
    ],
    communication: [
      { id: 'slack', name: 'Slack', desc: 'Notifications et messages', icon: MessageSquare, connected: false },
      { id: 'discord', name: 'Discord', desc: 'Bot et notifications serveur', icon: Discord, connected: false },
      { id: 'telegram', name: 'Telegram', desc: 'Bot et messages', icon: Telegram, connected: true },
      { id: 'whatsapp', name: 'WhatsApp Business', desc: 'Messages automatisés', icon: WhatsApp, connected: true },
    ],
    social: [
      { id: 'instagram', name: 'Instagram', desc: 'Publication posts et stories', icon: Instagram, connected: true },
      { id: 'facebook', name: 'Facebook', desc: 'Pages et publications', icon: Facebook, connected: true },
      { id: 'tiktok', name: 'TikTok', desc: 'Vidéos courtes', icon: TikTok, connected: true },
      { id: 'x-twitter', name: 'X (Twitter)', desc: 'Tweets et threads', icon: XTwitter, connected: true },
      { id: 'linkedin', name: 'LinkedIn', desc: 'Posts professionnels', icon: Linkedin, connected: true },
      { id: 'pinterest', name: 'Pinterest', desc: 'Épingles et tableaux', icon: Pinterest, connected: true },
      { id: 'threads', name: 'Threads', desc: 'Conversations', icon: Threads, connected: true },
      { id: 'snapchat', name: 'Snapchat', desc: 'Stories et Spotlight', icon: Snapchat, connected: false },
    ],
    payment: [
      { id: 'stripe', name: 'Stripe', desc: 'Paiements et abonnements', icon: CreditCard, connected: true },
      { id: 'paypal', name: 'PayPal', desc: 'Paiements internationaux', icon: DollarSign, connected: false },
    ],
    media: [
      { id: 'suno', name: 'Suno AI', desc: 'Génération de musique', icon: Music, connected: true, badge: 'Nouveau' },
      { id: 'elevenlabs', name: 'ElevenLabs', desc: 'Text-to-Speech réaliste', icon: Mic, connected: true },
      { id: 'midjourney', name: 'Midjourney', desc: 'Génération d\'images', icon: Image, connected: false },
      { id: 'runway', name: 'Runway ML', desc: 'Génération de vidéos', icon: Video, connected: false },
      { id: 'heygen', name: 'HeyGen', desc: 'Avatars vidéo IA', icon: User, connected: false },
    ],
  });

  const toggleConnection = (category, id) => {
    setIntegrations(prev => ({
      ...prev,
      [category]: prev[category].map(int => 
        int.id === id ? { ...int, connected: !int.connected } : int
      )
    }));
  };

  const categories = [
    { key: 'google', title: '🔵 Google Workspace', desc: 'Suite Google complète' },
    { key: 'llm', title: '🧠 Modèles LLM & IA', desc: 'Intelligence artificielle' },
    { key: 'productivity', title: '⚡ Productivité', desc: 'Outils de travail' },
    { key: 'communication', title: '💬 Communication', desc: 'Messageries et notifications' },
    { key: 'social', title: '📱 Réseaux Sociaux', desc: 'Publication multiplateforme' },
    { key: 'payment', title: '💳 Paiements', desc: 'Solutions de paiement' },
    { key: 'media', title: '🎨 Génération Média', desc: 'Audio, image et vidéo' },
  ];

  const totalConnected = Object.values(integrations).flat().filter(i => i.connected).length;
  const totalIntegrations = Object.values(integrations).flat().length;

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">🔗 Intégrations</h1>
            <p className="text-gray-600">Connectez vos outils et services préférés</p>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{totalConnected}/{totalIntegrations}</p>
              <p className="text-sm text-gray-500">Connectées</p>
            </div>
          </div>
        </div>

        {/* Catégories */}
        {categories.map(cat => (
          <div key={cat.key} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">{cat.title}</h2>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
              <span className="text-sm text-gray-400">
                {integrations[cat.key].filter(i => i.connected).length}/{integrations[cat.key].length} actives
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {integrations[cat.key].map(int => (
                <Card key={int.id} className={`p-5 transition-all hover:shadow-md ${int.connected ? 'ring-2 ring-green-200' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${int.connected ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gray-100'}`}>
                      <int.icon className={`w-6 h-6 ${int.connected ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {int.connected && (
                        <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" /> Connecté
                        </span>
                      )}
                      {int.badge && (
                        <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {int.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{int.name}</h3>
                  <p className="text-xs text-gray-500 mb-4 h-8">{int.desc}</p>
                  <Button 
                    variant={int.connected ? 'outline' : 'primary'} 
                    size="sm" 
                    className={`w-full ${int.connected ? 'text-red-500 border-red-200 hover:bg-red-50' : ''}`}
                    onClick={() => toggleConnection(cat.key, int.id)}
                  >
                    {int.connected ? (
                      <><Unlink className="w-3 h-3" /> Déconnecter</>
                    ) : (
                      <><Link className="w-3 h-3" /> Connecter</>
                    )}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Footer info */}
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Besoin d'une autre intégration ?</h3>
              <p className="text-sm text-gray-600">Contactez-nous pour ajouter vos outils personnalisés via notre API.</p>
            </div>
            <Button variant="outline">
              <Plus className="w-4 h-4" /> Demander
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// ============ TEAM PAGE ============
const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { 
      id: 1, 
      name: 'Steve Gonçalves', 
      email: 'goncalvessteve@gclvsai.fr', 
      phone: '+33 7 60 23 98 79',
      role: 'Expert en Automatisation & Création de Solutions IA', 
      avatar: 'SG',
      color: 'from-purple-600 to-pink-600',
      bio: 'Fondateur de GCLVS AI. Passionné par l\'automatisation et l\'intelligence artificielle, je crée des solutions innovantes pour optimiser vos processus.',
      location: 'Paris, France',
      socials: [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gclvsai', username: '@GCLVSai' },
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/gclvsai', username: '@GCLVSai' },
        { name: 'X (Twitter)', icon: XTwitter, url: 'https://x.com/gclvsai', username: '@GCLVSai' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/gclvsai', username: '@GCLVSai' },
        { name: 'TikTok', icon: TikTok, url: 'https://tiktok.com/@gclvsai', username: '@GCLVSai' },
        { name: 'YouTube', icon: YouTube, url: 'https://youtube.com/@gclvsai', username: '@GCLVSai' },
        { name: 'Discord', icon: Discord, url: '#', username: 'GCLVSai#0001' },
        { name: 'Telegram', icon: Telegram, url: 'https://t.me/gclvsai', username: '@GCLVSai' },
        { name: 'WhatsApp', icon: WhatsApp, url: 'https://wa.me/33760239879', username: '+33 7 60 23 98 79' },
      ],
      tools: [
        { name: 'n8n', category: 'Automatisation', color: 'bg-orange-100 text-orange-700' },
        { name: 'OpenAI GPT-4', category: 'IA', color: 'bg-green-100 text-green-700' },
        { name: 'Claude AI', category: 'IA', color: 'bg-purple-100 text-purple-700' },
        { name: 'Midjourney', category: 'IA Image', color: 'bg-blue-100 text-blue-700' },
        { name: 'Make.com', category: 'Automatisation', color: 'bg-pink-100 text-pink-700' },
        { name: 'React', category: 'Dev', color: 'bg-cyan-100 text-cyan-700' },
        { name: 'Node.js', category: 'Dev', color: 'bg-lime-100 text-lime-700' },
        { name: 'Google Cloud', category: 'Cloud', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Stripe', category: 'Paiement', color: 'bg-indigo-100 text-indigo-700' },
        { name: 'Suno AI', category: 'IA Musique', color: 'bg-rose-100 text-rose-700' },
        { name: 'ElevenLabs', category: 'IA Voix', color: 'bg-violet-100 text-violet-700' },
        { name: 'Notion', category: 'Productivité', color: 'bg-gray-100 text-gray-700' },
      ],
      skills: ['Automatisation', 'Intelligence Artificielle', 'Développement Web', 'Intégration API', 'Stratégie Digitale', 'No-Code/Low-Code']
    },
    { 
      id: 2, 
      name: 'Nicolas Nicoué', 
      email: 'nicouenicolas@gclvsai.fr', 
      phone: '+33 6 XX XX XX XX',
      role: 'Expert Consultant Création de Contenu Digital', 
      avatar: 'NN',
      color: 'from-blue-600 to-cyan-600',
      bio: 'Créateur de contenu passionné, je transforme vos idées en visuels impactants. Expert en design graphique et production vidéo.',
      location: 'Paris, France',
      socials: [
        { name: 'LinkedIn', icon: Linkedin, url: '#', username: '@NicolasNicoue' },
        { name: 'Instagram', icon: Instagram, url: '#', username: '@nicolas.create' },
        { name: 'Behance', icon: Image, url: '#', username: '@NicolasNicoue' },
        { name: 'TikTok', icon: TikTok, url: '#', username: '@nicolas.create' },
        { name: 'YouTube', icon: YouTube, url: '#', username: '@NicolasNicoue' },
        { name: 'Pinterest', icon: Pinterest, url: '#', username: '@NicolasCreate' },
      ],
      tools: [
        { name: 'Adobe Photoshop', category: 'Design', color: 'bg-blue-100 text-blue-700' },
        { name: 'Adobe Illustrator', category: 'Design', color: 'bg-orange-100 text-orange-700' },
        { name: 'Adobe Premiere Pro', category: 'Vidéo', color: 'bg-purple-100 text-purple-700' },
        { name: 'Adobe After Effects', category: 'Motion', color: 'bg-indigo-100 text-indigo-700' },
        { name: 'Figma', category: 'UI/UX', color: 'bg-pink-100 text-pink-700' },
        { name: 'Canva Pro', category: 'Design', color: 'bg-cyan-100 text-cyan-700' },
        { name: 'DaVinci Resolve', category: 'Vidéo', color: 'bg-gray-100 text-gray-700' },
        { name: 'Midjourney', category: 'IA Image', color: 'bg-violet-100 text-violet-700' },
        { name: 'DALL-E 3', category: 'IA Image', color: 'bg-green-100 text-green-700' },
        { name: 'Runway ML', category: 'IA Vidéo', color: 'bg-rose-100 text-rose-700' },
        { name: 'CapCut', category: 'Vidéo', color: 'bg-teal-100 text-teal-700' },
        { name: 'Lightroom', category: 'Photo', color: 'bg-yellow-100 text-yellow-700' },
      ],
      skills: ['Design Graphique', 'Montage Vidéo', 'Motion Design', 'Photographie', 'Direction Artistique', 'Branding']
    },
    { 
      id: 3, 
      name: 'Florian', 
      email: 'FN@nightcrow.fr', 
      phone: '+33 6 XX XX XX XX',
      role: 'Expert Senior Sécurité Réseaux & System Administrator', 
      avatar: 'FL',
      color: 'from-gray-700 to-gray-900',
      bio: 'Expert en cybersécurité et administration système. Je protège vos infrastructures et optimise vos performances serveur.',
      location: 'France',
      socials: [
        { name: 'GitHub', icon: Github, url: '#', username: '@FloNightcrow' },
        { name: 'Discord', icon: Discord, url: '#', username: 'Flo#1337' },
        { name: 'LinkedIn', icon: Linkedin, url: '#', username: '@FlorianN' },
        { name: 'GitLab', icon: Code, url: '#', username: '@FloNightcrow' },
        { name: 'Stack Overflow', icon: Layers, url: '#', username: '@FloSec' },
      ],
      tools: [
        { name: 'Linux/Ubuntu', category: 'OS', color: 'bg-orange-100 text-orange-700' },
        { name: 'Docker', category: 'Container', color: 'bg-blue-100 text-blue-700' },
        { name: 'Kubernetes', category: 'Orchestration', color: 'bg-indigo-100 text-indigo-700' },
        { name: 'Nginx', category: 'Serveur', color: 'bg-green-100 text-green-700' },
        { name: 'Cloudflare', category: 'CDN/Sécurité', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'GitHub Actions', category: 'CI/CD', color: 'bg-gray-100 text-gray-700' },
        { name: 'Ansible', category: 'Automation', color: 'bg-red-100 text-red-700' },
        { name: 'Prometheus', category: 'Monitoring', color: 'bg-rose-100 text-rose-700' },
        { name: 'Grafana', category: 'Dashboard', color: 'bg-amber-100 text-amber-700' },
        { name: 'Wireguard', category: 'VPN', color: 'bg-purple-100 text-purple-700' },
        { name: 'Mattermost', category: 'Communication', color: 'bg-cyan-100 text-cyan-700' },
        { name: 'PostgreSQL', category: 'Database', color: 'bg-sky-100 text-sky-700' },
      ],
      skills: ['Cybersécurité', 'Administration Système', 'DevOps', 'Infrastructure Cloud', 'Réseaux', 'Scripting Bash/Python']
    },
    { 
      id: 4, 
      name: 'Romain S.', 
      email: 'RS@nightcrow.fr', 
      phone: '+33 6 XX XX XX XX',
      role: 'Consultant en Création de Capital & Investissements', 
      avatar: 'RS',
      color: 'from-emerald-600 to-teal-600',
      bio: 'Expert en stratégie financière et levée de fonds. J\'accompagne les entrepreneurs dans leur croissance et leurs investissements.',
      location: 'Paris, France',
      socials: [
        { name: 'LinkedIn', icon: Linkedin, url: '#', username: '@RomainS-Invest' },
        { name: 'X (Twitter)', icon: XTwitter, url: '#', username: '@RomainS_Finance' },
        { name: 'Email Pro', icon: Mail, url: 'mailto:RS@nightcrow.fr', username: 'RS@nightcrow.fr' },
      ],
      tools: [
        { name: 'Excel/Sheets', category: 'Finance', color: 'bg-green-100 text-green-700' },
        { name: 'Bloomberg', category: 'Finance', color: 'bg-orange-100 text-orange-700' },
        { name: 'Notion', category: 'Productivité', color: 'bg-gray-100 text-gray-700' },
        { name: 'Airtable', category: 'Database', color: 'bg-blue-100 text-blue-700' },
        { name: 'DocuSign', category: 'Juridique', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Slack', category: 'Communication', color: 'bg-purple-100 text-purple-700' },
        { name: 'Zoom', category: 'Visio', color: 'bg-cyan-100 text-cyan-700' },
        { name: 'HubSpot', category: 'CRM', color: 'bg-rose-100 text-rose-700' },
        { name: 'Stripe', category: 'Paiement', color: 'bg-indigo-100 text-indigo-700' },
        { name: 'QuickBooks', category: 'Compta', color: 'bg-lime-100 text-lime-700' },
      ],
      skills: ['Levée de Fonds', 'Business Plan', 'Analyse Financière', 'Stratégie d\'Investissement', 'Due Diligence', 'M&A']
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">👥 Notre Équipe</h1>
            <p className="text-gray-600">Les experts derrière GCLVS AI</p>
          </div>
          <Button><Plus className="w-4 h-4" /> Inviter</Button>
        </div>

        {/* Grille des membres */}
        <div className="grid grid-cols-2 gap-6">
          {members.map(m => (
            <Card 
              key={m.id} 
              className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => setSelectedMember(m)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${m.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {m.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-2">{m.role}</p>
                  <p className="text-sm text-gray-500">{m.email}</p>
                </div>
              </div>
              
              {/* Aperçu des outils */}
              <div className="mt-4 flex flex-wrap gap-1">
                {m.tools.slice(0, 4).map((tool, idx) => (
                  <span key={idx} className={`text-xs px-2 py-1 rounded-full ${tool.color}`}>
                    {tool.name}
                  </span>
                ))}
                {m.tools.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                    +{m.tools.length - 4}
                  </span>
                )}
              </div>
              
              {/* Réseaux sociaux aperçu */}
              <div className="mt-4 flex items-center gap-2">
                {m.socials.slice(0, 5).map((social, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <social.icon className="w-4 h-4 text-gray-600" />
                  </div>
                ))}
                {m.socials.length > 5 && (
                  <span className="text-xs text-gray-400">+{m.socials.length - 5}</span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* POPUP MEMBRE SÉLECTIONNÉ */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMember(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Header avec gradient */}
              <div className={`h-32 bg-gradient-to-r ${selectedMember.color} relative`}>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute -bottom-12 left-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${selectedMember.color} rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl border-4 border-white`}>
                    {selectedMember.avatar}
                  </div>
                </div>
              </div>
              
              <div className="pt-16 px-8 pb-8 overflow-y-auto max-h-[calc(90vh-128px)]">
                {/* Infos principales */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                    <p className="text-purple-600 font-medium">{selectedMember.role}</p>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                      <Map className="w-4 h-4" /> {selectedMember.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => window.location.href = `mailto:${selectedMember.email}`}>
                      <Mail className="w-4 h-4" /> Email
                    </Button>
                    <Button size="sm" onClick={() => window.location.href = `tel:${selectedMember.phone}`}>
                      <Phone className="w-4 h-4" /> Appeler
                    </Button>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl">{selectedMember.bio}</p>

                {/* Contact rapide */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-sm">{selectedMember.email}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Téléphone</p>
                    <p className="font-medium text-sm">{selectedMember.phone}</p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" /> Réseaux & Contacts
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedMember.socials.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <social.icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500">{social.name}</p>
                          <p className="text-sm font-medium truncate">{social.username}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Outils & Technologies */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-orange-500" /> Outils & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-2 rounded-xl text-sm font-medium ${tool.color}`}
                      >
                        {tool.name}
                        <span className="ml-1 text-xs opacity-70">• {tool.category}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compétences */}
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" /> Compétences clés
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">G</div>
            <div><Button variant="outline" size="sm">Changer le logo</Button></div>
          </div>
          <Input label="Nom de l'entreprise" defaultValue="GSMART3D" />
          <Input label="Site web" defaultValue="https://gsmart3d.cloud" />
          <Textarea label="Description" defaultValue="Agence de marketing digital spécialisée dans les automatisations et creation de contenu par IA" rows={3} />
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
      if (id === 'mickael' && idx === '0') return <MusicCreator assistant={a} setPage={setPage} />;
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
