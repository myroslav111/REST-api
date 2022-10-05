const express = require('express');

const router = express.Router();

/**
 * our functions which one is responsible for operations with data depending on the route
 */
const ctrl = require('../../controlers/auth');

/** in this wrapper  I took out try catch.  */
const { ctrlWrapper } = require('../../helpers');

/** Schemas joi  */
const { Schemas } = require('../../models/user');

/** in this function I took out validation body of request */
const { validateBody, authenticate } = require('../../middlewares');

/** register path */
router.post(
  '/register',
  validateBody(Schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

/** login path */
router.post(
  '/login',
  validateBody(Schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get(
  '/current',
  authenticate,
  // validateBody(Schemas.registerSchema),
  ctrlWrapper(ctrl.getCurrent)
);
router.get(
  '/logout',
  authenticate,
  // validateBody(Schemas.registerSchema),
  ctrlWrapper(ctrl.logout)
);
module.exports = router;