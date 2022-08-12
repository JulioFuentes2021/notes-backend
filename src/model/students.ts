import { Schema, model } from 'mongoose';

interface IStudents {
    name: string,
    lastname: string,
    grade: string,
    phone?: number,
    notes?: undefined,
    image?:string
}

const studentSchema = new Schema<IStudents>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    grade: { type: String, required: true },
    phone: { type: Number, required: false },
    notes: { type: undefined, required: false },
    image: { type: String, required: false },
});

const Student = model<IStudents>('student', studentSchema); 

export { Student };