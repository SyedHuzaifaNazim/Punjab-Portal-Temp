export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-8 flex items-center justify-center">
            <span className="text-gray-500">KPK Secretariat Map</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p>Civil Secretariat, Peshawar, Khyber Pakhtunkhwa</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p>+92 91 111 111 111</p>
                <p>+92 91 222 222 222</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>info@kpk.gov.pk</p>
                <p>contact@kpk.gov.pk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}