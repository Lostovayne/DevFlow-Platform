import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const validateData = UserSchema.safeParse(body);

    if (!validateData.success) {
      throw new ValidationError(validateData.error.flatten().fieldErrors);
    }
    const { email, username } = validateData.data;

    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    if (existingUser) throw new Error("User already exists");
    if (existingUsername) throw new Error("Username already exists");

    const newUser = await User.create(validateData.data);
    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
