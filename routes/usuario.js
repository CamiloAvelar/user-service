import { Router } from 'express';

import usuarioCtrl from '../controllers/usuario.ctrl';
import middlewares from './middlewares/authorizeMasterPass';

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

router.post('/editar-senha',
  middlewares.AuthorizeMasterPass,
  usuarioCtrl.editPassword
);

export default router;