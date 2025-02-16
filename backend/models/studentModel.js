import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true }, 
    iin: { type: String, required: true, unique: true }, 
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
