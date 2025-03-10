import React from 'react';
import { LayoutGrid, PenSquare } from 'lucide-react';

interface TabSelectorProps {
  activeTab: 'avenues' | 'blogs';
  onTabChange: (tab: 'avenues' | 'blogs') => void;
}

export function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="flex space-x-4 mb-8">
      <button
        onClick={() => onTabChange('avenues')}
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeTab === 'avenues'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <LayoutGrid className="h-5 w-5 mr-2" />
        Avenues
      </button>
      <button
        onClick={() => onTabChange('blogs')}
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeTab === 'blogs'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <PenSquare className="h-5 w-5 mr-2" />
        Blogs
      </button>
    </div>
  );
}