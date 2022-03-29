import mongoose, { Document, Schema } from 'mongoose'

const UserSchema = new Schema(
    {
        user_rut: { type: String },
        names: { type: String },
        last_names: { type: String },
        user_name: { type: String },
        email: { type: String },
        city: { 
            city_name: String,
            commune_name: String
        }
    },
    {
        timestamps: true,
        collection: 'user'
    }
);

export default mongoose.model<Document>('user', UserSchema);