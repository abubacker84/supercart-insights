import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { customers } from '@/data/sampleData';
import { Search, MapPin } from 'lucide-react';
import { format } from 'date-fns';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCustomerTier = (totalSpent: number) => {
    if (totalSpent >= 30000) return { label: 'Platinum', variant: 'default' as const };
    if (totalSpent >= 15000) return { label: 'Gold', variant: 'secondary' as const };
    return { label: 'Silver', variant: 'outline' as const };
  };

  return (
    <MainLayout title="Customers">
      <div className="space-y-6">
        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Customer Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Customers</p>
              <p className="text-2xl font-bold text-foreground">{customers.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Avg. Spend</p>
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Platinum Members</p>
              <p className="text-2xl font-bold text-foreground">
                {customers.filter((c) => c.totalSpent >= 30000).length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Customer Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Visits</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Last Visit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => {
                  const tier = getCustomerTier(customer.totalSpent);
                  return (
                    <TableRow key={customer.id}>
                      <TableCell className="font-mono text-sm">{customer.id}</TableCell>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.age}</TableCell>
                      <TableCell>{customer.gender}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          {customer.location}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{formatCurrency(customer.totalSpent)}</TableCell>
                      <TableCell>{customer.visitCount}</TableCell>
                      <TableCell>
                        <Badge variant={tier.variant}>{tier.label}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {format(new Date(customer.lastVisit), 'dd MMM yyyy')}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Customers;
