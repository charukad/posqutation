"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, Send, CheckCircle2 } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Chocolate Cake", price: 1500, emoji: "🎂" },
  { id: 2, name: "Butter Croissant", price: 350, emoji: "🥐" },
  { id: 3, name: "Sourdough Bread", price: 600, emoji: "🍞" },
  { id: 4, name: "Glazed Donut", price: 250, emoji: "🍩" },
  { id: 5, name: "Cappuccino", price: 450, emoji: "☕" },
  { id: 6, name: "Fish Bun", price: 150, emoji: "🐟" },
];

export function POSDemo() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [billSent, setBillSent] = useState(false);
  const [email, setEmail] = useState("");

  const addToCart = (id: number) => {
    if (isCheckingOut) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQ = item.quantity + delta;
          return newQ > 0 ? { ...item, quantity: newQ } : item;
        }
        return item;
      })
    );
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleSendBill = (e: React.FormEvent) => {
    e.preventDefault();
    setBillSent(true);
    setTimeout(() => {
      // Reset
      setCart([]);
      setIsCheckingOut(false);
      setBillSent(false);
      setEmail("");
    }, 2500);
  };

  const total = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <section id="pos-demo" className="min-h-screen flex items-center justify-center border-t border-white/5 py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="text-gradient">POS Demo</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Experience how easy it is to process sales and instantly send E-Bills to your customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Products Grid */}
          <div className="lg:col-span-2 glass-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Menu Items
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {PRODUCTS.map((product) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={product.id}
                  onClick={() => addToCart(product.id)}
                  disabled={isCheckingOut}
                  className={`bg-surface hover:bg-surface-hover border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-colors h-32 ${isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="text-3xl mb-2">{product.emoji}</span>
                  <span className="font-medium text-sm">{product.name}</span>
                  <span className="text-brand-light text-sm mt-1">LKR {product.price}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="glass-card rounded-3xl p-6 flex flex-col h-[500px] overflow-hidden relative">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <ShoppingCart className="text-brand" /> Current Order
            </h3>
            
            <AnimatePresence mode="wait">
              {!isCheckingOut ? (
                <motion.div 
                  key="cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-foreground-muted text-center mt-10">Cart is empty.</div>
                    ) : (
                      cart.map((item) => {
                        const product = PRODUCTS.find((p) => p.id === item.id)!;
                        return (
                          <div key={item.id} className="flex items-center justify-between bg-surface/50 rounded-xl p-3 border border-white/5">
                            <div className="flex-1">
                              <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                              <p className="text-brand-light text-xs">LKR {product.price}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 bg-background-dark rounded-lg border border-white/5 px-1 py-0.5">
                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-brand transition-colors"><Minus className="w-3 h-3" /></button>
                                <span className="text-xs w-4 text-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-brand transition-colors"><Plus className="w-3 h-3" /></button>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="text-foreground-muted hover:text-red-400 transition-colors p-1">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-foreground-muted">Total</span>
                      <span className="text-2xl font-bold text-gradient">LKR {total.toLocaleString()}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={cart.length === 0}
                      onClick={handleCheckout}
                    >
                      Checkout
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="checkout"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col h-full justify-center"
                >
                  {billSent ? (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">E-Bill Sent!</h4>
                      <p className="text-foreground-muted text-sm">Receipt sent successfully.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSendBill} className="space-y-4">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gradient mb-1">LKR {total.toLocaleString()}</h4>
                        <p className="text-foreground-muted text-sm">Payment Received</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground-muted mb-2">Send Digital Receipt (E-Bill)</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="customer@email.com" 
                          className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors text-sm"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setIsCheckingOut(false)} className="flex-1 py-3 rounded-xl glass hover:bg-white/5 transition-colors text-sm font-semibold">
                          Skip
                        </button>
                        <button type="submit" className="flex-[2] py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-colors flex items-center justify-center gap-2 text-sm">
                          Send E-Bill <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
