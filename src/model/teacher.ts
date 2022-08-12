import { Schema, model } from 'mongoose';

interface ITeachers {
    name: string,
    lastname: string,
    subjects: string[],
    image?: string,
    phone?: number
}

const teacherSchema = new Schema<ITeachers>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    subjects: { type: [String], required: true },
    image: { type: String, required: false },
    phone: { type: Number, required: false },
});

const Teacher = model<ITeachers>('teacher', teacherSchema); 

export { Teacher };