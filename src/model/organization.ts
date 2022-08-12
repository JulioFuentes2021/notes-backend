import { Schema, model } from 'mongoose';

interface IOrganization {
    student: number,
    teacher: number,
    name: string
}

const organizationSchema = new Schema<IOrganization>({
    student: { type: Number, required: true },
    teacher: { type: Number, required: true },
    name: { type: String, required: true }
});

const Organization = model<IOrganization>('organization', organizationSchema); 

export { Organization };