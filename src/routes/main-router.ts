import { Router } from 'express';
import MainController from '../controllers/main-controller';
import tryCatch from '../utils/try-catch';
import wrongMethodHandler from '../middlewares/wrong-method';
import wrongURIHandler from '../middlewares/wrong-uri';
import errorHandlder from '../middlewares/error-handler';

const router = Router();

router.get('/api/', tryCatch(MainController.getInfo));
router.post('/api/login', tryCatch(MainController.login));

router.all('/api/', wrongMethodHandler);
router.all('/api/login', wrongMethodHandler);
router.use(wrongURIHandler);

router.use(errorHandlder);

export default router;
