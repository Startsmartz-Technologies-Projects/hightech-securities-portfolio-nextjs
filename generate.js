const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Github/portfolio/src/app';

const dirs = ['about', 'services', 'products', 'projects', 'contact'];
dirs.forEach(dir => {
  fs.mkdirSync(path.join(baseDir, dir), { recursive: true });
});

const layout = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High-Tech Securities | Security & Technology Solutions",
  description: "Dhaka-based security and technology solutions provider, specializing in CCTV and complete security surveillance systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col"}>
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900">HIGH-TECH</span>
              <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Securities</span>
            </Link>
            <nav className="flex space-x-6 text-sm font-semibold text-slate-700">
              <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
              <Link href="/products" className="hover:text-orange-600 transition-colors">Products</Link>
              <Link href="/projects" className="hover:text-orange-600 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-xl font-black tracking-tight text-white">HIGH-TECH</span>
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Securities</span>
              </div>
              <p className="mb-4">Dependable security systems built on genuine equipment, sound technical design, and honest after-sales support.</p>
              <p>© {new Date().getFullYear()} High-Tech Securities.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
                <li><Link href="/services" className="hover:text-orange-500">Our Services</Link></li>
                <li><Link href="/products" className="hover:text-orange-500">Products & Equipment</Link></li>
                <li><Link href="/projects" className="hover:text-orange-500">Track Record</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li>Shop-C6, New Super Market, Baitul Mukarram, Dhaka-1000</li>
                <li>+880 1964 817020, +880 1818 171793</li>
                <li>hightechbd20@gmail.com</li>
                <li><a href="https://facebook.com/high.tech.securities13" className="hover:text-orange-500">Facebook Page</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
`;

const homePage = `import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Established 2020</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Dependable Security & <br />Technology Solutions.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We design, supply, install, configure, and maintain complete surveillance infrastructure for corporate, industrial, commercial, and residential clients across Dhaka.
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="bg-orange-600 text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 grid grid-cols-2 gap-4">
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-lg border border-slate-700 text-center">
              <div className="text-3xl mb-2">📹</div>
              <div className="font-semibold text-sm">CCTV Surveillance</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-lg border border-slate-700 text-center">
              <div className="text-3xl mb-2">🖥️</div>
              <div className="font-semibold text-sm">Video Monitoring</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-lg border border-slate-700 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold text-sm">Installation & Integration</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-lg border border-slate-700 text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="font-semibold text-sm">24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Protecting What Matters</h2>
          <p className="text-slate-600 mb-12 max-w-3xl mx-auto text-lg">
            High-Tech Securities covers the full surveillance lifecycle — from security consultancy and site survey to long-term maintenance.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-black text-orange-600 mb-2">100%</div>
              <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Genuine Products</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-black text-orange-600 mb-2">7-10</div>
              <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Days Delivery</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-black text-orange-600 mb-2">3</div>
              <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Months Free Support</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Surveillance Grade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

const aboutPage = `export default function About() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-slate-900 border-b border-slate-200 pb-4">About High-Tech Securities</h1>
      
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">A Note from the Proprietor</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Dear Partner / Stakeholder,<br/><br/>
            At High-Tech Securities, our goal is simple: to give every client a CCTV and security surveillance system they can genuinely rely on. That means using authentic, manufacturer-warrantied equipment, installing it properly the first time, and staying available long after the cameras are switched on.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We know that security is not something a client should have to think twice about — it should simply work, every day, without excuses. That principal guides how we design, quote, install, and support every project we take on, regardless of its size.
          </p>
          <div className="font-bold text-lg text-slate-900">Najmul Hasan</div>
          <div className="text-orange-600 font-semibold text-sm">Proprietor</div>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-xl shadow-lg flex items-center justify-center text-xl italic font-light leading-relaxed relative">
          <div className="text-6xl text-orange-500 absolute top-4 left-4 opacity-50">"</div>
          We look forward to the opportunity of building a lasting security partnership with you.
          <div className="text-6xl text-orange-500 absolute bottom-0 right-4 opacity-50 rotate-180">"</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Mission</h2>
          <p className="text-slate-600">
            To protect what matters to our clients by delivering dependable, professionally engineered surveillance systems, built on genuine equipment, sound technical design, and honest after-sales support.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Vision</h2>
          <p className="text-slate-600">
            To be recognized among Bangladesh's most trusted CCTV and security solution providers, known for technical competence, transparent dealing, and systems that continue to perform years after installation.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Seven Reasons Clients Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Professional Design", desc: "Security systems designed according to actual site requirements and risk, not generic packages." },
            { title: "Quality Equipment", desc: "Reliable, genuine surveillance equipment from established manufacturers, with warranty." },
            { title: "Experienced Technical Team", desc: "Qualified engineers and technicians for installation, configuration and support." },
            { title: "Complete Solution", desc: "From site survey through installation, commissioning and long-term maintenance." },
            { title: "Scalable Architecture", desc: "Systems designed so cameras, storage and sites can be added later without redesign." },
            { title: "After-Sales Support", desc: "Structured preventive maintenance and responsive technical support." },
            { title: "Security-Focused Approach", desc: "Protection of premises, footage, data and the surveillance network itself." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                <span className="text-orange-500 mr-2">0{i+1}</span> {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

const servicesPage = `export default function Services() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-slate-900 border-b border-slate-200 pb-4">Our Services & Expertise</h1>
      
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Installation & Implementation Process</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">Every project is executed through a disciplined twelve-stage implementation process, so responsibilities and timelines stay clear from survey to handover.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Site Survey", "System Design", "Equipment Selection", "Cabling & Infrastructure", "Camera Installation", "NVR / DVR Installation", "Network Configuration", "Recording Configuration", "Remote Monitoring", "Testing & Commissioning", "Client Training", "Handover"].map((step, i) => (
            <div key={i} className="bg-slate-900 text-white p-4 rounded text-center">
              <div className="text-orange-500 text-sm font-bold mb-1">{String(i+1).padStart(2, '0')}</div>
              <div className="font-semibold text-sm">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Site Survey & Security Assessment</h2>
          <p className="text-slate-600 mb-6">No system is quoted before the site is properly assessed. Our three-stage assessment ensures the design matches actual site risk, not assumptions.</p>
          <ul className="space-y-4">
            <li className="bg-white p-4 border border-slate-200 rounded shadow-sm">
              <strong className="text-orange-600 block mb-1">Step 1 — Site Survey</strong>
              <span className="text-slate-600 text-sm">Building inspection, entry/exit analysis, risk & lighting review, blind-spot identification.</span>
            </li>
            <li className="bg-white p-4 border border-slate-200 rounded shadow-sm">
              <strong className="text-orange-600 block mb-1">Step 2 — Surveillance Planning</strong>
              <span className="text-slate-600 text-sm">Camera positions, types, angles, night coverage & recording mode requirements.</span>
            </li>
            <li className="bg-white p-4 border border-slate-200 rounded shadow-sm">
              <strong className="text-orange-600 block mb-1">Step 3 — System Design</strong>
              <span className="text-slate-600 text-sm">CCTV layout drawing, network topology, storage calculation, BoQ & power requirements.</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Monitoring & Control Room</h2>
          <p className="text-slate-600 mb-6">For clients requiring active supervision, we design and commission dedicated monitoring setups — from a single workstation to a multi-screen control room (24/7 Central Monitoring).</p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Central and multi-screen surveillance display</li>
            <li>24/7 monitoring and shift-based supervision</li>
            <li>Remote and mobile monitoring for authorized users</li>
            <li>Management of multiple NVRs across branches</li>
            <li>Event monitoring with alarm notifications</li>
            <li>Incident review, video playback and evidence export</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Storage, Networking & Cybersecurity</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">Surveillance systems are network assets. We design the storage and network layer to protect both the footage and the infrastructure it runs on.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 rounded border border-slate-200">
            <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-2">Storage Design</h3>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
              <li>Surveillance-grade HDDs rated for continuous 24/7 writing</li>
              <li>RAID configuration where redundancy is required</li>
              <li>NVR storage sized to the agreed retention period</li>
              <li>Continuous and event-based recording modes</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded border border-slate-200">
            <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-2">Network & Cybersecurity</h3>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
              <li>VLAN segmentation isolating the surveillance network</li>
              <li>Secure administrator access and enforced strong passwords</li>
              <li>Firewall configuration and controlled port exposure</li>
              <li>VPN-based secure remote access</li>
              <li>Firmware management and security updates</li>
              <li>Role-based user access control</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

const productsPage = `export default function Products() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-slate-900 border-b border-slate-200 pb-4">Products & Equipment</h1>
      
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">CCTV Solutions Portfolio</h2>
        <p className="text-slate-600 mb-8">Our solutions are grouped into four categories, selected according to site conditions, existing infrastructure, and budget.</p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white font-bold p-4 text-center">IP CCTV</div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> 2MP / 4MP / 5MP / 8MP</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> PoE cameras</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> NVR recording</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Centralized monitoring</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white font-bold p-4 text-center">ANALOG CCTV</div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> HD-TVI / HDCVI / AHD</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> DVR recording</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Coaxial infrastructure</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Cost-effective upgrade</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white font-bold p-4 text-center">SPECIALIZED</div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> PTZ / Dome / Bullet</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Turret / Fisheye</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Thermal / ANPR</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Explosion-proof</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white font-bold p-4 text-center">SMART / AI</div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Face recognition</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Intrusion & line crossing</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> People & vehicle counting</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Loitering detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Equipment Provided</h2>
        <p className="text-slate-600 mb-8">We supply genuine, manufacturer-warrantied equipment, with serial number verification available on request.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="p-4 font-bold">Equipment</th>
                <th className="p-4 font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600 text-sm">
              <tr><td className="p-4 font-semibold text-slate-900">IP Camera</td><td className="p-4">High-resolution network surveillance cameras</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">PTZ Camera</td><td className="p-4">Pan, tilt and optical zoom for wide-area coverage</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">NVR</td><td className="p-4">Network video recording and management</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">DVR</td><td className="p-4">Digital video recording for analog systems</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">HDD</td><td className="p-4">Surveillance-grade storage rated for 24/7 writing</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">PoE Switch</td><td className="p-4">Combined camera power and network connectivity</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">Monitor</td><td className="p-4">Central surveillance display units</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">UPS</td><td className="p-4">Power backup for cameras and recorders</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">Rack / Enclosure</td><td className="p-4">Equipment protection and cable management</td></tr>
              <tr><td className="p-4 font-semibold text-slate-900">Network Equipment</td><td className="p-4">Routers, cabling and accessories for reliable connectivity</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
`;

const projectsPage = `export default function Projects() {
  const projects = [
    { client: "Al-Noor Steel City Complex", location: "Ashkona, Dhaka-1230", industry: "Factory", camera: "Imou IP Camera", retention: "60 days" },
    { client: "Madrasa Markazul Ihsan Dhaka", location: "Zinzira, Keraniganj, Dhaka", industry: "Madrasa", camera: "Ezviz IP Camera", retention: "40 days" },
    { client: "Darul Quran Academy", location: "Kuratoli, Kuril, Dhaka", industry: "School", camera: "TP-Link IP Camera", retention: "15 days" },
    { client: "Anwarul Uloom Mohila Madrasa", location: "Kamrangirchar, Dhaka", industry: "Madrasa", camera: "Dahua IP Camera", retention: "30 days" },
    { client: "Waliul Haque", location: "Bashundhara R/A, Dhaka", industry: "Residential", camera: "Hikvision IP Camera", retention: "30 days" },
    { client: "Mithu Mia", location: "Bashundhara R/A, Dhaka", industry: "Residential", camera: "Hikvision IP Camera", retention: "30 days" },
    { client: "Setara Sultana", location: "Nikunja-2, Khilkhet, Dhaka", industry: "Residential", camera: "Dahua IP Camera", retention: "30 days" }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-slate-900 border-b border-slate-200 pb-4">Track Record & Portfolio</h1>
      
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Client Portfolio</h2>
        <p className="text-slate-600 mb-8">A representative project record is presented below, drawn from active installations across factories, madrasas, schools, and residential complexes.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-900 text-white text-sm uppercase tracking-wide">
                <th className="p-4">Client</th>
                <th className="p-4">Location</th>
                <th className="p-4">Industry</th>
                <th className="p-4">Camera</th>
                <th className="p-4">Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
              {projects.map((proj, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">{proj.client}</td>
                  <td className="p-4">{proj.location}</td>
                  <td className="p-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">{proj.industry}</span></td>
                  <td className="p-4">{proj.camera}</td>
                  <td className="p-4 font-mono">{proj.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
        <p className="text-slate-600 mb-8">Surveillance requirements differ by sector. We design coverage around how each type of premises actually operates.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Corporate Offices", desc: "Reception, entry/exit, parking, server rooms", icon: "🏢" },
            { title: "Factories & Manufacturing", desc: "Production floors, warehouses, loading areas, perimeter", icon: "🏭" },
            { title: "Hospitals", desc: "Emergency departments, pharmacy, parking, restricted areas", icon: "🏥" },
            { title: "Hotels & Resorts", desc: "Lobby, corridors, parking, pool and recreation areas", icon: "🏨" },
            { title: "Educational Institutions", desc: "Campus grounds, gates, classrooms, laboratories", icon: "🎓" },
            { title: "Retail & Shopping", desc: "Sales floor, cash counters, storage, entrances", icon: "🛍️" },
            { title: "Residential & Apartments", desc: "Building entrance, parking, elevators, perimeter", icon: "🏠" }
          ].map((ind, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start">
              <div className="text-3xl mr-4">{ind.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{ind.title}</h3>
                <p className="text-sm text-slate-500">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`;

const contactPage = `export default function Contact() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-slate-900 border-b border-slate-200 pb-4">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Get In Touch</h2>
          <p className="text-slate-600 mb-10">
            We sincerely appreciate the opportunity to present our company profile to you. At High-Tech Securities, we are committed to delivering reliable CCTV and security surveillance solutions. Contact us today for a site survey.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-xl mr-4 text-2xl">📍</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Address</h4>
                <p className="text-slate-600">
                  Shop-C6, New Super Market, <br/>
                  Baitul Mukarram, Dhaka-1000, Bangladesh
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-xl mr-4 text-2xl">📞</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Phone</h4>
                <p className="text-slate-600">
                  +880 1964 817020 <br/>
                  +880 1818 171793
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-xl mr-4 text-2xl">✉️</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Email</h4>
                <p className="text-slate-600">
                  hightechbd20@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-xl mr-4 text-2xl">🌐</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Facebook</h4>
                <a href="https://facebook.com/high.tech.securities13" className="text-blue-600 hover:underline">
                  facebook.com/high.tech.securities13
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Phone</label>
              <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:border-orange-500" placeholder="Your Phone Number" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 h-32 focus:outline-none focus:border-orange-500" placeholder="Tell us about your security requirements..."></textarea>
            </div>
            <button type="button" className="w-full bg-orange-600 text-white font-bold py-4 rounded hover:bg-orange-700 transition-colors text-lg">
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'layout.tsx'), layout);
fs.writeFileSync(path.join(baseDir, 'page.tsx'), homePage);
fs.writeFileSync(path.join(baseDir, 'about/page.tsx'), aboutPage);
fs.writeFileSync(path.join(baseDir, 'services/page.tsx'), servicesPage);
fs.writeFileSync(path.join(baseDir, 'products/page.tsx'), productsPage);
fs.writeFileSync(path.join(baseDir, 'projects/page.tsx'), projectsPage);
fs.writeFileSync(path.join(baseDir, 'contact/page.tsx'), contactPage);

console.log('Successfully generated all Next.js pages.');
