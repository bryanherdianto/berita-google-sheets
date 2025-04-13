import React, { useState } from 'react';
import { submitPost } from './api/api';

function PostForm({ onClose, onSubmit }: { onClose: () => void; onSubmit: () => void }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitPost({ id, title, content, date });
      alert('News submitted successfully!');

      setTitle('');
      setContent('');
      setDate('');
      setId(0);

      onClose();
      onSubmit();
    } catch (error) {
      console.error('Failed to submit news:', error);
      alert('Error submitting news.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-black border m-8 p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Add News</h1>

        <h1 className="text-xl font-bold mt-4">ID</h1>
        <input
          className="block w-[20%] border p-2 mb-4 text-black"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value, 10))}
          type='number'
          required
        />

        <h1 className="text-xl font-bold mt-4">Title</h1>
        <input
          className="block w-full border p-2 mb-4 text-black"
          placeholder="Write your title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <h1 className="text-xl font-bold mt-4">Content</h1>
        <textarea
          className="block w-full border p-2 mb-4 text-black"
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <h1 className="text-xl font-bold mt-4">Date</h1>
        <input
          className="block w-full border p-2 mb-4 text-black"
          placeholder="Select your date..."
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          required
        />

        <div className='flex justify-end'>
          <button
            type="submit"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
