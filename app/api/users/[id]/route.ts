import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextRequest, NextResponse } from "next/server";

// GET /api/users/[id]
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("User ID is required");

  try {
    await dbConnect();
    const userFound = await User.findById(id);
    if (!userFound) throw new NotFoundError("User not found");
    return NextResponse.json({ success: true, data: userFound }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// DELETE /api/users/[id]
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("User ID is required");

  const userFound = await User.findById(id);
  if (!userFound) throw new NotFoundError("User not found for id: " + id);

  try {
    await dbConnect();
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) throw new NotFoundError("User not found for id: " + id);
    return NextResponse.json({ success: true, message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT /api/users/[id]
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("User ID is required");

  try {
    await dbConnect();

    const body = await request.json();
    const validateData = UserSchema.partial().parse(body);

    const updateUser = await User.findByIdAndUpdate(id, validateData, {
      new: true,
    });

    if (!updateUser) throw new NotFoundError("User not found for id: " + id);
    return NextResponse.json({ success: true, data: updateUser }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
