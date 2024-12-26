import { ActivityChart } from '@/components/dashboard/activity-chart';
import { OverviewCards } from '@/components/dashboard/overview-cards';

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your business.
        </p>
      </div>
      <OverviewCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ActivityChart />
      </div>
    </div>
  );
}