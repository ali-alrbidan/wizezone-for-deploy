// app/test/page.tsx
"use client";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        console.log("Fetching news from /api/news...");

        const response = await fetch("/api/news", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);
        console.log(
          "Response headers:",
          Object.fromEntries(response.headers.entries()),
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("News data received:", data);
        setNews(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">News Test Page</h1>
      <p className="mb-4">Total news items: {news.length}</p>

      {news.length > 0 ? (
        <div className="space-y-4">
          {news.slice(0, 5).map((item, index) => (
            <div key={index} className="p-4 border rounded">
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          ))}
        </div>
      ) : (
        <p>No news found</p>
      )}
    </div>
  );
};

export default TestPage;
