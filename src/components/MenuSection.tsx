import { Bell, Share2, Book } from 'lucide-react';

export function MenuSection() {
  return (
    <div className="space-y-3">
      <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
        <Bell className="w-5 h-5 text-[#5B8FD8]" fill="#5B8FD8" />
        <span className="text-gray-900">Insights</span>
      </button>

      <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
        <Share2 className="w-5 h-5 text-[#5B8FD8]" fill="#5B8FD8" />
        <span className="text-gray-900">Share</span>
      </button>

      <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
        <Book className="w-5 h-5 text-[#5B8FD8]" fill="#5B8FD8" />
        <span className="text-gray-900">Educational Resources</span>
      </button>
    </div>
  );
}
