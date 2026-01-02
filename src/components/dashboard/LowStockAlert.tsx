import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getLowStockProducts } from '@/data/sampleData';

export const LowStockAlert = () => {
  const lowStockProducts = getLowStockProducts(50);

  const getStockBadge = (stock: number) => {
    if (stock < 30) return { label: 'Critical', variant: 'destructive' as const };
    if (stock < 50) return { label: 'Low', variant: 'secondary' as const };
    return { label: 'Normal', variant: 'default' as const };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Low Stock Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {lowStockProducts.length === 0 ? (
          <p className="text-sm text-muted-foreground">All products are well stocked!</p>
        ) : (
          <div className="space-y-3">
            {lowStockProducts.slice(0, 5).map((product) => {
              const stockInfo = getStockBadge(product.stock);
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{product.stock} units</span>
                    <Badge variant={stockInfo.variant}>{stockInfo.label}</Badge>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
