import React, { useState } from 'react';
import type { Avenue, Blog } from './types';
import { Navbar } from './components/Navbar';
import { TabSelector } from './components/TabSelector';
import { AvenueForm } from './components/AvenueForm';
import { BlogForm } from './components/BlogForm';

function App() {
  const [activeTab, setActiveTab] = useState<'avenues' | 'blogs'>('avenues');
  const [selectedAvenue, setSelectedAvenue] = useState<Avenue | null>(null);
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [blogForm, setBlogForm] = useState<Partial<Blog>>({
    title: '',
    content: '',
    excerpt: '',
    imageUrl: '',
    category: '',
    readTime: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleImageAdd = () => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      setProjectImages([...projectImages, imageUrl]);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImages = [...projectImages];
    newImages.splice(index, 1);
    setProjectImages(newImages);
  };

  const handleBlogInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlogForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'avenues' && (
          <AvenueForm
            avenue={selectedAvenue || {}}
            projectImages={projectImages}
            onImageAdd={handleImageAdd}
            onImageRemove={handleImageRemove}
          />
        )}

        {activeTab === 'blogs' && (
          <BlogForm
            blog={blogForm}
            onInputChange={handleBlogInputChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;