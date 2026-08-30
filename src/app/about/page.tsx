export default function About() {
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
