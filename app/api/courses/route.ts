import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }
    
    const data = await response.json();
  
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}