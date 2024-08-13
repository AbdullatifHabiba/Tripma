import { hash } from 'bcryptjs';
import prisma from "@/utils/database";
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { emailOrPhone, password } = await req.json();

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: emailOrPhone },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await hash(password, 12);

  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      email: emailOrPhone,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}