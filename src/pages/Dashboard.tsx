import { MainLayout } from '@/components/layout/MainLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { TopProducts } from '@/components/dashboard/TopProducts';
import { LowStockAlert } from '@/components/dashboard/LowStockAlert';
import {
  getTotalRevenue,
  getTotalCustomers,
  getTotalProducts,
  getTotalTransactions,
} from '@/data/sampleData';
import { IndianRupee, Users, Package, Receipt } from 'lucide-react';

const Dashboard = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <MainLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value={formatCurrency(getTotalRevenue())}
            icon={IndianRupee}
            trend="12% from last month"
            trendUp={true}
            variant="primary"
          />
          <StatCard
            title="Total Customers"
            value={getTotalCustomers().toString()}
            icon={Users}
            trend="8% new customers"
            trendUp={true}
            variant="success"
          />
          <StatCard
            title="Total Products"
            value={getTotalProducts().toString()}
            icon={Package}
            variant="warning"
          />
          <StatCard
            title="Transactions"
            value={getTotalTransactions().toString()}
            icon={Receipt}
            trend="15% increase"
            trendUp={true}
            variant="default"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentTransactions />
          <TopProducts />
        </div>

        {/* Low Stock Alert */}
        <LowStockAlert />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
