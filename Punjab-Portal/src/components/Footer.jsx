export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Departments', 'Tenders', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Important Links</h3>
            <ul className="space-y-2">
              {['Chief Minister Office', 'Provincial Assembly', 'Cabinet', 'Policies', 'RTI'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Government of Khyber Pakhtunkhwa</p>
              <p className="mb-2">Civil Secretariat, Peshawar</p>
              <p className="mb-2">Phone: +92 91 111 111 111</p>
              <p className="mb-2">Email: info@kpk.gov.pk</p>
            </address>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="bg-gray-700 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                  title={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Government of Khyber Pakhtunkhwa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}