import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getTopProducts } from '@/data/sampleData';

export const TopProducts = () => {
  const topProducts = getTopProducts(5);
  const maxSold = topProducts[0]?.unitsSold || 1;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{product.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.unitsSold} sold</span>
              </div>
              <Progress value={(product.unitsSold / maxSold) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
