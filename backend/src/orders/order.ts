import mongoose, { Document, ObjectId, Schema } from "mongoose";

// Schema of Order that send to the database
export interface IOrder extends Document {
    description: string;
    total: number;
    date: Date;
    user: ObjectId;
    business: string;
    items: { title: string, price: number, quantity: number } [];
}

// Set which info need to filled to send schema to database
const OrderSchema: Schema = new Schema({
    description: { type: String, required: true },
    total: { type: Number, required: true },
    data: { type: Date, required: true},
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    business: { type: String, required: true },
    items: [{ title: { type: String, required: true }, price: { type: Number, required: true }, 
        quantity: { type: Number, required: true } }]
});

export default mongoose.model<IOrder>("Order", OrderSchema);