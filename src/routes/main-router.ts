import { Router } from "express";
import MainController from "../controllers/main-controller";

const router = Router();

router.get('/', MainController.getInfo);
router.post('/mock', MainController.create);

export default router;