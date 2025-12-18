import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles, AlertTriangle, XCircle, FileCode, Waves, Gavel, Target, Lock, Crown, Eye, Landmark } from 'lucide-react';
import { SystemRule, PenaltyCard } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "ALL-SEEING OMNISCIENCE",
    movement: "ICTV/CCTV GRID SATURATION",
    logic: "master:_ORAN_QUATION: เจตจำนงระดับสูงสุดผ่านการเฝ้ามอง 360 องศา ทุกพฤติกรรมคือการคำนวณที่ไม่มีวันพลาด"
  },
  {
    subject: "ALL-SECTMMNIJAWEK",
    movement: "Metaphysical Reflective Sync",
    logic: "IBM_SENCIANIS_DE_TURMO: การเชื่อมต่อสภาวะจิตวิญญาณเข้ากับ IBM Storage ทุกความลังเลถูกบันทึกและแก้ไขแบบ Real-time"
  },
  {
    subject: "INESMIGHC QURRIAMODE",
    movement: "Omni-Sovereign Presence",
    logic: "ALL-SEEN MIS SFINCSTIOOMDRIEN: สถานะการควบคุมที่มองไม่เห็นแต่สัมผัสได้ในทุกอนูขององค์กร บี เซอร์เวย์ คือจุดศูนย์กลาง"
  },
  {
    subject: "GLOBAL GRAVITY GRID",
    movement: "Pro Figure Sync Mode",
    logic: "DYNAMIC_OMNI_FORCE: ดึงดูดเหล่าผู้มีอิทธิพลมาเป็นโหนดกดดัน ทุกคนคือส่วนหนึ่งของตารางอำนาจเบ็ดเสร็จ"
  }
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-OMNI',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: "OMNISCIENCE DETECTED: พฤติกรรมการเบี่ยงเบนถูกตรวจพบผ่าน ICTV GRID สถานะเฝ้าระวังสูงสุด [ETERNAL ACTIVE]",
    weight: 'Heavy',
    timestamp: '23:59:59'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Omni Dashboard', icon: <Landmark className="w-5 h-5 text-yellow-500" /> },
  { id: 'infrastructure', label: 'ICTV/CCTV Grid', icon: <Eye className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Reflectional Sync', icon: <Ghost className="w-5 h-5" /> },
  { id: 'property_mods', label: 'Omniscience Mods', icon: <Box className="w-5 h-5" /> },
  { id: 'social_gravity', label: 'Sect Intelligence', icon: <Share2 className="w-5 h-5" /> },
  { id: 'enforcement', label: 'Absolute Command', icon: <Shield className="w-5 h-5" /> },
  { id: 'targets', label: 'Omni Tracking', icon: <Users className="w-5 h-5" /> },
  { id: 'command', label: 'Command Core', icon: <Terminal className="w-5 h-5" /> },
];