import students from './students/students';
import { Express } from 'express-serve-static-core';

const routerApi = (app:Express) => {
    app.use('/api/v1/students', students);
};

export default routerApi;
