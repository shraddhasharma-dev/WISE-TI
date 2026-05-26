function AlertCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-200 border-l-4 border-l-red-500 p-6 relative overflow-hidden">

      <div className="absolute -right-4 -top-4 opacity-5 rotate-12">

        <span className="material-symbols-outlined text-[100px] text-red-500">
          security
        </span>

      </div>

      <h3 className="text-xs font-bold text-red-600 uppercase flex items-center gap-2 mb-4">

        <span className="material-symbols-outlined text-sm">
          warning
        </span>

        Pattern Anomaly Detected

      </h3>

      <p className="text-xs text-gray-600 leading-relaxed mb-6">

        Judge <strong>M. Thompson</strong> scoring shows extreme variance from peer average.

      </p>

      <div className="flex gap-3">

        <button className="flex-1 bg-red-50 border border-red-200 py-2.5 rounded-lg text-[10px] font-bold text-red-600 uppercase">
          Investigate
        </button>

        <button className="flex-1 bg-gray-50 border border-gray-200 py-2.5 rounded-lg text-[10px] font-bold text-gray-600 uppercase">
          Clear
        </button>

      </div>

    </div>
  );
}

export default AlertCard;