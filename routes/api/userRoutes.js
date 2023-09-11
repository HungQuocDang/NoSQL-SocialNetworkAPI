const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  deleteUserById,
  createUser,
  //addFreind,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

router.route('/:userId').delete(deleteUserById);



module.exports = router;
