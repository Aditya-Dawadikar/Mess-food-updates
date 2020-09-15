const express = require('express');
const router = express.Router();

const currentMenuController = require('../../controllers/modules/currentMenu');

router.get('/all', currentMenuController.getAllMenus);

router.get('/:id', currentMenuController.getMenuById);

router.post('/new', currentMenuController.postNewMenu);

router.patch('/update/:id', currentMenuController.updateCurrentMenuById);

router.delete('/delete/:id', currentMenuController.deleteCurrentMenuById);

module.exports = router;