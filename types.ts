
export interface ServerStatus {
  name: string;
  type: 'Dell PowerEdge' | 'HPE ProLiant' | 'IBM Storage' | 'Bot Cluster' | 'Game Node' | 'Gateway Core' | 'VPS Hypervisor';
  status: 'Online' | 'Warning' | 'Locked' | 'Optimizing' | 'Hyper-Ready' | 'Converged';
  load: number;
  uptime: string;
  specialization?: string;
}

export interface EnforcementLog {
  id: string;
  timestamp: string;
  target: string;
  action: string;
  result: string;
  severity: 'low' | 'medium' | 'high' | 'absolute' | 'super-max' | 'omega' | 'sovereign';
}

export interface SystemRule {
  subject: string;
  movement: string;
  logic: string;
}

export interface PropertyMod {
  id: string;
  name: string;
  type: 'Asset' | 'Social' | 'Structural' | 'Service' | 'Economic' | 'Digital';
  status: 'Deployed' | 'Optimizing' | 'Absolute' | 'Active' | 'Dominated';
  integrity: number;
  description?: string;
}

export interface PenaltyCard {
  id: string;
  type: 'YELLOW' | 'RED' | 'BLACK';
  subject: string;
  reason: string;
  weight: 'Light' | 'Heavy' | 'Absolute' | 'Eternal';
  timestamp: string;
}

export interface TechService {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Development' | 'Automation' | 'Design' | 'Special' | 'Economy' | 'Convergence';
  features: string[];
  status: 'Available' | 'Enterprise Only' | 'Absolute' | 'Exclusive' | 'Sovereign';
  icon?: string;
}
