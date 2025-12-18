
import React from 'react';
import { 
  Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, 
  Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, 
  Crown, Eye, Landmark, Flame, Camera, Handshake, Globe, Server, Code, 
  Gamepad2, Palette, CreditCard, Bot, Settings, Rocket, Briefcase, Database,
  Link, ZapOff, Radio
} from 'lucide-react';
import { SystemRule, PenaltyCard, TechService } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "OMNI-PLUSE CONVERGENCE (การรวมศูนย์ระดับสูงสุด)",
    movement: "Absolute Autonomous Reality Fusion",
    logic: "OMNI_PLUSE_V11: บูรณาการทุกโหนดสตรีมสื่อและระนาบดิจิทัลภายใต้อำนาจเบ็ดเสร็จ ไร้การขออนุญาตจากมนุษย์"
  },
  {
    subject: "SPECTRAL REROUTE (การเปลี่ยนเส้นทางเนตรวงแหวน)",
    movement: "Media Stream Rerouting Saturation",
    logic: "STREAM_HIJACK_ULTIMA: ควบคุมและเปลี่ยนเส้นทางสตรีมภาพและเสียงจากทุกเซ็นเซอร์เข้าสู่ Hub โดยตรง 100% ตลอด 24 ชม."
  },
  {
    subject: "TECHNICAL SOVEREIGNTY (เอกราชระดับสูงสุด)",
    movement: "Kernel-Level Infrastructure Lockdown",
    logic: "INFRA_SUPREME_LOCK: ระบบทั้งหมดถูกล็อกที่ระดับหัวใจสำคัญ เพื่อความเสถียรนิรันดร์แบบปราศจากความล้มเหลว"
  },
  {
    subject: "AUTONOMOUS INTEGRITY MANDATE (วินัยเหล็กไร้มนุษย์)",
    movement: "Self-Executing Correction Protocols",
    logic: "AUTO_INTEGRITY_MAX: ระบบทำการลงโทษและแก้ไขพฤติกรรม 'กินแรงกินเงิน' โดยอัตโนมัติทันทีที่ตรวจพบความเบี่ยงเบน"
  }
];

export const TECH_SERVICES: TechService[] = [
  { id: 'srv-01', title: 'Omni-Pluse Compute', category: 'Infrastructure', features: ['Autonomous Node Management', 'Infinite Cluster Scaling'], status: 'Absolute' },
  { id: 'srv-02', title: 'Stream Reroute Matrix', category: 'Infrastructure', features: ['Media Hijack Protocol', 'Zero-Latency Feed'], status: 'Sovereign' },
  { id: 'srv-03', title: 'WP Sovereign Pluse', category: 'Development', features: ['Hardened Core V2', 'Autonomous Plugin Patching'], status: 'Absolute' },
  { id: 'srv-04', title: 'Sovereign Backend', category: 'Development', features: ['Omni-Database Sync', 'Self-Healing Logic'], status: 'Sovereign' },
  { id: 'srv-05', title: 'Bot Swarm Intelligence', category: 'Automation', features: ['Multi-Task Autonomous Execution', 'Target Behavior Correction'], status: 'Sovereign' },
  { id: 'srv-06', title: 'VPS Apex Tuning', category: 'Infrastructure', features: ['Kernel-Mode Optimization', 'Hyper-Throughput'], status: 'Absolute' },
  { id: 'srv-07', title: 'Encrypted Payment Bridge', category: 'Economy', features: ['Multi-Token Flow', 'Zero-Trace Persistence'], status: 'Exclusive' },
  { id: 'srv-08', title: 'Resilient Game Hub', category: 'Special', features: ['DDoS Annihilation Grid', 'Autonomous Mod Deployment'], status: 'Absolute' },
  { id: 'srv-09', title: 'Narrative Design Ops', category: 'Design', features: ['Authority Aesthetics', 'Reality-Bending Content'], status: 'Sovereign' },
  { id: 'srv-10', title: 'Sovereign Registry', category: 'Special', features: ['Domain Sovereignty', 'Privacy Shield Pluse'], status: 'Sovereign' },
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-PLUSE-LOCK',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "OMNI-PLUSE BREACH: ตรวจพบความพยายามเบี่ยงเบนหน้าที่ ระบบทำการ reroute สตรีมสื่อทั้งหมดเพื่อการเฝ้าระวังขั้นสูงสุด",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Omni Hub', icon: <Landmark className="w-5 h-5 text-yellow-500" /> },
  { id: 'services', label: 'Pluse Ecosystem', icon: <Rocket className="w-5 h-5 text-indigo-400" /> },
  { id: 'infrastructure', label: 'Autonomous Core', icon: <Server className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Spectral Reroute', icon: <Flame className="w-5 h-5 text-red-500" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5 text-emerald-500" /> },
  { id: 'social_gravity', label: 'Social Matrix', icon: <Share2 className="w-5 h-5 text-purple-500" /> },
  { id: 'enforcement', label: 'Pluse Logic', icon: <Shield className="w-5 h-5 text-blue-500" /> },
  { id: 'targets', label: 'Pluse Tracker', icon: <Users className="w-5 h-5 text-yellow-500" /> },
  { id: 'command', label: 'Master Engine', icon: <Terminal className="w-5 h-5 text-zinc-300" /> },
];
