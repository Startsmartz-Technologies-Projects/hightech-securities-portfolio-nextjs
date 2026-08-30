export default function Services() {
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
