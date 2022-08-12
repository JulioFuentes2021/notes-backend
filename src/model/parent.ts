import { Schema, model } from 'mongoose';

interface IParent {
    name: string,
    lastname: string,
    phone: number,
    relative: number
}

const parentSchema = new Schema<IParent>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    relative: { type: Number, required: true },
});

const Parent = model<IParent>('parent', parentSchema); 

export { Parent };