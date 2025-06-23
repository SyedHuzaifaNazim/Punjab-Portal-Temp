export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
        <span className="text-xs text-gray-500">Icon</span>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#" 
        className="text-green-700 font-medium hover:underline inline-flex items-center"
      >
        Access Service
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}