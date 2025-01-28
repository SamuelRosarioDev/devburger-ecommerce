import { Router } from "express";
import multer from "multer";
import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";
import ProductController from "./app/controllers/ProductController";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import authMiddlewares from "./app/middlewares/auth";
import multerConfig from "./config/multer";
import CreatePaymentIntentController from "./app/controllers/stripe/CreatePaymentIntentController";

const routes = new Router();

const uploads = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddlewares);
routes.post("/products", uploads.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", uploads.single("file"), ProductController.update);

routes.post("/categories", uploads.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", uploads.single("file"), CategoryController.update);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

routes.post("/create-payment-intent", CreatePaymentIntentController.store)

export default routes;
