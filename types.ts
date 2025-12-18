
export interface ServerStatus {
  name: string;
  type: 'Dell PowerEdge' | 'HPE ProLiant' | 'IBM Storage';
  status: 'Online' | 'Warning' | 'Locked';
  load: number;
  uptime: string;
}

export interface EnforcementLog {
  id: string;
  timestamp: string;
  target: string;
  action: string;
  result: string;
  severity: 'low' | 'medium' | 'high' | 'absolute' | 'super-max';
}

export interface SystemRule {
  subject: string;
  movement: string;
  logic: string;
}

export interface PropertyMod {
  id: string;
  name: string;
  type: 'Asset' | 'Social' | 'Structural';
  status: 'Deployed' | 'Optimizing' | 'Absolute';
  integrity: number;
}

export interface PenaltyCard {
  id: string;
  type: 'YELLOW' | 'RED';
  subject: string;
  reason: string;
  weight: 'Light' | 'Heavy';
  timestamp: string;
}
