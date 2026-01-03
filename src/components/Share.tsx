import { ArrowLeft, Mail, MessageCircle, Users, FileDown, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareProps {
  onBack: () => void;
}

export function Share({ onBack }: ShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[400px] h-[844px] bg-[#5B8FD8] rounded-[3rem] p-6 shadow-2xl border-8 border-black flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-white hover:bg-white/10 rounded-full p-1 transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white">
          <h1 className="text-2xl">Share</h1>
          <p className="text-sm opacity-90">Share Your Health Data</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        
        {/* Share with Healthcare Provider */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <h3 className="text-gray-900 mb-4">Share with Healthcare Provider</h3>
          <div className="bg-white rounded-2xl p-4 mb-3">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-[#5B8FD8]" />
              <div className="flex-1">
                <div className="text-sm text-gray-900">Dr. Sarah Johnson</div>
                <div className="text-xs text-gray-600">Cardiologist</div>
              </div>
              <button className="bg-[#5B8FD8] text-white rounded-xl px-4 py-2 text-xs hover:bg-[#4A7EC7] transition-all">
                Share
              </button>
            </div>
          </div>
          <button className="w-full bg-white text-[#5B8FD8] rounded-2xl py-3 px-4 hover:bg-gray-50 transition-all">
            + Add New Provider
          </button>
        </div>

        {/* Quick Share Options */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <h3 className="text-gray-900 mb-4">Quick Share</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-all">
              <Mail className="w-6 h-6 text-[#5B8FD8]" />
              <span className="text-sm text-gray-900">Email</span>
            </button>
            
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-all">
              <MessageCircle className="w-6 h-6 text-[#5B8FD8]" />
              <span className="text-sm text-gray-900">Message</span>
            </button>
            
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-all">
              <FileDown className="w-6 h-6 text-[#5B8FD8]" />
              <span className="text-sm text-gray-900">Export PDF</span>
            </button>
            
            <button 
              onClick={handleCopy}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-6 h-6 text-green-600" />
                  <span className="text-sm text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6 text-[#5B8FD8]" />
                  <span className="text-sm text-gray-900">Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Share Settings */}
        <div className="bg-[#D4E4F7] rounded-3xl p-5">
          <h3 className="text-gray-900 mb-4">What to Share</h3>
          <div className="space-y-2">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm text-gray-900">Blood Pressure Data</span>
              <div className="w-12 h-6 bg-[#5B8FD8] rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm text-gray-900">Blood Sugar Data</span>
              <div className="w-12 h-6 bg-[#5B8FD8] rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm text-gray-900">Logs & History</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <button className="w-full bg-white text-[#5B8FD8] rounded-2xl py-4 px-4 hover:bg-gray-50 transition-all">
          Share Selected Data
        </button>
      </div>
    </div>
  );
}
