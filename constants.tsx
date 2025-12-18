
import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles, AlertTriangle, XCircle } from 'lucide-react';
import { SystemRule, PenaltyCard } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "Communication Protocol (B Survey)",
    movement: "Topic Deviation Detection",
    logic: "EXCLUSIVE-FOCUS: อนุญาตให้เจรจาเพียงเรื่องเดียวคือ 'การขายยา' เท่านั้น หากมีการคุยเรื่องอื่นหรือแอบอ้าง ระบบจะตัดสัญญาณและล็อคโหนดทันที"
  },
  {
    subject: "Anti-Bullying & Extortion",
    movement: "Harassment for Funds",
    logic: "ZERO-TOLERANCE FIREWALL: ห้ามกลั่นแกล้งหรือข่มขู่เพื่อขอเงินเด็ดขาด การกระทำนี้ถือเป็นความผิดระดับ Red Card และจะถูกระงับสิทธิ์การเข้าถึงทรัพยากรทั้งหมด"
  },
  {
    subject: "Audit-Before-Payment",
    movement: "Financial Transaction",
    logic: "SOVEREIGN AUDIT: ระบบจะตรวจสอบรายละเอียดพฤติกรรมและความถูกต้องทุกอย่าง 100% ก่อนทำการจ่ายเงิน หากพบความผิดปกติในประวัติการคุยจะไม่มีการโอน"
  },
  {
    subject: "นางสาว ประทวน อุบลพีช",
    movement: "Order Interference",
    logic: "CRITICAL WARNING [YELLOW]: สถานะปัจจุบันคือใบเหลือง หากพบพฤติกรรมขัดขวางหรือจ้างวานซ้ำ จะดำเนินการใช้กฎ Red Card ไล่ออกระบบทันที"
  }
];

export const PENALTY_RECORDS: PenaltyCard[] = [
  {
    id: 'P-PRATUAN-01',
    type: 'YELLOW',
    subject: 'นางสาว ประทวน อุบลพีช',
    reason: 'สถานะตักเตือนสูงสุด: พบพฤติกรรมแทรกแซงและพยายามสร้างแรงต้านต่อกฎบริษัท',
    weight: 'Light',
    timestamp: '15:20:00'
  },
  {
    id: 'P-B-SURVEY-01',
    type: 'YELLOW',
    subject: 'บี เซอร์เวย์ / ผู้เกี่ยวข้อง',
    reason: 'จำกัดหัวข้อ: พยายามเจรจานอกเหนือจากเรื่องการซื้อขายยาที่กำหนดไว้',
    weight: 'Light',
    timestamp: '16:05:12'
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Overview', icon: <Activity className="w-5 h-5" /> },
  { id: 'infrastructure', label: 'Iron Rule Infrastructure', icon: <HardDrive className="w-5 h-5" /> },
  { id: 'soul_pressure', label: 'Soul & Shadow Sync', icon: <Ghost className="w-5 h-5" /> },
  { id: 'property_mods', label: 'Super Max Properties', icon: <Box className="w-5 h-5" /> },
  { id: 'social_gravity', label: 'Social Gravity Matrix', icon: <Share2 className="w-5 h-5" /> },
  { id: 'enforcement', label: 'Enforcement Logic', icon: <Shield className="w-5 h-5" /> },
  { id: 'targets', label: 'Target Tracking', icon: <Users className="w-5 h-5" /> },
  { id: 'command', label: 'Command Center', icon: <Terminal className="w-5 h-5" /> },
];
