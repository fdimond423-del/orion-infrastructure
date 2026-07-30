import { ScrollReveal } from '@/components/ScrollReveal';
import img1 from '@/assets/manufacturing/img1.jpeg';
import img2 from '@/assets/manufacturing/img2.jpeg';
import img3 from '@/assets/manufacturing/img3.jpeg';
import img4 from '@/assets/manufacturing/img4.jpeg';
import img5 from '@/assets/manufacturing/img5.jpeg';
import img6 from '@/assets/manufacturing/img6.jpeg';
import img7 from '@/assets/manufacturing/img7.jpeg';

export function ManufacturingProjects() {
  const projects = [
    { title: "Dholera Smart City Infrastructure - Gujarat", img: img1 },
    { title: "GIFT City Financial Hub - Gujarat", img: img2 },
    { title: "Sanand Manufacturing Zone - Gujarat", img: img3 },
    { title: "Advanced Tech Parks - Gujarat", img: img4 },
    { title: "Industrial Corridor Development - Gujarat", img: img5 },
    { title: "Sustainable Urban Development - Gujarat", img: img6 },
    { title: "Gujarat Highway & Logistics - Gujarat", img: img7 }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Gujarat Growth & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Manufacturing</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore the monumental infrastructure and manufacturing projects driving the economic growth of Gujarat, India's premier investment destination.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group h-full flex flex-col cursor-pointer">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-start">
                  <h3 className="text-slate-900 font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
