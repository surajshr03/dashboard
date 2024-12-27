'use client';

import React, { useState } from 'react';

const NormalBooks = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    thumbnail: null,
    tags: [],
  });

  const [availableTags, setAvailableTags] = useState([
    'Fiction',
    'Science',
    'History',
    'Biography',
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      thumbnail: e.target.files[0],
    });
  };

  // Handle changes in the tags dropdown (allowing multi-selection)
  const handleTagsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: Array.from(new Set([...prevFormData.tags, ...selectedOptions])), // Merge and deduplicate
    }));
  };

   // Handle removing a tag
   const handleTagRemove = (tagToRemove: never) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: prevFormData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      title: '',
      author: '',
      description: '',
      thumbnail: null,
      tags: [],
    });
  };

  return (
    <div className="wrapper my-8">
      <h5 className="text-xl font-semibold mb-2">Upload Audio Books</h5>
      <h6 className="text-lg text-gray-600 mb-6">Manage and Upload Audio Books</h6>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 overflow-hidden w-full">
          {/* Title */}
          <div className="flex flex-col w-full">
            <label htmlFor="title" className="text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter book title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Author */}
          <div className="flex flex-col w-full">
            <label htmlFor="author" className="text-sm font-medium mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter author's name"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col w-full">
            <label htmlFor="description" className="text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter book description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>
          </div>

          {/* Thumbnail */}
          <div className="flex flex-col w-full">
            <label htmlFor="thumbnail" className="text-sm font-medium mb-1">
              Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand file:text-white hover:file:bg-brand-dark"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Tags */}
          <div className="flex flex-col w-full">
      <label htmlFor="tags" className="text-sm font-medium mb-1">
        Tags
      </label>

      {/* Display selected tags */}
      {formData.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-lg"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="ml-2 text-gray-600 hover:text-gray-800"
              >
                &times; {/* Cross button */}
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Tags dropdown */}
      <div className="flex items-center mt-2">
        <select
          id="tags"
          name="tags"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
          onChange={handleTagsChange}
          // multiple 
        >
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NormalBooks;
