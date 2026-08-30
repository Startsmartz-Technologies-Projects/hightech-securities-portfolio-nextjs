export default function Contact() {
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
