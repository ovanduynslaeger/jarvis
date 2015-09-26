var apiJeedom = require('../controllers/api_jeedom_ctrl');

exports.findAll = function (cb) {

    apiJeedom.getDevices(function (response) {
//        var json = JSON.parse(response);
        
var json =
{
    "jsonrpc": "2.0",
    "id": null,
    "result": [
        {
            "id": "5",
            "name": "Sortir",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "0",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:15:38",
                "autorefresh": "",
                "updatetime": "2015-04-04 01:00:21"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "15",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "5",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/3/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "solo": "true",
                            "backgroundcolor": "#F79F81",
                            "photo": "/front/static/images/exit.svg"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "555",
            "name": "Sortir",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "0",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:15:38",
                "autorefresh": "",
                "updatetime": "2015-04-04 01:00:21"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "151",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "5",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/3/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "solo": "true",
                            "backgroundcolor": "#00BB00",
                            "photo": "/front/static/images/SHUTTER.svg"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "69",
            "name": "Plafonier chambre",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-07-06 22:21:29",
                "autorefresh": "",
                "updatetime": "2015-07-07 18:51:23"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/SOCKET.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "445",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "69",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12345678/device/1/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-prise\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "446",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "69",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/11/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "13",
            "name": "Volet Bureau",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:21:29",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:52:31"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "60",
            "cmds": [
                {
                    "id": "70",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "13",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/0/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "71",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "13",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/0/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "37",
            "name": "Lampe chambre damis",
            "logicalId": "",
            "object_id": "14",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-04 09:24:50",
                "autorefresh": "",
                "updatetime": "2015-04-04 09:25:40"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "196",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "37",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/2/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "icon": "radio-button-checked",
                            "style": "button"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "197",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "37",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/2/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "4",
            "name": "Lampe de chevet",
            "logicalId": "",
            "object_id": "12",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:13:31",
                "autorefresh": "",
                "updatetime": "2015-04-04 01:01:32"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "12",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "4",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/1/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "13",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "4",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/1/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "8",
            "name": "Volet Fenêtre Cuisine",
            "logicalId": "",
            "object_id": "2",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:14:19",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:53:03"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "10",
            "cmds": [
                {
                    "id": "60",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "8",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/9/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "61",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "8",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/9/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "9",
            "name": "Volet Porte Cuisine",
            "logicalId": "",
            "object_id": "2",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:15:50",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:53:11"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "20",
            "cmds": [
                {
                    "id": "62",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "9",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/8/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "63",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "9",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/8/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "57",
            "name": "Geoloc",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "geoloc",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-05-30 12:47:32",
                "noSpecifyWidget": "0",
                "updatetime": "2015-05-31 11:09:53"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": null,
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "278",
                    "logicalId": null,
                    "eqType": "geoloc",
                    "name": "Maison",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "57",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "mode": "fixe",
                        "coordinate": "50.6561908,2.8341969",
                        "noHighways": "0",
                        "from": "278",
                        "to": "278"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "50.6561908,2.8341969"
                },
                {
                    "id": "279",
                    "logicalId": null,
                    "eqType": "geoloc",
                    "name": "Travail",
                    "order": "1",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "57",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "mode": "fixe",
                        "coordinate": "50.6056306,3.1047807",
                        "from": "278",
                        "to": "278",
                        "noHighways": "0"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "50.6056306,3.1047807"
                },
                {
                    "id": "280",
                    "logicalId": null,
                    "eqType": "geoloc",
                    "name": "MaisonTravailAuto",
                    "order": "2",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "57",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "mode": "travelTime",
                        "coordinate": "",
                        "from": "278",
                        "to": "279",
                        "noHighways": "0"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "23"
                },
                {
                    "id": "292",
                    "logicalId": null,
                    "eqType": "geoloc",
                    "name": "MaisonTravail",
                    "order": "3",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "57",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "mode": "travelTime",
                        "coordinate": "",
                        "from": "278",
                        "to": "279",
                        "noHighways": "1"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "44"
                }
            ]
        },
        {
            "id": "27",
            "name": "Jour",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 19:22:54",
                "commentaire": "",
                "updatetime": "2015-05-10 22:47:29"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "137",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "27",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1,
                        "value": 0
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "139",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "27",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "137"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "140",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "27",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "137"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "48",
            "name": "Present",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-05-10 22:39:27",
                "commentaire": "",
                "updatetime": "2015-05-10 22:47:13"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "242",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "48",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "243",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "48",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "242"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "244",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "48",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "242"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "70",
            "name": "Congé",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-07-14 16:38:14",
                "commentaire": "",
                "updatetime": "2015-07-14 17:12:58"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "449",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "70",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": 0,
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": 1,
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": ""
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "450",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "70",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "449"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "451",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "70",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "449"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "26",
            "name": "Meteo Fleurbaix",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "weather",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 18:50:34",
                "refreshCron": "*/30 * * * *",
                "city": "591120",
                "historize": "0",
                "fullMobileDisplay": "1",
                "updatetime": "2015-06-21 00:51:52",
                "city_name": "Fleurbaix"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": 1
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "124",
                    "logicalId": "condition",
                    "eqType": "weather",
                    "name": "Condition",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "0",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Nuageux"
                },
                {
                    "id": "133",
                    "logicalId": "condition_1",
                    "eqType": "weather",
                    "name": "Condition +1",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "1",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Nuageux"
                },
                {
                    "id": "134",
                    "logicalId": "condition_2",
                    "eqType": "weather",
                    "name": "Condition +2",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "2",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Plutôt ensoleillé"
                },
                {
                    "id": "135",
                    "logicalId": "condition_3",
                    "eqType": "weather",
                    "name": "Condition +3",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "3",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Pluvieux l'après-midi"
                },
                {
                    "id": "136",
                    "logicalId": "condition_4",
                    "eqType": "weather",
                    "name": "Condition +4",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "4",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Partiellement nuageux"
                },
                {
                    "id": "117",
                    "logicalId": "condition_now",
                    "eqType": "weather",
                    "name": "Condition Actuelle",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "condition"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "Nuageux avec du vent"
                },
                {
                    "id": "120",
                    "logicalId": "sunset",
                    "eqType": "weather",
                    "name": "Coucher du soleil",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "sunset"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "2140"
                },
                {
                    "id": "119",
                    "logicalId": "wind_direction",
                    "eqType": "weather",
                    "name": "Direction du vent",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "wind_direction"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "250"
                },
                {
                    "id": "115",
                    "logicalId": "humidity",
                    "eqType": "weather",
                    "name": "Humidité",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "%",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "humidity"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "56"
                },
                {
                    "id": "121",
                    "logicalId": "sunrise",
                    "eqType": "weather",
                    "name": "Lever du soleil",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "sunrise"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "605"
                },
                {
                    "id": "116",
                    "logicalId": "pressure",
                    "eqType": "weather",
                    "name": "Pression",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "Pa",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "pressure"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "982.05"
                },
                {
                    "id": "114",
                    "logicalId": "temperature",
                    "eqType": "weather",
                    "name": "Température",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "temp"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "19"
                },
                {
                    "id": "123",
                    "logicalId": "temperature_max",
                    "eqType": "weather",
                    "name": "Température Max",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "0",
                        "data": "high"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "21"
                },
                {
                    "id": "126",
                    "logicalId": "temperature_1_max",
                    "eqType": "weather",
                    "name": "Température Max +1",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "1",
                        "data": "high"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "19"
                },
                {
                    "id": "128",
                    "logicalId": "temperature_2_max",
                    "eqType": "weather",
                    "name": "Température Max +2",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "2",
                        "data": "high"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "21"
                },
                {
                    "id": "130",
                    "logicalId": "temperature_3_max",
                    "eqType": "weather",
                    "name": "Température Max +3",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "3",
                        "data": "high"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "22"
                },
                {
                    "id": "132",
                    "logicalId": "temperature_4_max",
                    "eqType": "weather",
                    "name": "Température Max +4",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "4",
                        "data": "high"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "23"
                },
                {
                    "id": "122",
                    "logicalId": "temperature_min",
                    "eqType": "weather",
                    "name": "Température Min",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "0",
                        "data": "low"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "13"
                },
                {
                    "id": "125",
                    "logicalId": "temperature_1_min",
                    "eqType": "weather",
                    "name": "Température Min +1",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "1",
                        "data": "low"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "11"
                },
                {
                    "id": "127",
                    "logicalId": "temperature_2_min",
                    "eqType": "weather",
                    "name": "Température Min +2",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "2",
                        "data": "low"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "11"
                },
                {
                    "id": "129",
                    "logicalId": "temperature_3_min",
                    "eqType": "weather",
                    "name": "Température Min +3",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "3",
                        "data": "low"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "9"
                },
                {
                    "id": "131",
                    "logicalId": "temperature_4_min",
                    "eqType": "weather",
                    "name": "Température Min +4",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "°C",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "4",
                        "data": "low"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "11"
                },
                {
                    "id": "118",
                    "logicalId": "wind_speed",
                    "eqType": "weather",
                    "name": "Vitesse du vent",
                    "order": null,
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "km/h",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "day": "-1",
                        "data": "wind_speed"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "41.84"
                }
            ]
        },
        {
            "id": "61",
            "name": "EtatAlarme",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "pushbullet",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-05-30 17:56:45",
                "token": "Hzs3AADI2F3TcNZJnHUnk970FhWza52P",
                "isPushEnabled": "1",
                "isInteractionEnabled": "0",
                "dismissInitialCommandeInReply": "0",
                "timestamp": 1437831341.8484,
                "lastvalue": "off",
                "updatetime": "2015-07-25 15:35:42"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "Communication": 1
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "287",
                    "logicalId": null,
                    "eqType": "pushbullet",
                    "name": "jeedom_61",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "61",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "deviceid": "ujEQgzukaxEsjzYoOQ0FmC",
                        "isPushChannel": "1",
                        "isResponseDevice": "0"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": "off"
                },
                {
                    "id": "288",
                    "logicalId": null,
                    "eqType": "pushbullet",
                    "name": "Tous les devices",
                    "order": "1",
                    "type": "action",
                    "subType": "message",
                    "eqLogic_id": "61",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "deviceid": "all",
                        "pushdeviceids": "",
                        "isResponseDevice": "0"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "23",
            "name": "Tous les volets",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:11:40",
                "commentaire": "",
                "updatetime": "2015-05-16 12:05:19"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "97",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "23",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1,
                        "value": 0
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "98",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "up",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "23",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "97",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "99",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "down",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "23",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "97",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "66",
            "name": "Alarme",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-06-21 18:37:52",
                "commentaire": "",
                "updatetime": "2015-06-21 18:39:09"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "1",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "408",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "66",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "409",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Desactiver",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "66",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "408"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "410",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Activer totalement",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "66",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "408"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "411",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Activer partiellement",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "66",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "2",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "408"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "21",
            "name": "Volets Avant",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:09:06",
                "commentaire": "",
                "updatetime": "2015-05-16 12:04:58"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "1",
            "cmds": [
                {
                    "id": "104",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "21",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": 0,
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": 1,
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "value": 0
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "93",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "up",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "21",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "104",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "94",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "down",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "21",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "104",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "24",
            "name": "Volets Arrières",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:17:37",
                "commentaire": "",
                "updatetime": "2015-05-16 12:05:07"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "2",
            "cmds": [
                {
                    "id": "108",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "24",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1,
                        "value": 0
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "109",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "up",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "24",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "108",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "110",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "down",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "24",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "108",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "6",
            "name": "Lecteur Vidéo",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "xbmc",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:19:19",
                "addr": "192.168.0.16:9080",
                "login": "",
                "password": "",
                "playerid": "1",
                "volume_inc": "1",
                "mac_address": "",
                "has_image_fond": "0",
                "has_system": "0",
                "has_pad": "1",
                "has_volume": "1",
                "has_playback": "1",
                "has_media": "1",
                "has_status": "0",
                "updatetime": "2015-05-31 00:07:11"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "0",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/VIDEO.svg",
                    "nav": "HTPC",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "223",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Pause",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.PlayPause",
                        "parameters": "\"playerid\": #playerid#, \"play\": \"toggle\"",
                        "group": "playback"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-pause\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "185",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "TVsList",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"TvShowTitles\" ]",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" techno-television4\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "183",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "VolumeDown",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetVolume",
                        "parameters": "\"volume\": #decrement#",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-down\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "184",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "VolumeUp",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetVolume",
                        "parameters": "\"volume\": #increment#",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-up\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "23",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Down",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Down",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-down\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "32",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Home",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Home",
                        "parameters": "",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-home\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "20",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Left",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Left",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-left\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "33",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "MoviesList",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"MovieTitles\" ]",
                        "group": "media",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" maison-cinema1\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:movie"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "25",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Mute",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetMute",
                        "parameters": "\"mute\": \"toggle\"",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-off\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "21",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "OK",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Select",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "22",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Right",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Right",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-right\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "19",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Up",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Up",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-up\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "153",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "Info",
                    "order": "12",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Info",
                        "parameters": "",
                        "group": "",
                        "calculValueOffset": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "info-outline"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "154",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "SubTitleOn",
                    "order": "13",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.SetSubtitle",
                        "parameters": "\"playerid\": #playerid#, \"subtitle\": \"on\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "editor:insert-comment"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "155",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "SubTitleOff",
                    "order": "14",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.SetSubtitle",
                        "parameters": "\"playerid\": #playerid#, \"subtitle\": \"off\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "editor:mode-comment"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "150",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "FastBack",
                    "order": "15",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"bigbackward\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-previous",
                            "sorting": "10"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "27",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "StepBackward",
                    "order": "16",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"smallbackward\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-step-backward\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:fast-rewind",
                            "sorting": "20"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "28",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Play",
                    "order": "17",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.PlayPause",
                        "parameters": "\"playerid\": #playerid#, \"play\": \"toggle\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-play\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:play-arrow",
                            "sorting": "40"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "30",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Stop",
                    "order": "18",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Stop",
                        "parameters": "\"playerid\": #playerid#",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-stop\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:stop"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "31",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "StepForward",
                    "order": "19",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"smallforward\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-step-forward\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:fast-forward"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "151",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "FastForward",
                    "order": "20",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "6",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"bigforward\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-next"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "14",
            "name": "Ecran cinéma",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:34:11",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:53:53"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "1",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "72",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "14",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/10/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "73",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "14",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/10/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "15",
            "name": "Prise Vidéoprojecteur",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:35:35",
                "autorefresh": "",
                "updatetime": "2015-05-08 00:19:34"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "1",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/SOCKET.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "74",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "15",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/A/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "75",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "15",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/A/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "25",
            "name": "Interrupteur HomeCinéma",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 18:17:23",
                "commentaire": "",
                "updatetime": "2015-04-26 11:59:53"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "1",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "111",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "25",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "112",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "25",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "111",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "113",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "25",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "111",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "31",
            "name": "Navigation",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "xbmc",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-03 19:51:52",
                "addr": "192.168.0.16:9080",
                "login": "",
                "password": "",
                "playerid": "1",
                "volume_inc": "1",
                "mac_address": "",
                "has_image_fond": "0",
                "has_system": "0",
                "has_pad": "1",
                "has_volume": "0",
                "has_playback": "0",
                "has_media": "1",
                "has_status": "0",
                "updatetime": "2015-05-18 19:01:16"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": null,
            "order": "0",
            "cmds": [
                {
                    "id": "179",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "MoviesList",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"MovieTitles\" ]",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" maison-cinema1\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "180",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "TVsList",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"TvShowTitles\" ]",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" techno-television4\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "175",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Down",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Down",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-down\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "172",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Left",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Left",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-left\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "173",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "OK",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Select",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "174",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Right",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Right",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-right\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "171",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Up",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Up",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-up\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "163",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Home",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Home",
                        "parameters": "",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-home\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "235",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "ContextMenu",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.ContextMenu",
                        "parameters": "",
                        "group": ""
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "256",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "PageUp",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.ExecuteAction",
                        "parameters": "\"action\": \"pageup\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "vertical-align-top"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "257",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "PageDown",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.ExecuteAction",
                        "parameters": "\"action\": \"pagedown\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "editor:vertical-align-bottom"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "259",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Back",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "31",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Back",
                        "parameters": "",
                        "group": ""
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "44",
            "name": "TV",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-27 19:20:24",
                "commentaire": "",
                "updatetime": "2015-05-31 00:06:44"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "1",
                "default": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/TV.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "228",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "44",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "229",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "44",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "228",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "230",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "44",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "228",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "62",
            "name": "Télé",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-05-30 21:03:22",
                "commentaire": "",
                "updatetime": "2015-05-31 00:10:17"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "1",
                "default": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "289",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "62",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "290",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "62",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "289",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "291",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "62",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "289",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "32",
            "name": "Freebox",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-03 23:57:40",
                "autorefresh": "",
                "updatetime": "2015-05-16 17:09:38"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "1",
                "default": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/VIDEO.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "186",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=power",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "187",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=power",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "250",
                    "logicalId": null,
                    "eqType": "script",
                    "name": "un",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=1",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": ""
                    },
                    "template": null,
                    "display": {
                        "icon": "",
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "251",
                    "logicalId": null,
                    "eqType": "script",
                    "name": "deux",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=2",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": ""
                    },
                    "template": null,
                    "display": {
                        "icon": "",
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "252",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "home",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=home",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "home"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "253",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "ok",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "32",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=#239#&key=ok",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "done"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "43",
            "name": "Interrupteur Videoprojecteur",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-26 12:40:51",
                "commentaire": "",
                "updatetime": "2015-04-26 22:36:00"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "1",
                "default": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/VIDEO.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "224",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "43",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "225",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "43",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "224",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "227",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "43",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "224",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "1",
            "name": "Lampe",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 19:04:19",
                "autorefresh": "",
                "updatetime": "2015-05-31 00:08:40"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "1",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "1",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/C/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "1",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": "",
                        "updateCmdId": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "2",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "1",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/C/command/off",
                        "noSslCheck": "1",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "updateCmdId": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "2",
            "name": "Spots",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:07:56",
                "autorefresh": "",
                "updatetime": "2015-05-31 00:38:56"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "3",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "2",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/4/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "icon": "radio-button-checked",
                            "style": "button"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "4",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "2",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/4/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "3",
            "name": "Lampadaire",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:09:19",
                "autorefresh": "",
                "updatetime": "2015-04-26 12:00:16"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "5",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "3",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/B/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "11",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "3",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/B/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "20",
            "name": "Lumières du salon",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 16:26:19",
                "commentaire": "",
                "updatetime": "2015-04-07 18:41:40"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/scenario.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "89",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "20",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1,
                        "value": 0
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "90",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "20",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "89",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "91",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "20",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "89",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "71",
            "name": "Prise Lampadaire leds",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-07-17 20:18:14",
                "autorefresh": "",
                "updatetime": "2015-07-25 20:53:26"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "452",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "71",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/D/command/on",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "453",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "71",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#194#/device/D/command/off",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-lumiere-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "75",
            "name": "Lampadaire Leds",
            "logicalId": "117",
            "object_id": "4",
            "eqType_name": "mySensors",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "nodeid": "117",
                "SketchName": "MyLightLED",
                "createtime": "2015-07-25 20:29:31",
                "SketchVersion": "1.0",
                "updatetime": "2015-07-27 19:25:08",
                "commentaire": "",
                "icone": "light",
                "LibVersion": "1.4.1"
            },
            "specificCapatibilities": null,
            "timeout": "0",
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "1",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/ampoule.svg",
                    "categorie": "SOCKET"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "475",
                    "logicalId": "Sensor55",
                    "eqType": "mySensors",
                    "name": "Effet",
                    "order": "0",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": 0,
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "sensorCategory": "16",
                        "sensor": "55",
                        "value": "",
                        "sensorType": "26",
                        "minValue": "",
                        "maxValue": ""
                    },
                    "template": {
                        "mobile": "luminositeIMG",
                        "dashboard": "luminositeIMG"
                    },
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "476",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "UniColor",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "1",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "editor:format-color-fill"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "477",
                    "logicalId": null,
                    "eqType": "mySensors",
                    "name": "Delai",
                    "order": "2",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "sensor": "55",
                        "sensorCategory": "16",
                        "value": "",
                        "sensorType": "25",
                        "minValue": "",
                        "maxValue": ""
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "478",
                    "logicalId": null,
                    "eqType": "mySensors",
                    "name": "Color",
                    "order": "3",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "sensor": "55",
                        "sensorCategory": "16",
                        "value": "",
                        "sensorType": "26",
                        "minValue": "",
                        "maxValue": ""
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "479",
                    "logicalId": null,
                    "eqType": "mySensors",
                    "name": "Brightness",
                    "order": "4",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "sensor": "55",
                        "sensorCategory": "16",
                        "value": "",
                        "sensorType": "27",
                        "minValue": "",
                        "maxValue": ""
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "480",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Middle",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "2",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "forward"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "481",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Blink",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "3",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "image:wb-sunny"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "482",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Elevator",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "4",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "editor:vertical-align-top"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "483",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Dash",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "5",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "more-vert"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "484",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "PingPong",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "6",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "editor:vertical-align-center"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "485",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Intensity",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "7",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "device:brightness-medium"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "486",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "Rainbow",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "8",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "image:palette"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "487",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "RainbowCycle",
                    "order": "12",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "9",
                        "cmdtype": "24",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "button",
                            "icon": "image:camera"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1"
                    },
                    "value": "475",
                    "isVisible": "1"
                },
                {
                    "id": "488",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "setDelay",
                    "order": "13",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "#slider#",
                        "cmdtype": "25",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "minValue": "100",
                        "maxValue": "1000"
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "slide",
                            "icon": "image:timer",
                            "step": "100",
                            "defaultValue": "200"
                            
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1"
                    },
                    "value": "477",
                    "isVisible": "1"
                },
                {
                    "id": "489",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "setBrightness",
                    "order": "14",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "#slider#",
                        "cmdtype": "27",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "minValue": "0",
                        "maxValue": "100"
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "slide",
                            "icon": "device:brightness-medium",
                            "step": "10",
                            "defaultValue": "100"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1"
                    },
                    "value": "479",
                    "isVisible": "1"
                },
                {
                    "id": "490",
                    "logicalId": "",
                    "eqType": "mySensors",
                    "name": "setColor",
                    "order": "15",
                    "type": "action",
                    "subType": "color",
                    "eqLogic_id": "75",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "cmdCommande": "1",
                        "sensor": "55",
                        "request": "#slider#",
                        "cmdtype": "26",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "parameters": {
                            "displayName": "1",
                            "style": "color",
                            "defaultValue": "#0000FF"
                        },
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1"
                    },
                    "value": "478",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "7",
            "name": "Lecteur Audio",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "xbmc",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:21:59",
                "addr": "192.168.0.16:9080",
                "login": "",
                "password": "",
                "playerid": "0",
                "volume_inc": "1",
                "mac_address": "",
                "has_image_fond": "0",
                "has_system": "0",
                "has_pad": "1",
                "has_volume": "1",
                "has_playback": "1",
                "has_media": "1",
                "has_status": "0",
                "updatetime": "2015-07-25 23:30:03"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "1",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/AUDIO.svg",
                    "nav": "HTPC",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "198",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Pause",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.PlayPause",
                        "parameters": "\"playerid\": #playerid#, \"play\": \"toggle\"",
                        "group": "playback"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-pause\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "161",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Mute",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetMute",
                        "parameters": "\"mute\": \"toggle\"",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-off\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "159",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "VolumeDown",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetVolume",
                        "parameters": "\"volume\": #decrement#",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-down\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "160",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "VolumeUp",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Application.SetVolume",
                        "parameters": "\"volume\": #increment#",
                        "group": "volume"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-volume-up\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "157",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "MoviesList",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"MovieTitles\" ]",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" maison-cinema1\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "158",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "TVsList",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "GUI.ActivateWindow",
                        "parameters": "\"window\": \"video\", \"parameters\": [ \"TvShowTitles\" ]",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" techno-television4\"></i>"
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "145",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Down",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Down",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-down\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "54",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Home",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Home",
                        "parameters": "",
                        "group": "media"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-home\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "42",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Left",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Left",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-left\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "43",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "OK",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Select",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "44",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Right",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Right",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-right\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "41",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Up",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Up",
                        "parameters": "",
                        "group": "pad"
                    },
                    "template": null,
                    "display": {
                        "icon": "<i class=\" fa fa-arrow-up\"></i>"
                    },
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "146",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "ContextMenu",
                    "order": "12",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.ContextMenu",
                        "parameters": "",
                        "group": ""
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0"
                },
                {
                    "id": "152",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "Info",
                    "order": "13",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Input.Info",
                        "parameters": "",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "info-outline"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "148",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "FastBack",
                    "order": "14",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"bigstepback\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-previous"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "49",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "StepBackward",
                    "order": "15",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"smallbackward\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-step-backward\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:fast-rewind"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "50",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Play",
                    "order": "16",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.PlayPause",
                        "parameters": "\"playerid\": #playerid#, \"play\": \"toggle\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-play\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:play-arrow"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "52",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "Stop",
                    "order": "17",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Stop",
                        "parameters": "\"playerid\": #playerid#",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-stop\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:stop"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "53",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "StepForward",
                    "order": "18",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"smallforward\"",
                        "group": "playback",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\" fa fa-step-forward\"></i>",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:fast-forward"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "162",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "FastForward",
                    "order": "19",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": null,
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Seek",
                        "parameters": "\"playerid\": #playerid#, \"value\": \"bigstepforward\"",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-next"
                        }
                    },
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "199",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "RTL2",
                    "order": "20",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Open",
                        "parameters": "\"item\":{\"file\":\"plugin://plugin.audio.radio_de/station/5170\"}",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/1f/50/5170/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "200",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "Metropolys",
                    "order": "21",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Open",
                        "parameters": "\"item\":{\"file\":\"plugin://plugin.audio.radio_de/station/4808\"}",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/22/f2/4808/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "201",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "RFM",
                    "order": "22",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Open",
                        "parameters": "\"item\":{\"file\":\"plugin://plugin.audio.radio_de/station/2993\"}",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/58/aa/2993/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "255",
                    "logicalId": "",
                    "eqType": "xbmc",
                    "name": "Radio sans pub",
                    "order": "23",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "7",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "request": "Player.Open",
                        "parameters": "\"item\":{\"file\":\"plugin://plugin.audio.radio_de/station/10598\"}",
                        "group": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "imgbutton",
                            "icon": "http://static.radio.de/images/broadcasts/e6/fa/10598/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "16",
            "name": "Ampli",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:41:26",
                "autorefresh": "",
                "updatetime": "2015-05-29 19:25:01"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "1",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "1",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/AUDIO.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "76",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/SYSTEM_POWER",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "77",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/STANDBY",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "78",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "mute",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/MUTE",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon loisir-microphone52\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "av:volume-off"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "79",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "tv",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/DTV%2fCBL",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "hardware:tv"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "80",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "movie",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/DVD",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "image:panorama-horizontal"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "81",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "volplus",
                    "order": "5",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/VOL%2b/iterate/#slider#",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "0",
                        "maxValue": "10",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "lastCmdValue": "100",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "1",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "slide",
                            "icon": "av:volume-up",
                            "defaultValue": "4",
                            "step": "2"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "156",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "volmoins",
                    "order": "6",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "16",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/lirc/device/Yamaha_RAV302/command/VOL-/iterate/#slider#",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "0",
                        "maxValue": "10",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "lastCmdValue": "100",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "1",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "slide",
                            "icon": "av:volume-down",
                            "defaultValue": "4",
                            "step": "2"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "18",
            "name": "HTPC",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 23:01:19",
                "autorefresh": "",
                "updatetime": "2015-07-25 23:28:49"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "1",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "default": "1",
                "multimedia": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/VIDEO.svg"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "85",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "18",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://#193#:#231#/sarah/launch?key=xbmc",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-on\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "86",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "18",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://192.168.0.16:9080/jsonrpc?request={%22jsonrpc%22:%20%222.0%22,%20%22id%22:%201,%20%22method%22:%20%22Application.Quit%22}",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"icon jeedom-off\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "281",
                    "logicalId": null,
                    "eqType": "script",
                    "name": "etat",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "18",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://192.168.0.16:9080/jsonrpc?request={%22jsonrpc%22:%222.0%22,%22id%22:%221%22,%22method%22:%22Application.GetProperties%22,%20%22params%22:%20{%22properties%22:%20[%22name%22]}}",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "Kodi",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": ""
                    },
                    "template": null,
                    "display": {
                        "icon": "",
                        "invertBinary": "0"
                    },
                    "value": "",
                    "isVisible": "0"
                }
            ]
        },
        {
            "id": "33",
            "name": "Radio",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-04 00:01:10",
                "commentaire": "",
                "updatetime": "2015-05-08 20:13:04"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "1",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "0",
                "multimedia": "0",
                "default": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "photo": "/front/static/images/scenario.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "188",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "33",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "",
                        "returnStateValue": "",
                        "returnStateTime": "",
                        "minValue": "",
                        "maxValue": "",
                        "virtualAction": 1
                    },
                    "template": null,
                    "display": {
                        "invertBinary": "0"
                    },
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "189",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "33",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "188",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "190",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "33",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "188",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "11",
            "name": "Volet Salon Coté",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:18:36",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:55:06"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "40",
            "cmds": [
                {
                    "id": "66",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "11",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/6/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": "",
                        "jeedomPushUrl": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "67",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "11",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/6/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "12",
            "name": "Volet Salon Avant",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:20:20",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:54:50"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "50",
            "cmds": [
                {
                    "id": "68",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "12",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/5/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "69",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "12",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/5/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "10",
            "name": "Volet Séjour",
            "logicalId": "",
            "object_id": "3",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 22:17:16",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:55:29"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
                "default": "0",
                "multimedia": "0"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": {
                    "categorie": "SHUTTER",
                    "photo": "/front/static/images/SHUTTER.svg"
                }
            },
            "order": "30",
            "cmds": [
                {
                    "id": "64",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "up",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "10",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/7/command/up",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-up\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-less"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "65",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "down",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "10",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitchhe/remote/12325261/device/7/command/down",
                        "noSslCheck": "0",
                        "allowEmptyResponse": "0",
                        "doNotReportHttpError": "0",
                        "reponseMustContain": "",
                        "timeout": "",
                        "maxHttpRetry": "",
                        "http_username": "",
                        "http_password": "",
                        "urlXml": "",
                        "xmlNoSslCheck": "0",
                        "xmlTimeout": "",
                        "maxXmlRetry": "",
                        "xml_username": "",
                        "xml_password": "",
                        "urlJson": "",
                        "jsonNoSslCheck": "0",
                        "jsonTimeout": "",
                        "maxJsonRetry": "",
                        "json_username": "",
                        "json_password": "",
                        "minValue": "",
                        "maxValue": "",
                        "updateCmdId": "",
                        "updateCmdToValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "urlHtml": "",
                        "htmlNoSslCheck": "0",
                        "htmlTimeout": "",
                        "maxHtmlRetry": "",
                        "html_username": "",
                        "html_password": ""
                    },
                    "template": {
                        "dashboard": "default",
                        "mobile": "default"
                    },
                    "display": {
                        "icon": "<i class=\"fa fa-arrow-down\"></i>",
                        "invertBinary": "0",
                        "doNotShowNameOnDashboard": "0",
                        "doNotShowNameOnView": "0",
                        "doNotShowStatOnDashboard": "0",
                        "doNotShowStatOnView": "0",
                        "doNotShowStatOnMobile": "0",
                        "forceReturnLineBefore": "0",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "button",
                            "icon": "expand-more"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        }
    ]
};

cb(null,json.result);
        
    });

};
