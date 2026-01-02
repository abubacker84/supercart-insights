import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRecentTransactions } from '@/data/sampleData';
import { format } from 'date-fns';

const paymentBadgeVariant = {
  Cash: 'secondary',
  Card: 'default',
  UPI: 'outline',
} as const;

export const RecentTransactions = () => {
  const transactions = getRecentTransactions(5);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg border border-border p-4"
            >
              <div className="flex-1">
                <p className="font-medium text-foreground">{transaction.customerName}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(transaction.date), 'dd MMM yyyy')} • {transaction.items.length} items
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={paymentBadgeVariant[transaction.paymentMethod]}>
                  {transaction.paymentMethod}
                </Badge>
                <p className="font-semibold text-foreground">
                  {formatCurrency(transaction.total)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
