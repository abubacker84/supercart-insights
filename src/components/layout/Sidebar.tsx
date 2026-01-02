import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Package,
  Receipt,
  BarChart3,
  ShoppingCart
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/customers', label: 'Customers', icon: Users },
  { path: '/products', label: 'Products', icon: Package },
  { path: '/transactions', label: 'Transactions', icon: Receipt },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <ShoppingCart className="h-8 w-8 text-sidebar-primary" />
        <div>
          <h1 className="text-lg font-bold text-sidebar-foreground">Food Bazar</h1>
          <p className="text-xs text-muted-foreground">Chennai</p>
        </div>
      </div>
      
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="rounded-lg bg-sidebar-accent p-4">
          <p className="text-xs text-muted-foreground">Supermarket Analysis</p>
          <p className="text-sm font-medium text-sidebar-foreground">BSc Computer Science</p>
          <p className="text-xs text-muted-foreground mt-1">2026 Data</p>
        </div>
      </div>
    </aside>
  );
};
