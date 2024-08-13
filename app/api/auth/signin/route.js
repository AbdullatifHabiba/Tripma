import { compare } from 'bcryptjs';
import prisma from "@/utils/database";
import { NextResponse } from 'next/server';

// signin 
export async function POST(req) {
  const { emailOrPhone, password } = await req.json();

  try {
    // Fetch the user from the database using the emailOrPhone field
    const user = await prisma.user.findUnique({
      where: { email: emailOrPhone },
    });

    if (!user) {
      return NextResponse.json({ error: 'No user found' }, { status: 401 });
    }

    // Verify the password
    const isValid = await compare(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    // Return success response
    return NextResponse.json({ message: 'Signin successful', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}