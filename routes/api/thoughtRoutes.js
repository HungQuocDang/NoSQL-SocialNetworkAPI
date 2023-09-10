const router = require('express').Router();
const {
  getAllThoughts,
  getONeThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughteleById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getONeThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughteleById);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thought/:thoughtId/responses/:reactionId
router.route('/:thoughtId/responses/:reactionId').delete(deleteReaction);

module.exports = router;
