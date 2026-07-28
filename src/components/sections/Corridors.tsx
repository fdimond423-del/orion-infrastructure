import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import React from 'react';
const industrialImg = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop";

const corridors = [
  {
    name: 'GIFT City',
    desc: "India's global business and financial hub.",
  },
  {
    name: 'Dholera SIR',
    desc: 'Smart industrial city and manufacturing center.',
  },
  {
    name: 'Sanand Corridor',
    desc: 'Automotive and industry manufacturing hub.',
  },
  {
    name: 'Gandhinagar',
    desc: "The State's planned capital and IT hub.",
  },
  {
    name: 'Ahmedabad',
    desc: 'Metropolitan growth and real estate center.',
  },
  {
    name: 'Kandla Port Region',
    desc: "India's major sea gateway and logistics hub.",
  }
];

function Card3D({ title, description, index }: { title: string; description: string; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        perspective: 1000,
      }}
      className="relative z-10"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-slate-50 p-8 rounded-2xl h-full cursor-crosshair border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 relative"
      >
        <div style={{ transform: "translateZ(50px)" }}>
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 shadow-xs">
            <MapPin className="w-6 h-6 text-[#007cdc]" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-[#131238] mb-3">{title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 hover:from-blue-500/5 hover:to-transparent transition-all duration-500 pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
      </motion.div>
    </motion.div>
  );
}

export function Corridors() {
  return (
    <section id="corridors" className="py-28 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${industrialImg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-3"
          >
            LOCATION ADVANTAGE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#131238] mb-6"
          >
            Gujarat Growth Corridors
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Strategically located across India's most progressive state, these corridors represent the epicenter of multi-trillion institutional industrial and infrastructure development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corridors.map((corridor, idx) => (
            <Card3D 
              key={corridor.name}
              title={corridor.name}
              description={corridor.desc}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
