const express= require('express')
const router=express.Router()

const { createPost, deletePost, getPost, updatePost } =require('../Controllers/postController');

// Add routes
router.route('/Post').get(getPost).post(createPost);
router.route('/Post/:id').put(updatePost).delete(deletePost);

// router.route.post('/', SessionController.store);
// router.route.put('/', SessionController.store);
// router.route.delete('/', SessionController.store);

module.exports = router;
