import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Globe, HelpCircle, Building, Users, MapPin, Mail, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const resourcesList = [
  { title: "Investment Guides", icon: BookOpen, desc: "Step-by-step guides on cross-border asset acquisition." },
  { title: "Market Updates", icon: Globe, desc: "Real-time trends on Gujarat real estate & infrastructure." },
  { title: "Industry Reports", icon: FileText, desc: "Deep analytical reports on GIFT City & Dholera SIR." },
  { title: "FAQs", icon: HelpCircle, desc: "Answers to common NRI taxation and repatriation queries." },
  { title: "Buying Process", icon: FileCheck, desc: "Transparent flowcharts of our structured purchasing process." },
  { title: "NRI Resources", icon: Users, desc: "Specialized documentation resources for USA, Canada, UK, and AUS citizens." },
  { title: "Commercial Insights", icon: Building, desc: "Data on corporate leasing yields and Grade-A office demands." },
  { title: "Infrastructure News", icon: MapPin, desc: "Updates on bullet trains, ports, and smart city developments." }
];

export default function ResourcesPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      <section className="relative pt-48 lg:pt-56 pb-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ORION BIZ INFRASTRUCTURE™ • LEARNING CENTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Knowledge is <span className="text-blue-600">Capital.</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Access our comprehensive library of Investment Guides, Market Updates, Industry Reports, and NRI Resources designed to support informed decision-making.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourcesList.map((res, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-50 transition-colors">
                    <res.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{res.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{res.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request Reports CTA */}
          <div className="mt-16 p-10 rounded-2xl bg-blue-50 border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Complete Market Reports</h3>
            <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
              Contact the Global Business Service desk directly to receive our latest Gujarat Real Estate & Industrial Infrastructure Dossier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:Globalservicejjp4@gmail.com" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" />
                <span>EMAIL REQUEST TO DESK</span>
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 flex items-center gap-2 transition-colors">
                <span>SUBMIT INQUIRY FORM</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
