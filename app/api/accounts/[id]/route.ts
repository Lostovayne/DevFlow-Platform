import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextRequest, NextResponse } from "next/server";

// GET /api/account/[id]
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("Account ID is required");

  try {
    await dbConnect();
    const AccountFound = await Account.findById(id);
    if (!AccountFound) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: AccountFound }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// DELETE /api/account/[id]
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("Account ID is required");

  const AccountFound = await Account.findById(id);
  if (!AccountFound) throw new NotFoundError("Account not found for id: " + id);

  try {
    await dbConnect();
    const deleteAccount = await Account.findByIdAndDelete(id);
    if (!deleteAccount) throw new NotFoundError("Account not found for id: " + id);
    return NextResponse.json({ success: true, message: "Account deleted successfully" }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT /api/account/[id]
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new Error("Account ID is required");

  try {
    await dbConnect();

    const body = await request.json();
    const validateData = AccountSchema.partial().safeParse(body);
    if (!validateData.success) throw new ValidationError(validateData.error.flatten().fieldErrors);

    const updateAccount = await Account.findByIdAndUpdate(id, validateData, {
      new: true,
    });

    if (!updateAccount) throw new NotFoundError("Account not found for id: " + id);
    return NextResponse.json({ success: true, data: updateAccount }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
