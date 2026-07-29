import { ScrollReveal } from '@/components/ScrollReveal';
import gift1 from '@/assets/gift-city/gift-1.jpeg';
import gift2 from '@/assets/gift-city/gift-2.jpeg';
import gift3 from '@/assets/gift-city/gift-3.jpeg';
import gift7 from '@/assets/gift-city/gift-7.jpeg';

export function GiftCityHighlights() {
  return (
    <ScrollReveal>
      <section className="py-24 bg-white border-y border-slate-200 overflow-hidden font-sans">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">GIFT City <span className="text-blue-600">Showcase</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">India's first operational smart city and international financial services centre, offering world-class infrastructure and global connectivity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl group shadow-sm border border-slate-100">
              <img src={gift1} alt="GIFT City 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl group shadow-sm border border-slate-100">
              <img src={gift2} alt="GIFT City 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl group shadow-sm border border-slate-100">
              <img src={gift3} alt="GIFT City 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-[16/9] md:aspect-auto lg:col-span-3 h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-3xl group shadow-sm border border-slate-100">
              <img src={gift7} alt="GIFT City Panorama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm mb-3">Global Financial Hub</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">World-Class Infrastructure</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
