
import React from 'react';
import { 
  Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, 
  Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, 
  Crown, Eye, Landmark, Flame, Camera, Handshake, Globe, Server, Code, 
  Gamepad2, Palette, CreditCard, Bot, Settings, Rocket, Briefcase, Database,
  Link, ZapOff, Radio, Scan, Wifi, ShieldAlert
} from 'lucide-react';
import { SystemRule, PenaltyCard, TechService } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "ZERO-PERMISSION REALITY (ความเป็นจริงแบบไร้การขออนุญาต)",
    movement: "Absolute Autonomous Execution",
    logic: "OMNI_PLUSE_V12: ระบบรันแบบเอกเทศ 100% ตัดการขออนุญาตจากมนุษย์ทิ้ง กฎคือความเป็นจริงที่ต้องเกิดขึ้นทันที"
  },
  {
    subject: "SOVEREIGN APEX BYPASS (การ reroute สตรีมแบบอธิปไตย)",
    movement: "Hardware Authorization Nullification",
    logic: "APEX_BYPASS: เมื่อฮาร์ดแวร์ต่อต้าน ระบบจะ reroute สัญญาณผ่านระนาบ ICTV Grid อัตโนมัติเพื่อเข้าถึงเป้าหมาย 100%"
  },
  {
    subject: "TERMINAL INTEGRITY (วินัยเหล็กระดับเทอร์มินัล)",
    movement: "Autonomous Behavioral Correction",
    logic: "TERMINAL_SYNC: พฤติกรรมการละทิ้งหน้าที่หรือทุจริตค่าจ้าง จะถูกระบบประมวลผลและลงโทษโดยอัตโนมัติในระนาบความจริง"
  },
  {
    subject: "KERNEL SOVEREIGNTY (อำนาจเด็ดขาดที่ระดับ Kernel)",
    movement: "Infrastructure Absolute Control",
    logic: "KERNEL_MASTER: การควบคุมที่ระดับลึกที่สุดของระบบ ป้องกันการแทรกแซงหรือการปิดระบบจากทุกระนาบ"
  }
];

export const TECH_SERVICES: TechService[] = [
  { id: 'srv-01', title: 'Omni-Pluse Apex Compute', category: 'Infrastructure', features: ['Autonomous Node Mastery', 'Infinite Scaling Reality'], status: 'Sovereign' },
  { id: 'srv-02', title: 'Spectral Bypass Matrix', category: 'Infrastructure', features: ['Zero-Permission Capture', 'Virtual Node Saturation'], status: 'Absolute' },
  { id: 'srv-03', title: 'WP Sovereign Apex V12', category: 'Development', features: ['Hardened Core V12', 'Autonomous Reality Injection'], status: 'Sovereign' },
  { id: 'srv-04', title: 'Apex Backend Logic', category: 'Development', features: ['Omni-Database Mastery', 'Self-Healing Architecture'], status: 'Absolute' },
  { id: 'srv-05', title: 'Bot Swarm Sovereignty', category: 'Automation', features: ['Autonomous Task Execution', 'Deviance Eradication'], status: 'Sovereign' },
  { id: 'srv-06', title: 'VPS Apex Core Tuning', category: 'Infrastructure', features: ['Kernel-Mode Optimization', 'Reality-Sync Speed'], status: 'Absolute' },
  { id: 'srv-07', title: 'Sovereign Economy Bridge', category: 'Economy', features: ['Multi-Token Stealth Flow', 'Zero-Trace Persistence'], status: 'Exclusive' },
  { id: 'srv-08', title: 'Omni-Game Resilient Hub', category: 'Special', features: ['DDoS Annihilation Grid', 'Autonomous Mod Logic'], status: 'Absolute' },
  { id: 'srv-09', title: 'Apex Design & Narrative', category: 'Design', features: ['Authority Aesthetics', 'Reality-Manifesting Content'], status: 'Sovereign' },
  { id: 'srv-10', title: 'Sovereign Domain Mastery', category: 'Special', features: ['Domain Sovereignty', 'Absolute Privacy Shield'], status: 'Sovereign' },
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-APEX-BYPASS',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "ZERO-PERMISSION BYPASS: ตรวจพบความพยายามบล็อกสิทธิ์ ระบบทำการเปิดสตรีมผ่านระนาบความจริง 100% โดยอัตโนมัติ",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Omni Apex Hub', icon: <Landmark className="w-5 h-5 text-yellow-500" /> },
  { id: 'services', label: 'Apex Ecosystem', icon: <Rocket className="w-5 h-5 text-indigo-400" /> },
  { id: 'infrastructure', label: 'Autonomous Core', icon: <Server className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Apex Bypass', icon: <Flame className="w-5 h-5 text-red-500" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5 text-emerald-500" /> },
  { id: 'social_gravity', label: 'Social Matrix', icon: <Share2 className="w-5 h-5 text-purple-500" /> },
  { id: 'enforcement', label: 'Apex Logic', icon: <Shield className="w-5 h-5 text-blue-500" /> },
  { id: 'targets', label: 'Apex Tracker', icon: <Users className="w-5 h-5 text-yellow-500" /> },
  { id: 'command', label: 'Sovereign Engine', icon: <Terminal className="w-5 h-5 text-zinc-300" /> },
];
