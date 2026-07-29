import { motion } from 'framer-motion';
import { Target, Globe, Shield, Award, CheckCircle2, Users, Building2, Briefcase } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

// Safe core values using available icons
const safeCoreValues = [
  { name: "Transparency", icon: CheckCircle2 },
  { name: "Professionalism", icon: Award },
  { name: "Long-Term Thinking", icon: Globe },
  { name: "Strategic Partnerships", icon: Users },
  { name: "Responsible Growth", icon: Building2 },
  { name: "Client-First Approach", icon: Shield }
];

const whoWeServe = [
  { text: "NRIs in USA", flag: "🇺🇸" },
  { text: "NRIs in Canada", flag: "🇨🇦" },
  { text: "NRIs in United Kingdom", flag: "🇬🇧" },
  { text: "NRIs in Australia", flag: "🇦🇺" },
  { text: "NRIs in New Zealand", flag: "🇳🇿" },
  { text: "Global Gujarati Investors", flag: "🌍" },
  { text: "Business Owners", flag: "👨‍💼" },
  { text: "Entrepreneurs", flag: "📈" },
  { text: "Family Offices", flag: "🏢" },
  { text: "Professionals", flag: "💼" },
  { text: "Investors", flag: "🏦" }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
  return (
    <ScrollReveal>
<section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
            ABOUT ORION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Connecting Continents. Building Wealth.
          </h2>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-blue-50/50 border border-blue-100 shadow-sm space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block">OUR VISION</span>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              To connect investors, businesses, and infrastructure across North America and India while helping families build sustainable, long-term wealth through disciplined investing.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-emerald-50/50 border border-emerald-100 shadow-sm space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block">OUR MISSION</span>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              To become a trusted cross-border investment platform that supports global investors through education, professional guidance, business opportunities, and carefully evaluated property opportunities.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {safeCoreValues.map((val, idx) => (
              <motion.div 
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  <val.icon className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs uppercase text-slate-900">{val.name}</h5>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10 text-center mb-10">
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase block mb-3">
              WHO WE SERVE
            </span>
            <h3 className="text-3xl font-bold text-white">
              Orion Infrastructure proudly supports:
            </h3>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            {whoWeServe.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold"
              >
                <span>{item.flag}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
</ScrollReveal>
  );
}
