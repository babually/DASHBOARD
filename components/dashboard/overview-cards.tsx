'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, ShoppingCart, ArrowUpRight } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+15.2%',
    icon: Users,
  },
  {
    title: 'New Orders',
    value: '432',
    change: '+12.5%',
    icon: ShoppingCart,
  },
];

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm text-green-500">
                {stat.change}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}