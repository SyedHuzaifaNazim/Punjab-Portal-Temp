export default function NewsCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48 flex items-center justify-center">
        <span className="text-gray-500">KPK News Image</span>
      </div>
      <div className="p-4">
        <span className="text-sm text-green-700 font-medium">Press Release</span>
        <h3 className="font-bold my-2 line-clamp-2">CM KPK announced new development projects</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          The Chief Minister of Khyber Pakhtunkhwa has announced new initiatives for regional development.
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>June 21, 2025</span>
          <a href="#" className="text-green-700 hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
}