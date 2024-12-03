import { useState, useEffect } from 'react';
import { MarketData, TrendsData, DemandData } from '@/types/market';

// Fallback data in case API fails
const fallbackData = {
  marketGrowth: [
    { year: '2019', value: 2.1, platforms: 15 },
    { year: '2020', value: 2.9, platforms: 22 },
    { year: '2021', value: 3.4, platforms: 28 },
    { year: '2022', value: 3.9, platforms: 35 },
    { year: '2023', value: 4.5, platforms: 42 }
  ],
  marketTrends: [
    { year: '2019', remote: 35, hybrid: 15, onsite: 50 },
    { year: '2020', remote: 75, hybrid: 15, onsite: 10 },
    { year: '2021', remote: 65, hybrid: 25, onsite: 10 },
    { year: '2022', remote: 60, hybrid: 30, onsite: 10 },
    { year: '2023', remote: 55, hybrid: 35, onsite: 10 }
  ],
  industryDemand: [
    { category: 'Technology', demand: 85, growth: 12 },
    { category: 'Design', demand: 75, growth: 8 },
    { category: 'Writing', demand: 65, growth: 5 },
    { category: 'Marketing', demand: 70, growth: 10 },
    { category: 'Healthcare', demand: 60, growth: 15 }
  ]
};

interface MarketDataResponse {
  marketGrowth: MarketData[];
  marketTrends: TrendsData[];
  industryDemand: DemandData[];
  isLoading: boolean;
  error: Error | null;
}

export function useMarketData(): MarketDataResponse {
  const [marketGrowth, setMarketGrowth] = useState<MarketData[]>(fallbackData.marketGrowth);
  const [marketTrends, setMarketTrends] = useState<TrendsData[]>(fallbackData.marketTrends);
  const [industryDemand, setIndustryDemand] = useState<DemandData[]>(fallbackData.industryDemand);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // For now, we'll use the fallback data instead of failing API calls
        setMarketGrowth(fallbackData.marketGrowth);
        setMarketTrends(fallbackData.marketTrends);
        setIndustryDemand(fallbackData.industryDemand);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
        // Use fallback data even when there's an error
        setMarketGrowth(fallbackData.marketGrowth);
        setMarketTrends(fallbackData.marketTrends);
        setIndustryDemand(fallbackData.industryDemand);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { marketGrowth, marketTrends, industryDemand, isLoading, error };
} 