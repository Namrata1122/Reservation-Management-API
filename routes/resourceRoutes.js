const express = require('express');
const router = express.Router();

const {
    getAllResources,
    createResource,
    getResource,
    updateResource,
    deleteResource
} = require('../controller/resourceController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');
const authorizeRoles = require('../middleware/authorizationMiddleware');

router.route('/').get(getAllResources)
.post(createResource);

router.route('/:id').get(getResource)
.put(updateResource)
.delete(deleteResource);

module.exports = router;