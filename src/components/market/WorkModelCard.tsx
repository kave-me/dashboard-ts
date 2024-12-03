import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendsData } from '@/types/market';

interface WorkModelCardProps {
  data: TrendsData[];
}

export function WorkModelCard({ data }: WorkModelCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Model Evolution</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Remote work continues to dominate the freelance landscape, with hybrid models maintaining a significant presence. 
          Traditional on-site work is declining but remains relevant for specific industries.
        </p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="remote" 
                stackId="1" 
                stroke="#8884d8" 
                fill="#8884d8" 
                name="Remote" 
              />
              <Area 
                type="monotone" 
                dataKey="hybrid" 
                stackId="1" 
                stroke="#82ca9d" 
                fill="#82ca9d" 
                name="Hybrid" 
              />
              <Area 
                type="monotone" 
                dataKey="onsite" 
                stackId="1" 
                stroke="#ffc658" 
                fill="#ffc658" 
                name="On-site" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 