import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, Zap, Building2, TrendingUp, Anchor, Cpu } from 'lucide-react';
import { Link } from 'wouter';

const corridors = [
  {
    name: 'GIFT City & SEZ Apex',
    tag: 'GLOBAL FINTECH & COMMERCIAL NODE',
    desc: "India's first operational smart financial city and international SEZ. Pre-leased Grade-A office towers offering sovereign tax holidays, complete dollar repatriation, and exponential corporate demand.",
    stat: '100% Tax Holiday Node',
    icon: Building2,
    color: 'from-blue-500 to-[#007CDC]'
  },
  {
    name: 'Dholera Special Investment Region (SIR)',
    tag: 'SEMICONDUCTOR & SMART MANUFACTURING',
    desc: "India's largest planned industrial greenfield city twice the size of Ahmedabad. Strategically positioned along the Delhi-Mumbai Industrial Corridor with dedicated international cargo airport connectivity.",
    stat: '920 Sq. Km Mega City',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Sanand Automotive & Tech Belt',
    tag: 'AUTO HIVE & INDUSTRIAL WAREHOUSING',
    desc: 'The Detroit of India and leading high-tech engineering hub. Home to mega manufacturing complexes from Tata, Ford, Micron, and global supply chains requiring premium warehousing and logistics parks.',
    stat: '$15B+ Capital Invested',
    icon: Zap,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Ahmedabad Twin-City Metropolitan Apex',
    tag: 'RETAIL, RESIDENTIAL & COMMERCIAL HIVE',
    desc: "Gujarat's commercial engine experiencing rapid infrastructure expansion. SG Highway, Sindhu Bhavan, and Ring Road commercial suites yielding superior rental yields and high asset appreciation.",
    stat: 'Top NRI Capital Dest.',
    icon: TrendingUp,
    color: 'from-[#007CDC] to-blue-700'
  },
  {
    name: 'Gandhinagar Administrative & IT Gateway',
    tag: 'PLANNED SOVEREIGN CAPITAL & IT HIVE',
    desc: "The State's meticulously master-planned capital hosting expansive IT special economic zones, government secretariats, institutional campuses, and thriving high-income residential boulevards.",
    stat: 'Zero Traffic & Green CIty',
    icon: ShieldCheck,
    color: 'from-teal-500 to-emerald-600'
  },
  {
    name: 'Kandla & Mundra Port Maritime Hub',
    tag: 'INDIA’S MAJOR MARITIME & LOGISTICS GATEWAY',
    desc: 'Handling over 25% of India’s overall cargo trade, this coastal industrial mega-corridor offers high-yield maritime warehousing, transport logistics yards, and industrial infrastructure suites.',
    stat: '25% of India Cargo Trade',
    icon: Anchor,
    color: 'from-slate-700 to-[#0A1128]'
  }
];

function NodeCard({ item, index }: { item: typeof corridors[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-white p-8 rounded-3xl h-full border border-slate-200 hover:border-blue-400/80 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(0,124,220,0.18)] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
      >
        <div style={{ transform: "translateZ(30px)" }}>
          {/* Top Badge & Icon */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#007CDC] group-hover:bg-[#007CDC] group-hover:text-white transition-all shadow-xs">
              <item.icon className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A1128] font-mono font-extrabold text-[11px] uppercase tracking-wide">
              {item.stat}
            </span>
          </div>

          <div className="text-[11px] font-mono font-extrabold text-[#007CDC] tracking-[0.15em] uppercase mb-2">
            {item.tag}
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-4 group-hover:text-[#007CDC] transition-colors">
            {item.name}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed font-normal mb-8">
            {item.desc}
          </p>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#0A1128] group-hover:text-[#007CDC]">
          <span>EXPLORE ASSET DEEDS</span>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#007CDC] group-hover:text-white transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Subtle Background Glow on Hover */}
        <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />
      </motion.div>
    </motion.div>
  );
}

export function Corridors() {
  return (
    <section id="corridors" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>GUJARAT ECONOMIC MULTI-TRILLION NODES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0A1128] tracking-tight mb-6">
            India's Most Advanced <span className="text-[#007CDC]">Growth Corridors</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Strategically centered across India's premier high-growth state, these sovereign investment zones offer USA and global NRIs unmatched infrastructural compounding, title security, and institutional rental demand.
          </p>
        </div>

        {/* 3D Interactive Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corridors.map((item, idx) => (
            <NodeCard key={item.name} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom Institutional Link */}
        <div className="mt-16 text-center">
          <Link
            href="/gujarat"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] hover:bg-[#007CDC] text-white font-mono font-extrabold text-xs uppercase tracking-widest shadow-lg transition-all duration-300"
          >
            <span>VIEW DEEP-DIVE GUJARAT CORRIDOR REPORT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
