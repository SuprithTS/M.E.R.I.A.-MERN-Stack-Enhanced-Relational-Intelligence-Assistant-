import {Router} from "express";
import userRoutes from "./user-routes.js"
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user",userRoutes); //domian//api/v1/user
appRouter.use("/chats",chatRoutes); //domian//api/v1/cahts

export default appRouter;