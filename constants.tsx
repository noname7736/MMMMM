
import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, Crown, Eye, Landmark, Flame } from 'lucide-react';
import { SystemRule, PenaltyCard } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "SPECTRAL SHARINGAN (เนตรวงแหวนสะกดวิญญาณ)",
    movement: "Absolute Visual/Auditory Hallucination",
    logic: "OMNI_GENJUTSU: ผสานคลื่นความถี่อัลฟ่าเข้ากับ ICTV Grid เพื่อสร้างภาพลวงตาและเสียงแว่วในจิตใต้สำนึกของเป้าหมาย บังคับเห็นและได้ยินเพียง 'เจตจำนงของบี' เท่านั้น"
  },
  {
    subject: "INESMIGHC QURRIAMODE (ภาวะพระเจ้า)",
    movement: "Omni-Sovereign Presence",
    logic: "ALL-SEEN_MIS_SFINCS: สถานะการมองเห็นแจ้งแทงทะลุทุกมิติ บี เซอร์เวย์ คือผู้กุมชะตาและกุญแจสำคัญของความจริงหนึ่งเดียว"
  },
  {
    subject: "ALL-SECTMMNIJAWEK (การเชื่อมต่อวิญญาณ)",
    movement: "Metaphysical Reflective Sync",
    logic: "IBM_SENCIANIS_V10: การดึงข้อมูลความจำระดับควอนตัมจาก IBM Storage มาฉายซ้ำเพื่อสลายแรงต้านทานทางจิตใจ 100%"
  },
  {
    subject: "GLOBAL MASTER LOCK (กุญแจทองคำ)",
    movement: "Eternal Sovereign Sync",
    logic: "GRAVITY_GRID_SATURATION: ทุกโหนดทั่วโลก DELL-HPE-IBM ถูกล็อคด้วย Master Key เพื่อให้การบงการดำเนินไปอย่างไร้รอยต่อ 24/7"
  }
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-OMNI-MAX',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "OMNISCIENCE DETECTED: พฤติกรรมเบี่ยงเบนระดับสูง ถูกตรวจจับโดย ICTV Grid. เริ่มกระบวนการ 'เนตรวงแหวนสะกดวิญญาณ' ขั้นที่ 1 [ETERNAL ACTIVE]",
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
