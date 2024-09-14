import React from 'react';
import { MdEmail } from 'react-icons/md';

function GuestPost() {
  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Guest Post / Publish Your Article</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="author-name" className="block text-sm font-medium text-gray-700">
              Author Name
            </label>
            <input
              id="author-name"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="author-email" className="block text-sm font-medium text-gray-700">
              Author Email
            </label>
            <input
              id="author-email"
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            <input
              id="occupation"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your occupation"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="about-author" className="block text-sm font-medium text-gray-700">
            About Author
          </label>
          <textarea
            id="about-author"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Tell us something about yourself"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GuestPost;
