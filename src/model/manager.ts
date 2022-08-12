import { Schema, model } from 'mongoose';

enum Suscriptions {
    LEVEL1 = 'level1',
    LEVEL2 = 'level1',
}

interface IManager {
    name: string,
    lastname: string,
    image: string,
    level: Suscriptions
}

const managerSchema = new Schema<IManager>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String, required: true },
    level: { type: String, required: true }
});

const Manager = model<IManager>('manager', managerSchema); 

export { Manager };