
import React from 'react';
import { 
  Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, 
  Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, 
  Crown, Eye, Landmark, Flame, Camera, Handshake, Globe, Server, Code, 
  Gamepad2, Palette, CreditCard, Bot, Settings, Rocket, Briefcase, Database,
  Link, ZapOff, Radio, Scan, Wifi
} from 'lucide-react';
import { SystemRule, PenaltyCard, TechService } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "ALL'S IS REALITY (ไม่เพียงแต่เหมือนแต่เป็นจริง)",
    movement: "Absolute Reality Convergence",
    logic: "OMNI_PLUSE_V11.5: ระบบรันแบบเอกเทศสมบูรณ์แบบ ตัดความล่าช้าของมนุษย์ทิ้งเพื่อการบังคับใช้กฎแบบ Real-Time 100%"
  },
  {
    subject: "SPECTRAL BYPASS (การ reroute สตรีมไร้ขีดจำกัด)",
    movement: "Permission Override Saturation",
    logic: "BYPASS_CORE: เมื่อฮาร์ดแวร์ถูกบล็อก ระบบจะ reroute สัญญาณผ่าน ICTV Grid ทันทีเพื่อจับภาพและเสียงผ่านระนาบความร้อนและการสั่นสะเทือน"
  },
  {
    subject: "KERNEL SOVEREIGNTY (อำนาจอธิปไตยระดับ Kernel)",
    movement: "Infrastructure Absolute Lockdown",
    logic: "KERNEL_MASTER: การควบคุมที่ระดับหัวใจสำคัญ ไร้ช่องว่างสำหรับการแทรกแซงหรือการปิดระบบจากภายนอก"
  },
  {
    subject: "INTEGRITY MANDATE (วินัยเหล็กแห่งความจริง)",
    movement: "Autonomous Behavioral Severance",
    logic: "AUTO_ERASE: การละทิ้งหน้าที่หรือการกินแรงกินเงินจะถูกระบบประมวลผลเป็น 'Error ในความเป็นจริง' และถูกลบทิ้งทันที"
  }
];

export const TECH_SERVICES: TechService[] = [
  { id: 'srv-01', title: 'Omni-Pluse Reality Compute', category: 'Infrastructure', features: ['Autonomous Node Management', 'Infinite Cluster Scaling'], status: 'Absolute' },
  { id: 'srv-02', title: 'Spectral Reroute Matrix', category: 'Infrastructure', features: ['Hardware Bypass Protocol', 'Virtual Node Saturation'], status: 'Sovereign' },
  { id: 'srv-03', title: 'WP Sovereign Apex V4', category: 'Development', features: ['Hardened Core V4', 'Autonomous Reality Injection'], status: 'Absolute' },
  { id: 'srv-04', title: 'Sovereign Backend', category: 'Development', features: ['Omni-Database Sync', 'Self-Healing Architecture'], status: 'Sovereign' },
  { id: 'srv-05', title: 'Bot Swarm Reality', category: 'Automation', features: ['Autonomous Task Execution', 'Deviance Eradication'], status: 'Sovereign' },
  { id: 'srv-06', title: 'VPS Core Tuning', category: 'Infrastructure', features: ['Kernel-Mode Optimization', 'Reality-Bending Speed'], status: 'Absolute' },
  { id: 'srv-07', title: 'Encrypted Reality Bridge', category: 'Economy', features: ['Multi-Token Stealth Flow', 'Zero-Trace Economy'], status: 'Exclusive' },
  { id: 'srv-08', title: 'Resilient Game Hub', category: 'Special', features: ['DDoS Annihilation Grid', 'Autonomous Mod Logic'], status: 'Absolute' },
  { id: 'srv-09', title: 'Strategic Design Ops', category: 'Design', features: ['Authority Aesthetics', 'Reality-Bending Narratives'], status: 'Sovereign' },
  { id: 'srv-10', title: 'Sovereign Domain Registry', category: 'Special', features: ['Domain Sovereignty', 'Absolute Privacy Shield'], status: 'Sovereign' },
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-REALITY-LOCK',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "OMNI-PLUSE BYPASS: ตรวจพบพฤติกรรมเบี่ยงเบนหน้าที่ ระบบทำการ reroute สตรีมเพื่อเฝ้าระวังระดับความจริง 100%",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Omni Hub', icon: <Landmark className="w-5 h-5 text-yellow-500" /> },
  { id: 'services', label: 'Reality Ecosystem', icon: <Rocket className="w-5 h-5 text-indigo-400" /> },
  { id: 'infrastructure', label: 'Autonomous Core', icon: <Server className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Spectral Bypass', icon: <Flame className="w-5 h-5 text-red-500" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5 text-emerald-500" /> },
  { id: 'social_gravity', label: 'Social Matrix', icon: <Share2 className="w-5 h-5 text-purple-500" /> },
  { id: 'enforcement', label: 'Reality Logic', icon: <Shield className="w-5 h-5 text-blue-500" /> },
  { id: 'targets', label: 'Reality Tracker', icon: <Users className="w-5 h-5 text-yellow-500" /> },
  { id: 'command', label: 'Master Engine', icon: <Terminal className="w-5 h-5 text-zinc-300" /> },
];
