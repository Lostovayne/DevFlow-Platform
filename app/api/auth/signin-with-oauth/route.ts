import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { SignInWithOAuthSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import mongoose from "mongoose";
import slugify from "slugify";

export async function POST(request: Request) {
  const { provider, providerAccountId, user } = await request.json();

  await dbConnect();
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const validateData = SignInWithOAuthSchema.safeParse({ provider, providerAccountId, user });
    if (!validateData.success) throw new ValidationError(validateData.error.flatten().fieldErrors);

    // Destructuring user data
    const { name, username, email, image } = user;

    // User data verified with slugify
    const slugifiedUsername = slugify(user, { lower: true, strict: true, trim: true });
    const existingUser = await User.findOne({ email }).session(session);

    if (!existingUser) {
      const newUser = await User.create([{ name, username: slugifiedUsername, email, image }], { session });
    } else {
      const updatedData: { name?: string; image?: string } = {};
    }
  } catch (error: unknown) {
    await session.abortTransaction();
    return handleError(error, "api") as APIErrorResponse;
  } finally {
    await session.endSession();
  }
}
