import { ArrowLeft, Download, Calendar, FileText } from 'lucide-react';

interface ReportsProps {
  onBack: () => void;
}

export function Reports({ onBack }: ReportsProps) {
  const reports = [
    { month: 'December 2024', type: 'Monthly Report', date: 'Generated on Dec 13, 2024' },
    { month: 'November 2024', type: 'Monthly Report', date: 'Generated on Nov 30, 2024' },
    { month: 'October 2024', type: 'Monthly Report', date: 'Generated on Oct 31, 2024' },
    { month: 'Q4 2024', type: 'Quarterly Summary', date: 'Generated on Dec 1, 2024' },
    { month: 'September 2024', type: 'Monthly Report', date: 'Generated on Sep 30, 2024' },
  ];

  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white">
          <h1 className="text-2xl">Reports</h1>
          <p className="text-sm opacity-90">Download Health Reports</p>
        </div>
      </div>

      {/* Generate New Report */}
      <div className="bg-[#D4E4F7] rounded-3xl p-5 mb-4">
        <h3 className="text-gray-900 mb-3">Generate New Report</h3>
        <div className="bg-white rounded-2xl p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#5B8FD8]" />
            <span className="text-sm text-gray-900">Select Date Range</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 hover:bg-gray-200 transition-all">
              Last 7 Days
            </button>
            <button className="bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 hover:bg-gray-200 transition-all">
              Last 30 Days
            </button>
            <button className="bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 hover:bg-gray-200 transition-all">
              Last 3 Months
            </button>
            <button className="bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 hover:bg-gray-200 transition-all">
              Custom Range
            </button>
          </div>
        </div>
        <button className="w-full bg-[#5B8FD8] text-white rounded-2xl py-3 px-4 hover:bg-[#4A7EC7] transition-all">
          Generate Report
        </button>
      </div>

      {/* Previous Reports */}
      <div className="flex-1 overflow-y-auto space-y-3 pb-4">
        <h3 className="text-white text-sm mb-2">Previous Reports</h3>
        {reports.map((report, index) => (
          <div key={index} className="bg-[#D4E4F7] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#5B8FD8]" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">{report.month}</div>
                <div className="text-xs text-gray-600 mb-1">{report.type}</div>
                <div className="text-xs text-gray-500">{report.date}</div>
              </div>
              <button className="w-9 h-9 rounded-full bg-[#5B8FD8] flex items-center justify-center text-white hover:bg-[#4A7EC7] transition-all">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
