import { Router } from 'express';

import retornaUserCtrl from '../controllers/retornaUser.ctrl';

const router = Router();

router.post('/',
  retornaUserCtrl.autorizaUser
);

export default router;