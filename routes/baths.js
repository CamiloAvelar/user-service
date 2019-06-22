import { Router } from 'express';

import bathsCtrl from '../controllers/baths.ctrl';

const router = Router();

router.post('/',
  bathsCtrl.createBath
);

router.get('/:id', 
  bathsCtrl.getBaths
);

export default router;