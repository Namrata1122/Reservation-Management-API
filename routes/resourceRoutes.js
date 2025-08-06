const express = require('express');
const router = express.Router();

const {
    getAllResources,
    createResource,
    getResource,
    updateResource,
    deleteResource
} = require('../controller/resourceController');
const authenticateToken = require('../middleware/authenticationMiddleware');
const authorizeRoles = require('../middleware/authorizationMiddleware');

router.route('/').get(getAllResources)
.post(createResource,authenticateToken,authorizeRoles);

router.route('/:id').get(getResource)
.put(updateResource,authenticateToken,authorizeRoles)
.delete(deleteResource,authenticateToken,authorizeRoles);

module.exports = router;