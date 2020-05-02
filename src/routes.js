import { Router } from 'express';

import DeliveryManController from './app/controllers/DeliveryManController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';
import OrdersConrtoller from './app/controllers/OrdersController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/deliveryman', DeliveryManController.store);
routes.post('/company', CompanyController.store);

routes.post('/sessionsDelivery', SessionController.storeDelivery);
routes.post('/sessionsCompany', SessionController.storeCompany);

routes.use(authMiddleware);

routes.post('/orders', OrdersConrtoller.store);
routes.get('/orders', OrdersConrtoller.index);

export default routes;
