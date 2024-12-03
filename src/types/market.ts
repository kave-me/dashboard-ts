export interface MarketData {
  year: string;
  value: number;
  platforms: number;
}

export interface TrendsData {
  year: string;
  remote: number;
  hybrid: number;
  onsite: number;
}

export interface DemandData {
  category: string;
  demand: number;
  growth: number;
} 