"use client";
import React, { useState } from "react";

import "@/components/dashboard/CSS/dashboard.css";
import { API_BASE_URL } from "@/data/data";
import axios from "axios";

const NewsCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    categories: [],  // Now it's an array to store selected categories
    url: "",  // Added URL field
  });

  const availableCategories = [
    "Politics",
    "Sports",
    "Technology",
    "Entertainment",
    "Business",
    "Health",
    "Science",
    "Lifestyle",
    "Music",
    "Art & Culture",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle selecting categories
  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );

    // Merge and deduplicate categories in the form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: Array.from(new Set([...prevFormData.categories, ...selectedOptions])), // Merge and deduplicate
    }));
  };

  // Handle removing a category
  const handleCategoryRemove = (categoryToRemove: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: prevFormData.categories.filter((category) => category !== categoryToRemove),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    // Reset form after submission
    setFormData({
      title: "",
      summary: "",
      content: "",
      categories: [],
      url: "",
    });

    // Here you could add code to send the data to an API, like so:
    // try {
    //   const response = await axios.post(`${API_BASE_URL}/your-endpoint`, formData);
    //   // Handle response...
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <div className="wrapper my-8">
      <h5 className="text-xl font-semibold mb-2">Upload News</h5>
      <h6 className="text-lg text-gray-600 mb-6">Manage and Upload News Content</h6>

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
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Summary */}
          <div className="flex flex-col w-full">
            <label htmlFor="summary" className="text-sm font-medium mb-1">
              Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full">
            <label htmlFor="content" className="text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter content"
              value={formData.content}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>
          </div>

          {/* Categories */}
          <div className="flex flex-col w-full">
            <label htmlFor="categories" className="text-sm font-medium mb-1">
              Categories
            </label>

            {/* Display selected categories */}
            {formData.categories.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.categories.map((category, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-lg"
                  >
                    {category}
                    <button
                      type="button"
                      onClick={() => handleCategoryRemove(category)}
                      className="ml-2 text-gray-600 hover:text-gray-800"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Categories dropdown */}
            <div className="flex items-center mt-2">
              <select
                id="categories"
                name="categories"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
                // multiple
                onChange={handleCategoriesChange}
              >
                {availableCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* URL */}
          <div className="flex flex-col w-full">
            <label htmlFor="url" className="text-sm font-medium mb-1">
              URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none w-full"
              placeholder="Enter news URL"
              value={formData.url}
              onChange={handleChange}
            //   required
            />
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

export default NewsCreate;
