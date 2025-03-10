import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ProjectFormProps {
  projectImages: string[];
  onImageAdd: () => void;
  onImageRemove: (index: number) => void;
}

export function ProjectForm({ projectImages, onImageAdd, onImageRemove }: ProjectFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Project Title</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., First Installation Ceremony"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Project Description</label>
        <textarea
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter project description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Project Images</label>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {projectImages.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Project image ${index + 1}`}
                className="h-24 w-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => onImageRemove(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={onImageAdd}
            className="h-24 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:border-indigo-500 hover:text-indigo-500"
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}