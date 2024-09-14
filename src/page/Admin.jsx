import React, { useState } from 'react';
import CreateModal from '../components/CreateModal';

function Admin() {
  const [activeSection, setActiveSection] = useState('users');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];


  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log('Post Created:', formData);
    closeModal();
  };

  return (
    <div className="flex min-h-screen">
      
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          
          <li
            className={`mb-4 cursor-pointer ${activeSection === 'users' && 'font-bold'}`}
            onClick={() => setActiveSection('users')}
          >
            View All Users
          </li>
          
          <li
            className={`cursor-pointer ${activeSection === 'createPost' && 'font-bold'}`}
            onClick={() => {
              setActiveSection('createPost');
              openModal();
            }}
          >
            All Post
          </li>
        </ul>
      </aside>

      <main className="w-3/4 p-6">
        
        {activeSection === 'users' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">All Users</h2>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b">
                    <td className="p-2">{user.id}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isModalOpen && (
          <CreateModal closeModal={closeModal}>
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
              <form onSubmit={handleCreatePost}>
                <div className="mb-4">
                  <label className="block mb-2">Title</label>
                  <input
                    type="text"
                    className="border p-2 w-full"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Content</label>
                  <textarea
                    className="border p-2 w-full"
                    rows="5"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2"
                >
                  Create Post
                </button>
              </form>
            </div>
          </CreateModal>
        )}
      </main>
    </div>
  )
};

export default Admin;
