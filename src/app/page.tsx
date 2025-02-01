"use client";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

import { useEffect, useState } from "react";
import Script from "next/script";
import ReactGA from "react-ga4";

async function getPosts() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbybM6iANyP0BZVeFFoI3-ANWjzi5ci9khI-bDQFWmSnuRboGf1q1Z4BKCXpQtrz92_d/exec",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Home() {
  const [posts, setPosts] = useState<
    { id: string; title: string; content: string; date: string }[]
  >([]);

  useEffect(() => {
    // Fetch posts from Google Sheets
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();

    // Initialize Google Analytics
    ReactGA.initialize("G-JGZ8FD6Y6V");
    ReactGA.send("pageview");

    // Activate Google AdSense ads
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="container mx-auto p-8">
      {/* Google Analytics & AdSense Scripts */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JGZ8FD6Y6V"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JGZ8FD6Y6V');
        `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3842615169660498"
        crossOrigin="anonymous"
      />

      <h1 className="text-3xl font-bold mb-4">Berita Terkini</h1>

      {/* Google AdSense Ad Slot */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3842615169660498"
          data-ad-slot=""
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
