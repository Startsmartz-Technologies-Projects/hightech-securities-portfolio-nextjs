export default function Projects() {
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
