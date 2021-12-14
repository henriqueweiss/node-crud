import { Router } from "express";
import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { CreateVideoController } from "./controllers/videos/CreateVideoController";
import { DeleteCategoryController } from "./controllers/categories/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/categories/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/videos/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/categories/UpdateCategoryController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes }