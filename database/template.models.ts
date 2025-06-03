import { model, models, Schema } from "mongoose";

export interface IModel {}

const ModelSchema = new Schema({}, { timestamps: true });

const Model = models?.Model || model("ModelName", ModelSchema);

export default Model;
