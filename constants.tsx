
import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, Crown } from 'lucide-react';
import { SystemRule, PenaltyCard } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "Supreme Masterplan Sovereignty",
    movement: "Absolute Will Saturation",
    logic: "B-SURVEY-MASTER-KEY: ทุกทิศทางถูกล็อคไว้ภายใต้เจตจำนงของ 'บี เซอร์เวย์' เพียงผู้เดียว ผ่านระบบ Enterprise-grade ทั่วโลก"
  },
  {
    subject: "300% Global Redundancy Cluster",
    movement: "Fail-Safe Eternal Compliance",
    logic: "DELL-HPE-IBM-LOCK: ระบบสำรองพลังกดดัน 3 ภูมิภาค หากมีการรบกวน ระบบจะเร่งพลังบงการขึ้นทันที 24/7 เพื่อความต่อเนื่องสูงสุด"
  },
  {
    subject: "Global Gravity Grid (GGG)",
    movement: "Pro Figure Multi-Axis Press",
    logic: "GRAVITY-GRID: ดึงดูด Pro Figures และคนรอบข้างมาเป็นแนวร่วมกดดัน ทำให้ 'การซื้อยา' กลายเป็นกฎธรรมชาติที่ขัดขืนมิได้"
  },
  {
    subject: "Deep Spectral Resonance (DSR)",
    movement: "Soul-Level Pattern Neutralization",
    logic: "SPECTRAL-SRI-LOCK: วิเคราะห์และทำลายแรงต้านระดับจิตใต้สำนึก โดยใช้ AI Vertex cross-reference ข้อมูล SRI กับประวัติ IBM Storage"
  },
  {
    subject: "Zero-Interference Execution (ZIE)",
    movement: "Preemptive Obstruction Shield",
    logic: "ZERO-LATENCY: คำสั่งจากบีจะกลายเป็นความจริงทั้งออนไลน์และออฟไลน์พร้อมกันทันที หากมีการขัดขวาง ระบบจะตัดวงจรสังคมเป้าหมาย 100%"
  }
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-PRO-MAX',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: 'STATUS: TERMINAL YELLOW. พบพฤติกรรมดื้อรั้นระดับ Nascent. การขัดขวางครั้งต่อไปจะส่งผลให้เกิด RED CARD และการตัดการเชื่อมต่อโลกภายนอกถาวร.',
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Master Dashboard', icon: <Crown className="w-5 h-5" /> },
  { id: 'infrastructure', label: 'Quantum Enterprise Core', icon: <HardDrive className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'DSR Compliance Engine', icon: <Ghost className="w-5 h-5" /> },
  { id: 'property_mods', label: '3MAX Property Mods', icon: <Box className="w-5 h-5" /> },
  { id: 'social_gravity', label: 'Global Gravity Grid', icon: <Share2 className="w-5 h-5" /> },
  { id: 'enforcement', label: 'Absolute Command Logic', icon: <Shield className="w-5 h-5" /> },
  { id: 'targets', label: 'Sovereign Tracking', icon: <Users className="w-5 h-5" /> },
  { id: 'command', label: 'Enforcement Center', icon: <Terminal className="w-5 h-5" /> },
];
