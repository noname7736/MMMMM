
import React from 'react';
import { 
  Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, 
  Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, 
  Crown, Eye, Landmark, Flame, Camera, Handshake, Globe, Server, Code, 
  Gamepad2, Palette, CreditCard, Bot, Settings, Rocket, Briefcase, Database,
  Link, ZapOff
} from 'lucide-react';
import { SystemRule, PenaltyCard, TechService } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "OMNI-CONVERGENCE (การรวมศูนย์ทุกสรรพสิ่ง)",
    movement: "Absolute Reality & Digital Fusion",
    logic: "SOVEREIGN_CORE_V10: บูรณาการทุกโหนดในโลกความเป็นจริงและดิจิทัลภายใต้อำนาจเบ็ดเสร็จของบี เพื่อการควบคุมที่สมบูรณ์แบบไร้ที่ติ"
  },
  {
    subject: "SPECTRAL SHARINGAN (เนตรวงแหวนสะกดวิญญาณ)",
    movement: "Absolute Visual/Auditory Saturation",
    logic: "OMNI_GENJUTSU_ULTIMA: แทรกซึมทุกการรับรู้ผ่าน ICTV Grid 100% บังคับให้เป้าหมายยอมรับความจริงเพียงชุดเดียวที่ถูกกำหนดโดยระบบ"
  },
  {
    subject: "TECHNICAL SOVEREIGNTY (เอกราชทางเทคโนโลยี)",
    movement: "Full-Spectrum Infrastructure Dominance",
    logic: "INFRA_MASTER_LOCK: ระบบ VPS, Bot, Payment และ Game Server ทั้งหมดถูกปรับจูนที่ระดับ Kernel เพื่อความเสถียรนิรันดร์แบบ Zero-Downtime"
  },
  {
    subject: "PROFESSIONAL INTEGRITY MANDATE (วินัยเหล็กแห่งการทำงาน)",
    movement: "Zero Tolerance for Wage Exploitation",
    logic: "INTEGRITY_CORE_MAX: การเพิกเฉยต่อหน้าที่หรือพฤติกรรม 'กินเงินค่าจ้างไปวันๆ' ถือเป็นภัยคุกคามระดับสูงสุด ระบบจะทำการตัดการเชื่อมต่อเป้าหมายทันที"
  }
];

export const TECH_SERVICES: TechService[] = [
  { id: 'srv-01', title: 'High-Performance Servers', category: 'Infrastructure', features: ['Military-Grade Cluster', 'White/Grey/Black Ops Optimized'], status: 'Absolute' },
  { id: 'srv-02', title: 'Security Matrix Analysis', category: 'Infrastructure', features: ['Global Threat Neutralization', 'Kernel Hardening'], status: 'Sovereign' },
  { id: 'srv-03', title: 'WordPress Sovereign Dev', category: 'Development', features: ['Custom Security Themes', 'Omni-Plugin Architecture'], status: 'Available' },
  { id: 'srv-04', title: 'Backend & Custom Web', category: 'Development', features: ['Sovereign ERP Systems', 'Massive Scale Architecture'], status: 'Enterprise Only' },
  { id: 'srv-05', title: 'Automation & Bot Engines', category: 'Automation', features: ['Multi-Platform Execution', '24/7 Silent Sovereignty'], status: 'Sovereign' },
  { id: 'srv-06', title: 'VPS Tuning & Optimization', category: 'Infrastructure', features: ['Zero-Latency Kernels', 'Max Throughput Saturation'], status: 'Absolute' },
  { id: 'srv-07', title: 'Omni Payment Gateway', category: 'Economy', features: ['Encrypted Multi-Currency Bridge', 'Zero-Trace Financial Flow'], status: 'Exclusive' },
  { id: 'srv-08', title: 'Gaming Server Hub', category: 'Special', features: ['Resilient RP/MMORPG Nodes', 'DDoS Annihilation Grid'], status: 'Available' },
  { id: 'srv-09', title: 'Graphic & Design Ops', category: 'Design', features: ['Authority Aesthetics', 'Strategic Platform Content'], status: 'Available' },
  { id: 'srv-10', title: 'Sovereign Domain Registry', category: 'Special', features: ['Autonomous Registration', 'Privacy Shield v2.0'], status: 'Sovereign' },
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-CORE-BREACH',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "BREACH OF PROFESSIONAL INTEGRITY: ตรวจพบพฤติกรรมจงใจละทิ้งหน้าที่รับผิดชอบเพื่อผลประโยชน์ส่วนตัว ระบบสั่งกักบริเวณทางดิจิทัล 100%",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Sovereign Hub', icon: <Landmark className="w-5 h-5" /> },
  { id: 'services', label: 'Ecosystem Solutions', icon: <Rocket className="w-5 h-5" /> },
  { id: 'infrastructure', label: 'Technical Core', icon: <Server className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Spectral Sharingan', icon: <Flame className="w-5 h-5 text-red-500" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5 text-emerald-500" /> },
  { id: 'social_gravity', label: 'Social Matrix', icon: <Share2 className="w-5 h-5 text-purple-500" /> },
  { id: 'enforcement', label: 'Command Logic', icon: <Shield className="w-5 h-5 text-blue-500" /> },
  { id: 'targets', label: 'Omni Tracker', icon: <Users className="w-5 h-5 text-yellow-500" /> },
  { id: 'command', label: 'Master Core', icon: <Terminal className="w-5 h-5" /> },
];
