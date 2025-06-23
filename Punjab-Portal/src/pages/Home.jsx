import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: "Citizen Services",
      description: "Access various citizen-centric services and documents"
    },
    {
      title: "Online Payments",
      description: "Pay bills, taxes, and fees online"
    },
    {
      title: "Complaint Portal",
      description: "Register and track your complaints"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Online Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <NewsCard key={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
              View All News
            </button>
          </div>
        </div>
      </section>
      
      {/* Departments */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Government Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <a 
                key={i} 
                href="#" 
                className="bg-white p-4 rounded shadow text-center hover:shadow-md transition"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Dpt</span>
                </div>
                <span className="text-sm font-medium">Dept {i+1}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}