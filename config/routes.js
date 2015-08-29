///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////


var ui_ctrl = require('../back/controllers/ui_ctrl'),
    api_ctrl = require('../back/controllers/api_jeedom_ctrl')

module.exports = function (app) {

	app.get('/', ui_ctrl.index);

//	app.get('/param', ui_ctrl.param);

//	app.get('/test', ui_ctrl.test);

//	app.get('/clearcache', ui_ctrl.clearcache);

    app.get('/api/jeedom/cmd/:id', api_ctrl.runDeviceCommand);

    app.get('/api/jeedom/cmd/:id/slide/:slider', api_ctrl.runDeviceCommandSlide);

    app.get('/api/jeedom/cmd/:id/color/:color', api_ctrl.runDeviceCommandColor);



};