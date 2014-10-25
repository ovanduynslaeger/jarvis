///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////


var async = require('async'),
    ui_ctrl = require('../back/controllers/ui_ctrl'),
    api_ctrl = require('../back/controllers/api_ctrl')

module.exports = function (app) {

	app.get('/', ui_ctrl.index);

    app.get('/api/device/:code', api_ctrl.deviceFindByCode);

    app.get('/api/devices', api_ctrl.listDevices);

    app.get('/api/device/:code/command/:command/iterate/:iterate', api_ctrl.deviceCommand);

    app.get('/api/device/:code/command/:command', api_ctrl.deviceCommandOne);

    app.get('/api/scenarios', api_ctrl.listScenarios);
    
    app.get('/api/scenario/:code/command/:command', api_ctrl.scenarioCommand);


};