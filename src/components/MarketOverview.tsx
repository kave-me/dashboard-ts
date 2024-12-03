import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { HandMetal } from 'lucide-react';
import { MarketSizeCard } from './market/MarketSizeCard.tsx';
import { WorkModelCard } from './market/WorkModelCard.tsx';
import { IndustryDemandCard } from './market/IndustryDemandCard.tsx';
import { useMarketData } from '@/hooks/useMarketData';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorAlert } from '@/components/ui/error-alert';
import { MarketData, TrendsData, DemandData } from '@/types/market';

interface MarketOverviewProps {
  marketGrowthData: MarketData[];
  marketTrendsData: TrendsData[];
  industryDemandData: DemandData[];
}

export function MarketOverview({ marketGrowthData, marketTrendsData, industryDemandData }: MarketOverviewProps) {
  const { marketGrowth, marketTrends, industryDemand, isLoading, error } = useMarketData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <div className="grid gap-6 p-4">
      <MarketSizeCard data={marketGrowthData} />
      
      <Alert>
        <HandMetal className="h-4 w-4" />
        <AlertTitle>Heads up, opportunities!</AlertTitle>
        <AlertDescription className="text-muted-foreground text-sm">
          The global freelance market has shown remarkable growth, particularly accelerated by the digital transformation and changing work preferences post-2020. This growth trajectory indicates significant opportunities for both freelancers and businesses in the evolving digital economy.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkModelCard data={marketTrendsData} />
        <IndustryDemandCard data={industryDemandData} />
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Ongoing Relationships vs. One-Time Projects</h2>
        <p className="mb-2">
          <strong>Ongoing Relationships:</strong> These are projects where a client continuously works with the same service provider over an extended period. This could involve multiple smaller projects or continuous service.
        </p>
        <p className="mb-2">
          <strong>One-Time Projects:</strong> These are single, isolated projects with a defined start and end, where the service is provided only once without any future engagements planned.
        </p>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Client Satisfaction Trends</h2>
        <p className="mb-2">
          <strong>Improving Satisfaction:</strong> Clients tend to be more satisfied as they continue to work with the same service provider over time. This trend implies that the longer the relationship, the more satisfied the client becomes.
        </p>
        <p className="mb-2">
          <strong>Why is this Happening?</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Trust and Understanding:</strong> As the relationship matures, the service provider better understands the client's needs and preferences, leading to more tailored and effective service.</li>
          <li><strong>Consistency and Reliability:</strong> Ongoing relationships build trust and reliability, making clients feel more comfortable and valued.</li>
          <li><strong>Efficiency:</strong> With ongoing projects, there is often a smoother workflow since both parties are familiar with each other’s processes, reducing the time and effort needed to start from scratch.</li>
        </ul>
        <p>
          In essence, clients generally experience higher satisfaction when they have long-term engagements with service providers, compared to one-off projects. This trend is likely due to the benefits of trust, understanding, and efficiency that come with ongoing relationships.
        </p>
      </div>
    </div>
  );
}

export default MarketOverview; 