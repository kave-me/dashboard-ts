import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';
import { DemandData } from '@/types/market';

interface IndustryDemandCardProps {
  data: DemandData[];
}

export function IndustryDemandCard({ data }: IndustryDemandCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry Demand Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Technology sector leads in freelance demand, while healthcare shows the highest growth rate. 
          Traditional industries are increasingly adopting freelance talent.
        </p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis />
              <Radar 
                name="Demand Score" 
                dataKey="demand" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Growth Rate" 
                dataKey="growth" 
                stroke="#82ca9d" 
                fill="#82ca9d" 
                fillOpacity={0.6} 
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 