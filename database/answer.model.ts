import { model, models, Schema, Document } from "mongoose";

export interface IAnswer extends Document {
  // Define tus campos aquí
  // ejemplo: name: string;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    // Define la estructura de tu esquema aquí
    // ejemplo: name: { type: String, required: true }
  },
  { timestamps: true }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
