import { Router } from 'express';

import cadastroCtrl from '../controllers/cadastro.ctrl';

const router = Router();

router.post('/',
  cadastroCtrl.createUser
);

export default router;