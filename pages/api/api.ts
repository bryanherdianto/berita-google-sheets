import { headers } from "next/headers";

const API_URL = "https://script.google.com/macros/s/AKfycbyn3TtsgJC4SMp5sq01Su1PdzzLFBMoc17pcThjI6YNuTrCvh9Hy6CrWqowhNUc3724/exec";

export async function getPosts() {
  const res = await fetch(API_URL, { cache: "default" });
  if (!res.ok) throw new Error("Failed to fetch news");
  return await res.json();
}

export async function submitPost(data: { id: number; title: string; content: string; date: string }) {
  const options = {
    method: "POST",
    body: JSON.stringify(data)
  }
  const res = fetch(API_URL, options).then((res) => {
    if (!res.ok) throw new Error("Failed to submit news");
    return res.json();
  });
}
