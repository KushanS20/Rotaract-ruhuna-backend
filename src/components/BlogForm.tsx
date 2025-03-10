import React from 'react';
import { Image, Save, Clock, Tag } from 'lucide-react';
import type { Blog } from '../types';

interface BlogFormProps {
  blog: Partial<Blog>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function BlogForm({ blog, onInputChange }: BlogFormProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add/Edit Blog Post</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Blog Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={onInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter blog title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Excerpt</label>
          <textarea
            name="excerpt"
            value={blog.excerpt}
            onChange={onInputChange}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write a brief excerpt..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={onInputChange}
            rows={8}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                name="category"
                value={blog.category}
                onChange={onInputChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., Professional Development"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Read Time</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                name="readTime"
                value={blog.readTime}
                onChange={onInputChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., 5 min read"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Featured Image URL</label>
          <div className="mt-1 flex items-center space-x-4">
            <div className="relative flex-1">
              <input
                type="text"
                name="imageUrl"
                value={blog.imageUrl}
                onChange={onInputChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Image className="h-4 w-4 mr-2" />
              Preview
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Publication Date</label>
          <input
            type="date"
            name="date"
            value={blog.date}
            onChange={onInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {blog.imageUrl && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src={blog.imageUrl}
                alt="Blog preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Blog Post
          </button>
        </div>
      </form>
    </div>
  );
}