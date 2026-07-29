import { motion } from 'framer-motion';
import { CheckCircle2, Shield } from 'lucide-react';
import { Link } from 'wouter';

const reasons = [
  "Cross-border experience",
  "NRI-focused guidance",
  "Residential & commercial opportunities",
  "Professional partner ecosystem",
  "Long-term planning approach",
  "Transparent communication",
  "Structured investment process",
  "End-to-end coordination"
];

export function TrustSignals() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Why Investors Choose Orion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
              TRUST & RELIABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
              Why Investors Choose Orion
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="font-bold text-sm text-slate-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Promise (The Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 md:p-14 rounded-3xl bg-blue-600 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase block mb-4">
                OUR PROMISE
              </span>
              <h3 className="text-2xl font-bold mb-6 leading-relaxed">
                "We believe wealth is built through patience, planning, disciplined investing, and diversification."
              </h3>
              <p className="text-blue-100 font-medium leading-relaxed mb-10">
                Our goal is to help clients make informed decisions by connecting them with opportunities and professional resources that support their long-term financial objectives.
              </p>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 hover:scale-105 transition-all"
              >
                <span>Schedule a Consultation</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
