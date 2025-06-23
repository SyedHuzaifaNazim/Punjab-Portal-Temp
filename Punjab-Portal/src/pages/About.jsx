export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Government of Khyber Pakhtunkhwa</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Khyber Pakhtunkhwa Government Complex</span>
        </div>
        
        <div>
          <p className="mb-4 text-lg">
            The Government of Khyber Pakhtunkhwa is the provincial government of the KPK province in Pakistan. 
            Headquartered in Peshawar, it serves the people of this historically rich and culturally diverse region.
          </p>
          <p className="mb-4">
            Khyber Pakhtunkhwa government operates under the Constitution of Pakistan and is responsible for 
            providing governance to millions of residents across the province.
          </p>
          <p className="mb-6">
            This portal aims to provide citizens with easy access to government services, information, 
            and resources with transparency and efficiency.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-700">
            "To build a prosperous, inclusive, and digitally empowered Khyber Pakhtunkhwa where every citizen has 
            equal opportunity to thrive and contribute to society."
          </blockquote>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "35M+", label: "Population" },
            { value: "34", label: "Districts" },
            { value: "50+", label: "Departments" },
            { value: "300+", label: "Services" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}