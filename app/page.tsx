'use client';

import { Color } from "./color";
import NightingaleRoseChart from "./components/NightingaleRoseChart";
import StackBarChart from "./components/StackBarChart";
import { MajorCategory, rawDataList, simplifyMajorCategory } from "./data";
import { useState } from "react";

export default function Home() {
  const [activeChart, setActiveChart] = useState<'stack' | 'rose'>('stack');

  return (
    <main className="min-h-screen bg-white">
      {/* Title Bar */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-gradient-to-b from-white/95 to-white/75 border-b border-gray-200 flex items-center justify-between">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Visualizing Employment Income by Major in Canada
          </h1>
        </div>
        {/* Switch Chart Button */}
        <div className="flex justify-center gap-4 mr-4">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-bold ${
                activeChart === 'stack'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveChart('stack')}
            >
              Bar Chart
            </button>
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-bold ${
                activeChart === 'rose'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveChart('rose')}
            >
              Rose Chart
            </button>
        </div>
      </header>

      {/* Chart Container */}
      <div className="px-4 py-8 space-y-8">
        {/* Chart Display Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            {activeChart === 'stack' 
              ? 'Employment Income Distribution by Major Field'
              : 'Employment Income Distribution by Individuals with Employment Income'
            }
          </h2>
          <div className="bg-gray-50 rounded-xl flex justify-center">
            {activeChart === 'stack' ? (
              <StackBarChart width={1100} height={700} data={rawDataList} />
            ) : (
              <NightingaleRoseChart width={1100} height={700} data={rawDataList} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}