export default function Products() {
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
