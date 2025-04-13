import { useEffect, useState } from "react";
import { getPosts } from "./api/api";
import PostForm from "./PostForm";

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">Nikmati! Berita Terkini...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
      <button
        className="fixed right-10 bottom-10 mt-4 bg-gray-600 text-white text-2xl py-2 px-4 rounded-full hover:bg-gray-500 transition duration-200"
        onClick={() => setShowForm(true)}
      >
        +
      </button>
      {showForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => {
            setShowForm(false);
          }}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PostForm onClose={() => setShowForm(false)} onSubmit={() => fetchPosts()} />
          </div>
        </div>
      )}
    </div>
  );
}