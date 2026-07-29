import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, BookOpen, ChevronRight, MessageSquare } from 'lucide-react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/ScrollReveal';

const learningResources = [
  "Investment Guides", "Market Updates", "Industry Reports", "FAQs", "Buying Process", "NRI Resources", "Commercial Insights", "Infrastructure News"
];

const contactOptions = [
  "Schedule an Investment Consultation",
  "Request Property Information",
  "Book an Online Meeting",
  "Submit an Investor Inquiry",
  "Request Market Reports",
  "Explore Partnership Opportunities"
];

export function Contact() {
  return (
    <ScrollReveal>
<section className="py-24 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Learning Center */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block mb-3">
              KNOWLEDGE IS CAPITAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Learning Center
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {learningResources.map((res, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors cursor-pointer group">
                  <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  <span className="font-bold text-sm text-slate-700">{res}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]" />
              <h3 className="text-xl font-bold mb-2">Ready to explore?</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-sm">Access comprehensive market reports and due diligence materials.</p>
              <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                <span>View All Resources</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Contact Us */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm"
          >
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
              ADVISORY DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Contact Us
            </h2>

            <div className="space-y-3 mb-10">
              {contactOptions.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-sm text-slate-700">{opt}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">DIRECT LINES</p>
                  <a href="tel:+12722679492" className="block text-sm font-bold text-slate-900 hover:text-blue-600">USA: +1 272-267-9492</a>
                  <a href="tel:+917984171515" className="block text-sm font-bold text-slate-900 hover:text-blue-600">India: +91 7984171515</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">EMAIL DESK</p>
                  <a href="mailto:Globalservicejjp4@gmail.com" className="block text-sm font-bold text-slate-900 hover:text-emerald-600">Globalservicejjp4@gmail.com</a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
</ScrollReveal>
  );
}
