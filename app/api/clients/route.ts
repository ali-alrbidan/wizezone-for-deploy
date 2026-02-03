import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data[0])
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}