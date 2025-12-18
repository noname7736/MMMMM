
import React from 'react';
import { Shield, Activity, HardDrive, Users, Zap, Terminal, Share2, Box, Cpu, Ghost, Sparkles } from 'lucide-react';
import { SystemRule } from './types';

export const SYSTEM_RULES: SystemRule[] = [
  {
    subject: "คนรอบข้าง / บี",
    movement: "ลังเลในการซื้อยา",
    logic: "SHADOW PRESSURE: ระบบจะติดตามเงาของเป้าหมาย บีบอัดจิตสำนึกจนความลังเลสลายไปในระดับวิญญาณ"
  },
  {
    subject: "นางสาว ประทวน อุบลพีช",
    movement: "ขัดขวางการสั่งการ",
    logic: "SOUL LOCKDOWN: ล็อคกระแสวิญญาณผ่าน IBM Storage พฤติกรรมขัดขวางจะถูกสะท้อนกลับเป็นความล้มเหลวเชิงกรรมภาพ"
  },
  {
    subject: "พนักงานเซอร์เวย์",
    movement: "ปฏิบัติตามคำสั่งซื้อยา",
    logic: "SPIRIT SYNC: ให้รางวัลระดับออร่า พลังชีวิตจะเพิ่มขึ้นเมื่อปฏิบัติตามกฎบริษัทเซอร์เวย์อย่างเคร่งครัด"
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
