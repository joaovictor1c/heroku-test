import { Router } from 'express';

import DeliveryManController from './app/controllers/DeliveryManController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';
import PreOrderController from './app/controllers/PreOrderController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/deliveryman', DeliveryManController.store);
routes.post('/company', CompanyController.store);

routes.post('/sessionsDelivery', SessionController.storeDelivery);
routes.post('/sessionsCompany', SessionController.storeCompany);

routes.use(authMiddleware);

routes.get('/company', CompanyController.index);

routes.post('/preOrders', PreOrderController.store);
routes.get('/preOrders', PreOrderController.index);

export default routes;
