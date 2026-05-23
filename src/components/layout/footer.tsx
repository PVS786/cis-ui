import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-brand-gray-light pt-24 pb-12 text-brand-navy border-t border-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-navy flex items-center justify-center rounded-sm text-brand-gold font-serif font-black text-lg">
                N
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">CONSERVVE</span>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs italic">
              Global leaders in hybrid infrastructure and advanced technology park development. We build the foundations of the future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-brand-gray-medium flex items-center justify-center hover:bg-brand-navy hover:text-brand-gold transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Divisions</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-medium">
              <li><Link href="#" className="hover:text-brand-navy transition-colors">Residential Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Semiconductor Labs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Energy Grid Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Experience</h4>
            <ul className="space-y-4 text-gray-500 text-[13px] font-medium">
              <li><Link href="#" className="hover:text-brand-navy transition-colors">Case Portfolios</Link></li>
              <li><Link href="#" className="hover:text-brand-navy transition-colors">Innovation Hub</Link></li>
              <li><Link href="#" className="hover:text-brand-navy transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-brand-navy transition-colors">News & Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Global Headquarters</h4>
            <ul className="space-y-5 text-gray-500 text-[13px] font-medium">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="leading-relaxed">1200 Silicon Avenue, Innovation District, CA 94043</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>contact@conservve.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-gray-medium flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 CONSERVVE ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-brand-navy transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-navy transition-colors">Terms</Link>
            <Link href="#" className="hover:text-brand-navy transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
