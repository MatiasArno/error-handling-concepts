import { Router } from "express";
import MainController from "../controllers/main-controller";
import tryCatch from "../utils/try-catch";
import wrongMethodHandler from "../middlewares/wrong-method";
import wrongURIHandler from "../middlewares/wrong-uri";
import errorHandlder from "../middlewares/error-handler";

const router = Router();

router.get('/', tryCatch(MainController.getInfo));
router.post('/login', tryCatch(MainController.login));

router.all('/', wrongMethodHandler);
router.all('/login', wrongMethodHandler);
router.all('*', wrongURIHandler);

router.use(errorHandlder);

export default router;