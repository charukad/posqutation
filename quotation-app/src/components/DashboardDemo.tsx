"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp, Users, ShoppingBag, DollarSign, Calendar } from "lucide-react";

const DATA_SETS = {
  today: {
    revenue: [
      { time: "8 AM", revenue: 15000 },
      { time: "10 AM", revenue: 42000 },
      { time: "12 PM", revenue: 58000 },
      { time: "2 PM", revenue: 35000 },
      { time: "4 PM", revenue: 65000 },
      { time: "6 PM", revenue: 85000 },
      { time: "8 PM", revenue: 45000 },
    ],
    stats: [
      { label: "Revenue", value: "LKR 58,420", icon: DollarSign, trend: "+12%" },
      { label: "Total Orders", value: "342", icon: ShoppingBag, trend: "+5%" },
      { label: "Customers", value: "145", icon: Users, trend: "+18%" },
      { label: "Avg. Order", value: "LKR 1,180", icon: TrendingUp, trend: "+2%" },
    ]
  },
  week: {
    revenue: [
      { time: "Mon", revenue: 120000 },
      { time: "Tue", revenue: 95000 },
      { time: "Wed", revenue: 110000 },
      { time: "Thu", revenue: 140000 },
      { time: "Fri", revenue: 210000 },
      { time: "Sat", revenue: 280000 },
      { time: "Sun", revenue: 310000 },
    ],
    stats: [
      { label: "Revenue", value: "LKR 1,265,000", icon: DollarSign, trend: "+8%" },
      { label: "Total Orders", value: "2,145", icon: ShoppingBag, trend: "+3%" },
      { label: "Customers", value: "1,245", icon: Users, trend: "+10%" },
      { label: "Avg. Order", value: "LKR 1,120", icon: TrendingUp, trend: "-1%" },
    ]
  }
};

const PRODUCT_DATA = [
  { name: "Chocolate Cake", sold: 124 },
  { name: "Fish Bun", sold: 110 },
  { name: "Bread", sold: 98 },
  { name: "Donuts", sold: 87 },
];

const CATEGORY_DATA = [
  { name: 'Cakes', value: 40 },
  { name: 'Pastries', value: 30 },
  { name: 'Breads', value: 20 },
  { name: 'Beverages', value: 10 },
];
const COLORS = ['#E85D04', '#FFBA08', '#dc2626', '#f59e0b'];

const CUSTOMER_DATA = [
  { day: 'Mon', new: 40, returning: 120 },
  { day: 'Tue', new: 30, returning: 110 },
  { day: 'Wed', new: 45, returning: 115 },
  { day: 'Thu', new: 50, returning: 130 },
  { day: 'Fri', new: 80, returning: 150 },
  { day: 'Sat', new: 120, returning: 180 },
  { day: 'Sun', new: 150, returning: 200 },
];

const PAYMENT_DATA = [
  { name: 'Card', value: 65 },
  { name: 'Cash', value: 20 },
  { name: 'QR/Digital', value: 10 },
  { name: 'Loyalty Points', value: 5 },
];

const TRAFFIC_DATA = [
  { time: '8AM-12PM', visitors: 150 },
  { time: '12PM-4PM', visitors: 300 },
  { time: '4PM-8PM', visitors: 450 },
  { time: '8PM-10PM', visitors: 100 },
];

const WASTE_DATA = [
  { day: 'Mon', items: 12 },
  { day: 'Tue', items: 8 },
  { day: 'Wed', items: 15 },
  { day: 'Thu', items: 5 },
  { day: 'Fri', items: 20 },
  { day: 'Sat', items: 10 },
  { day: 'Sun', items: 4 },
];

export function DashboardDemo() {
  const [timeRange, setTimeRange] = useState<"today" | "week">("today");
  
  const currentData = DATA_SETS[timeRange];

  return (
    <section id="dashboard-demo" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced <span className="text-gradient">Analytics</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl">
              Make data-driven decisions with real-time insights into your bakery's performance.
            </p>
          </div>
          
          <div className="flex bg-surface rounded-lg p-1 border border-white/10 mt-6 md:mt-0">
            <button 
              onClick={() => setTimeRange("today")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === 'today' ? 'bg-brand text-white shadow' : 'text-foreground-muted hover:text-white'}`}
            >
              Today
            </button>
            <button 
              onClick={() => setTimeRange("week")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === 'week' ? 'bg-brand text-white shadow' : 'text-foreground-muted hover:text-white'}`}
            >
              This Week
            </button>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <AnimatePresence mode="wait">
            {currentData.stats.map((stat, i) => (
              <motion.div
                key={`${timeRange}-${stat.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-brand/20 text-brand rounded-lg">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Row 1: Revenue & Top Products */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 mb-6">
          <div className="glass-card rounded-3xl p-6 h-[400px] lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand" /> Revenue Trend
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData.revenue} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E85D04" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#E85D04" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `LKR ${value / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#E85D04' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#E85D04" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-3xl p-6 h-[400px]">
            <h3 className="text-xl font-semibold mb-6">Top Selling Products</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PRODUCT_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="sold" fill="#FFBA08" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2: Customer Growth & Category Breakdown */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 mb-6">
          <div className="glass-card rounded-3xl p-6 h-[350px]">
            <h3 className="text-xl font-semibold mb-6">Sales by Category</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CATEGORY_DATA}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {CATEGORY_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-3xl p-6 h-[350px] lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Customer Growth (New vs Returning)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CUSTOMER_DATA} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="day" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Line type="monotone" dataKey="new" name="New Customers" stroke="#E85D04" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="returning" name="Returning Customers" stroke="#FFBA08" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 3: Hourly Traffic, Waste Tracker, Payment Methods */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          
          <div className="glass-card rounded-3xl p-6 h-[350px]">
            <h3 className="text-xl font-semibold mb-6">Hourly Traffic</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TRAFFIC_DATA} margin={{ top: 5, right: 5, bottom: 25, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="visitors" name="Store Visitors" fill="#E85D04" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-3xl p-6 h-[350px]">
            <h3 className="text-xl font-semibold mb-6">Ingredient Waste</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WASTE_DATA} margin={{ top: 5, right: 5, bottom: 25, left: -20 }}>
                <defs>
                  <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="day" stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Area type="monotone" dataKey="items" name="Spoiled Items" stroke="#dc2626" strokeWidth={3} fillOpacity={1} fill="url(#colorWaste)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-3xl p-6 h-[350px]">
            <h3 className="text-xl font-semibold mb-6">Payment Methods</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PAYMENT_DATA}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  label={({ name, percent }) => `${((percent || 0) * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {PAYMENT_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {PAYMENT_DATA.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-1 text-xs text-foreground-muted">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  {entry.name}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
