import React from 'react';
import { Plus, Save } from 'lucide-react';
import { ProjectForm } from './ProjectForm';
import type { Avenue } from '../types';

interface AvenueFormProps {
  avenue: Partial<Avenue>;
  projectImages: string[];
  onImageAdd: () => void;
  onImageRemove: (index: number) => void;
}

export function AvenueForm({ avenue, projectImages, onImageAdd, onImageRemove }: AvenueFormProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add/Edit Avenue</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Avenue Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="e.g., Club Service Avenue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter avenue description..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Projects</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <ProjectForm
                projectImages={projectImages}
                onImageAdd={onImageAdd}
                onImageRemove={onImageRemove}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Project
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Avenue
          </button>
        </div>
      </form>
    </div>
  );
}