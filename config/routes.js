///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////


var ui_ctrl = require('../back/controllers/ui_ctrl'),
    api_ctrl = require('../back/controllers/api_jeedom_ctrl')

module.exports = function (app) {

	app.get('/', ui_ctrl.index);

	app.get('/macro', ui_ctrl.macro);

    app.get('/api/jeedom/cmd/:id', api_ctrl.runDeviceCommand);

    app.get('/api/jeedom/cmd/:id/slide/:slider', api_ctrl.runDeviceCommandSlide);

};