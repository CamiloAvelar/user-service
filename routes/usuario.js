import { Router } from 'express';

import usuarioCtrl from '../controllers/usuario.ctrl';

const router = Router();

router.post('/cadastrar',
  usuarioCtrl.createUser
);

router.get('/:id',
  usuarioCtrl.getUser
);

router.post('/autorizar',
  usuarioCtrl.authorizeUser
);

router.post('/editar-tempo',
  usuarioCtrl.editUserTime
);

export default router;