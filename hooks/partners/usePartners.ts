// // hooks/usePartners.ts (or wherever your hook is)
"use client";

import { Partner } from "@/app/types";
import { useEffect, useState } from "react";



export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/partners");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch partners: ${response.status}`);
        }
        
        const data = await response.json();
        setPartners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Partners fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return { partners, loading, error };
}