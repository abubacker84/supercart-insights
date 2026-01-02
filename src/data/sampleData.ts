// Chennai-based sample data for Food Bazar supermarket analysis

export interface Customer {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  phone: string;
  location: string;
  totalSpent: number;
  visitCount: number;
  lastVisit: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  unitsSold: number;
}

export interface Transaction {
  id: string;
  date: string;
  customerId: string;
  customerName: string;
  items: { productId: string; productName: string; quantity: number; price: number }[];
  paymentMethod: 'Cash' | 'Card' | 'UPI';
  total: number;
}

const chennaiLocations = [
  'T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery', 'Tambaram',
  'Porur', 'Mylapore', 'Nungambakkam', 'Egmore', 'Guindy',
  'Vadapalani', 'Kodambakkam', 'Chromepet', 'Ashok Nagar', 'Besant Nagar'
];

const maleNames = [
  'Rajesh Kumar', 'Suresh Babu', 'Venkatesh R', 'Arun Prasad', 'Karthik S',
  'Srinivas M', 'Ramesh Kumar', 'Vijay Anand', 'Prakash R', 'Mohan S',
  'Ganesh Kumar', 'Anand V', 'Senthil Kumar', 'Bala Murugan', 'Hari Krishnan'
];

const femaleNames = [
  'Lakshmi Devi', 'Priya Sharma', 'Kavitha R', 'Deepa S', 'Revathi M',
  'Sudha Rani', 'Meena Kumari', 'Anitha V', 'Saranya K', 'Divya Lakshmi',
  'Gayathri S', 'Nithya R', 'Shanthi M', 'Padma Priya', 'Uma Devi'
];

export const customers: Customer[] = [
  ...maleNames.map((name, i) => ({
    id: `C${String(i + 1).padStart(3, '0')}`,
    name,
    age: 25 + Math.floor(Math.random() * 35),
    gender: 'Male' as const,
    phone: `+91 ${9800000000 + Math.floor(Math.random() * 100000000)}`,
    location: chennaiLocations[i % chennaiLocations.length],
    totalSpent: 5000 + Math.floor(Math.random() * 45000),
    visitCount: 5 + Math.floor(Math.random() * 25),
    lastVisit: `2026-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
  })),
  ...femaleNames.map((name, i) => ({
    id: `C${String(i + 16).padStart(3, '0')}`,
    name,
    age: 25 + Math.floor(Math.random() * 35),
    gender: 'Female' as const,
    phone: `+91 ${9800000000 + Math.floor(Math.random() * 100000000)}`,
    location: chennaiLocations[(i + 5) % chennaiLocations.length],
    totalSpent: 5000 + Math.floor(Math.random() * 45000),
    visitCount: 5 + Math.floor(Math.random() * 25),
    lastVisit: `2026-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
  }))
];

export const products: Product[] = [
  // Groceries
  { id: 'P001', name: 'Basmati Rice (5kg)', category: 'Groceries', price: 450, stock: 120, unitsSold: 890 },
  { id: 'P002', name: 'Toor Dal (1kg)', category: 'Groceries', price: 180, stock: 85, unitsSold: 650 },
  { id: 'P003', name: 'Wheat Flour (5kg)', category: 'Groceries', price: 280, stock: 95, unitsSold: 720 },
  { id: 'P004', name: 'Sugar (1kg)', category: 'Groceries', price: 55, stock: 150, unitsSold: 980 },
  { id: 'P005', name: 'Cooking Oil (1L)', category: 'Groceries', price: 185, stock: 110, unitsSold: 850 },
  { id: 'P006', name: 'Salt (1kg)', category: 'Groceries', price: 25, stock: 200, unitsSold: 600 },
  { id: 'P007', name: 'Turmeric Powder (200g)', category: 'Groceries', price: 65, stock: 140, unitsSold: 520 },
  { id: 'P008', name: 'Red Chilli Powder (200g)', category: 'Groceries', price: 85, stock: 130, unitsSold: 480 },
  
  // Dairy
  { id: 'P009', name: 'Fresh Milk (1L)', category: 'Dairy', price: 60, stock: 80, unitsSold: 1200 },
  { id: 'P010', name: 'Curd (500g)', category: 'Dairy', price: 35, stock: 60, unitsSold: 950 },
  { id: 'P011', name: 'Paneer (200g)', category: 'Dairy', price: 90, stock: 45, unitsSold: 620 },
  { id: 'P012', name: 'Butter (100g)', category: 'Dairy', price: 55, stock: 70, unitsSold: 480 },
  { id: 'P013', name: 'Cheese Slices (10pcs)', category: 'Dairy', price: 120, stock: 40, unitsSold: 320 },
  
  // Beverages
  { id: 'P014', name: 'Tea Powder (500g)', category: 'Beverages', price: 220, stock: 90, unitsSold: 750 },
  { id: 'P015', name: 'Coffee Powder (200g)', category: 'Beverages', price: 180, stock: 75, unitsSold: 580 },
  { id: 'P016', name: 'Soft Drink (2L)', category: 'Beverages', price: 95, stock: 100, unitsSold: 420 },
  { id: 'P017', name: 'Fruit Juice (1L)', category: 'Beverages', price: 120, stock: 65, unitsSold: 380 },
  { id: 'P018', name: 'Mineral Water (1L)', category: 'Beverages', price: 20, stock: 300, unitsSold: 890 },
  
  // Snacks
  { id: 'P019', name: 'Potato Chips (200g)', category: 'Snacks', price: 50, stock: 120, unitsSold: 680 },
  { id: 'P020', name: 'Biscuits (300g)', category: 'Snacks', price: 45, stock: 150, unitsSold: 820 },
  { id: 'P021', name: 'Namkeen Mix (400g)', category: 'Snacks', price: 85, stock: 80, unitsSold: 450 },
  { id: 'P022', name: 'Chocolate Bar', category: 'Snacks', price: 40, stock: 200, unitsSold: 920 },
  { id: 'P023', name: 'Murukku (250g)', category: 'Snacks', price: 65, stock: 90, unitsSold: 380 },
  
  // Personal Care
  { id: 'P024', name: 'Soap (3 pack)', category: 'Personal Care', price: 120, stock: 100, unitsSold: 560 },
  { id: 'P025', name: 'Shampoo (200ml)', category: 'Personal Care', price: 180, stock: 70, unitsSold: 420 },
  { id: 'P026', name: 'Toothpaste (150g)', category: 'Personal Care', price: 95, stock: 120, unitsSold: 680 },
  { id: 'P027', name: 'Hair Oil (200ml)', category: 'Personal Care', price: 145, stock: 85, unitsSold: 390 },
  { id: 'P028', name: 'Face Wash (100ml)', category: 'Personal Care', price: 165, stock: 55, unitsSold: 280 },
  
  // Household
  { id: 'P029', name: 'Detergent (1kg)', category: 'Household', price: 220, stock: 80, unitsSold: 520 },
  { id: 'P030', name: 'Dish Wash (500ml)', category: 'Household', price: 85, stock: 95, unitsSold: 480 },
  { id: 'P031', name: 'Floor Cleaner (1L)', category: 'Household', price: 145, stock: 60, unitsSold: 320 },
  { id: 'P032', name: 'Toilet Cleaner (500ml)', category: 'Household', price: 95, stock: 75, unitsSold: 380 },
  { id: 'P033', name: 'Garbage Bags (30pcs)', category: 'Household', price: 65, stock: 110, unitsSold: 290 },
];

// Generate transactions for 2026
const generateTransactions = (): Transaction[] => {
  const transactions: Transaction[] = [];
  const paymentMethods: ('Cash' | 'Card' | 'UPI')[] = ['Cash', 'Card', 'UPI'];
  
  for (let i = 0; i < 200; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const numItems = 1 + Math.floor(Math.random() * 5);
    const items: Transaction['items'] = [];
    
    for (let j = 0; j < numItems; j++) {
      const product = products[Math.floor(Math.random() * products.length)];
      const quantity = 1 + Math.floor(Math.random() * 3);
      items.push({
        productId: product.id,
        productName: product.name,
        quantity,
        price: product.price
      });
    }
    
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    
    transactions.push({
      id: `T${String(i + 1).padStart(4, '0')}`,
      date: `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      customerId: customer.id,
      customerName: customer.name,
      items,
      paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    });
  }
  
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const transactions = generateTransactions();

// Analytics helpers
export const getTotalRevenue = () => transactions.reduce((sum, t) => sum + t.total, 0);
export const getTotalCustomers = () => customers.length;
export const getTotalProducts = () => products.length;
export const getTotalTransactions = () => transactions.length;

export const getTopProducts = (limit = 5) => {
  return [...products].sort((a, b) => b.unitsSold - a.unitsSold).slice(0, limit);
};

export const getLowStockProducts = (threshold = 50) => {
  return products.filter(p => p.stock < threshold);
};

export const getRecentTransactions = (limit = 5) => {
  return transactions.slice(0, limit);
};

export const getMonthlyRevenue = () => {
  const monthly: { month: string; revenue: number }[] = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  months.forEach((month, index) => {
    const monthNum = index + 1;
    const revenue = transactions
      .filter(t => parseInt(t.date.split('-')[1]) === monthNum)
      .reduce((sum, t) => sum + t.total, 0);
    monthly.push({ month, revenue });
  });
  
  return monthly;
};

export const getCategoryWiseSales = () => {
  const categories: Record<string, number> = {};
  
  transactions.forEach(t => {
    t.items.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (product) {
        categories[product.category] = (categories[product.category] || 0) + item.price * item.quantity;
      }
    });
  });
  
  return Object.entries(categories).map(([name, value]) => ({ name, value }));
};

export const getPaymentMethodDistribution = () => {
  const methods: Record<string, number> = { Cash: 0, Card: 0, UPI: 0 };
  transactions.forEach(t => {
    methods[t.paymentMethod]++;
  });
  return Object.entries(methods).map(([name, value]) => ({ name, value }));
};

export const getCustomersByLocation = () => {
  const locations: Record<string, number> = {};
  customers.forEach(c => {
    locations[c.location] = (locations[c.location] || 0) + 1;
  });
  return Object.entries(locations).map(([name, value]) => ({ name, value }));
};
