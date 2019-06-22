import { Router } from 'express';

import retornaUserCtrl from '../controllers/retornaUser.ctrl';

const router = Router();

router.get('/:id',
  retornaUserCtrl.getUser
);

export default router;