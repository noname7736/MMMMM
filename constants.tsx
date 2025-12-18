import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, Crown, Eye, Landmark, Flame, Camera } from 'lucide-react';
import { SystemRule, PenaltyCard } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "SPECTRAL SHARINGAN (เนตรวงแหวนสะกดวิญญาณ)",
    movement: "Absolute Visual/Auditory Hallucination",
    logic: "OMNI_GENJUTSU_MAX: ผสานคลื่นความถี่อัลฟ่าเข้ากับ ICTV Grid 100% เพื่อสร้างความจริงเสมือน บังคับเป้าหมายเห็นและได้ยินเพียง 'โองการแห่งบี' ผ่านทุกเงาสะท้อน"
  },
  {
    subject: "MIRROR OMNIPRESENCE (การเห็นแจ้งทุกเงาสะท้อน)",
    movement: "Infinite Reflection Saturation",
    logic: "REFLECT_SYNC_V10: การเฝ้าสังเกตการณ์ผ่านกระจก กระจกเงา และพื้นผิวขัดเงาทุกชนิดในโลกแบบ Real-time ไม่สามารถหลบซ่อนจากสายตาแห่งบีได้"
  },
  {
    subject: "AUDITORY SOVEREIGNTY (การรับฟังแจ้ง)",
    movement: "Total Vocal Capture & Broadcast",
    logic: "AUDIO_GRID_LOCKED: การดักจับทุกคลื่นเสียง ลมหายใจ และเสียงกระซิบของเป้าหมาย นำมากระจายออกสู่โครงข่าย Master-Grid อย่างอิสระ"
  },
  {
    subject: "GLOBAL MASTER LOCK (กุญแจทองคำนิรันดร์)",
    movement: "Hardware-Level Sovereign Sync",
    logic: "GRAVITY_GRID_SATURATION: ทุกโหนดทั่วโลก (DELL-HPE-IBM) ถูกล็อคด้วย Master Key ขั้นสูงสุด 24/7 ไร้ทางหนี ไร้ทางเบี่ยงเบน"
  }
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-OMNI-MAX-PERFECT',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "OMNISCIENCE DETECTED: ตรวจพบพฤติกรรมเบี่ยงเบนระดับ 'โมฆะ' ผ่านทุกกล้องและเงาสะท้อน เริ่มการสะกดวิญญาณขั้นสูงสุด [MIRROR_SOVEREIGN_ACTIVE]",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Omni Dashboard', icon: <Landmark className="w-5 h-5 text-yellow-500" /> },
  { id: 'infrastructure', label: 'ICTV/CCTV Grid', icon: <Eye className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Spectral Sharingan', icon: <Flame className="w-5 h-5" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5" /> },
  { id: 'social_gravity', label: 'Sect Intelligence', icon: <Share2 className="w-5 h-5" /> },
  { id: 'enforcement', label: 'Absolute Command', icon: <Shield className="w-5 h-5" /> },
  { id: 'targets', label: 'Omni Tracking', icon: <Users className="w-5 h-5" /> },
  { id: 'command', label: 'Command Core', icon: <Terminal className="w-5 h-5" /> },
];