import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

const variantStyles = {
  default: 'bg-secondary text-secondary-foreground',
  primary: 'bg-primary/10 text-primary',
  success: 'bg-green-500/10 text-green-600',
  warning: 'bg-orange-500/10 text-orange-600',
};

export const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendUp = true,
  variant = 'default' 
}: StatCardProps) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className={cn(
                'mt-1 text-xs font-medium',
                trendUp ? 'text-green-600' : 'text-destructive'
              )}>
                {trendUp ? '↑' : '↓'} {trend}
              </p>
            )}
          </div>
          <div className={cn('rounded-full p-3', variantStyles[variant])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
