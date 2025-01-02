"use client";

import "@/components/dashboard/CSS/dashboard.css";
import { API_BASE_URL } from "@/data/data";
import axios from "axios";
import React, { useState } from "react";

const Ebooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    // thumbnail: null,
    tags: [],
  });
  const [availableTags, setAvailableTags] = useState([
    "Comedy",
    "Thrill",
    "Horror",
    "Action",
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  if (loading) {
    return <div>loading......</div>
  }
  if (error) {
    return <div>Error occurred.</div>
  }
  // const handleFileChange = (e: { target: { files: FileList } }) => {
  //   setFormData({
  //     ...formData,
  //     thumbnail: e.target.files[0],
  //   });
  // };

  const handleTagsChange = (e: {
    target: { options: HTMLCollectionOf<HTMLOptionElement> };
  }) => {
    const { options } = e.target;
    const selectedTags: string[] = [];
    for (const option of options) {
      if (option.selected) {
        selectedTags.push(option.value);
      }
    }
    setFormData({
      ...formData,
      tags: selectedTags,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("author", formData.author);
    payload.append("description", formData.description);

    // if (formData.thumbnail) {
    //   payload.append("thumbnail", formData.thumbnail);
    // }

    // Ensure tags are being sent as an array of strings
    formData.tags.forEach((tag) => payload.append("tags", tag));

    try {
      const response = await axios.post(`${API_BASE_URL}/ebooks/books/create/`, payload);

      if (response.status === 201) {
        setFormData({
          title: "",
          author: "",
          description: "",
          // thumbnail: null,
          tags: [],
        });
      } else {
        setError("Failed to upload e-book.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper my-8">
      <h5 className="text-xl font-semibold mb-2">Upload E-Books</h5>
      <h6 className="text-lg text-gray-600 mb-6">Manage and Upload E-Books</h6>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {/* title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              placeholder="Enter book title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          {/* author */}
          <div className="flex flex-col">
            <label htmlFor="author" className="text-sm font-medium mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              placeholder="Enter author's name"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          {/* description      */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              placeholder="Enter book description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>
          </div>
          {/* thumbnail */}
          {/* <div className="flex flex-col">
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
          </div> */}

          {/* tags */}
          <div className="flex flex-col">
            <label htmlFor="tags" className="text-sm font-medium mb-1">
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              multiple
              onChange={handleTagsChange}
            >
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>


        </div >

        {/* submit */}
        < div className="" >
          <button
            type="submit"
            className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand "
          >
            Submit
          </button>
        </div>
      </form>
    </div >
  );
};

export default Ebooks;
