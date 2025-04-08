
export type Language = 'fr' | 'dioula' | 'baoule';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  value?: string;
}

export interface RoadmapItemProps {
  year: string;
  title: string;
  description: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'camera';
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

export interface Person {
  id: string;
  nom: string;
  prenoms: string;
  dateNaissance: string;
  lieuNaissance: string;
  genre: string;
  adresse: string;
  photo?: string;
  telephone?: string;
  region: string;
  completed: boolean;
}

export interface DashboardStat {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

export interface RegionData {
  name: string;
  count: number;
  percentage: number;
}
