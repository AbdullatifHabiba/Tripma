import { NextResponse } from 'next/server';
import prisma from '@/utils/database';

// get all user-reviews
export async function GET() {
    const userReviews = await prisma.review.findMany();
    
    // Convert date fields to a readable format
    const formattedReviews = userReviews.map(review => ({
        ...review,
        date: new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
    }));

    return NextResponse.json(formattedReviews);
}

// post array of user-reviews
export async function POST(request) {
    const body = await request.json();
    
    // Convert date fields to ISO format
    const formattedBody = body.map(review => ({
        ...review,
        date: new Date(review.date).toISOString()
    }));

    const userReviews = await prisma.review.createMany({
        data: formattedBody
    });
    return NextResponse.json(userReviews);
}

// delete all user-reviews
export async function DELETE() {
    const userReviews = await prisma.review.deleteMany();
    return NextResponse.json(userReviews);
}