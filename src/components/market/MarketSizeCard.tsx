import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MarketData } from '@/types/market';

interface MarketSizeCardProps {
  data: MarketData[];
}

export function MarketSizeCard({ data }: MarketSizeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Size & Platform Evolution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-800">
            The freelance market has experienced consistent growth, with a significant spike in 2020 due to the global shift in work patterns. 
            The number of freelance platforms has grown proportionally, indicating a maturing ecosystem.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8884d8" 
                  name="Market Size (USD Trillion)" 
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="platforms" 
                  stroke="#82ca9d" 
                  name="Major Platforms" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 