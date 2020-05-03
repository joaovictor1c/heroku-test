import { Router } from 'express';

import CourierController from './app/controllers/CourierController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/courier', CourierController.store);
routes.post('/company', CompanyController.store);

routes.post('/sessionsDelivery', SessionController.storeDelivery);
routes.post('/sessionsCompany', SessionController.storeCompany);

routes.use(authMiddleware);

routes.get('/company', CompanyController.index);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.uptade);

export default routes;
