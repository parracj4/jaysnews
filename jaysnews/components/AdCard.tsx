export default function AdCard() {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-gray-300 bg-gray-50 p-8 text-center">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-full">
          ADVERTISEMENT
        </span>
      </div>
      
      <div className="text-gray-600 mb-4">
        <div className="text-4xl mb-4">📢</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Ad Here</h3>
        <p className="text-sm">Contact us to advertise on Jay's News</p>
      </div>
      
      <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
        Learn More
      </button>
    </div>
  )
}