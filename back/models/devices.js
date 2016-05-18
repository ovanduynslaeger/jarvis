var apiJeedom = require('../controllers/api_jeedom_ctrl');

exports.findAll = function (cb) {

    apiJeedom.getDevices(function (response) {
        //var json = JSON.parse(response);
        

var json =
{
    "jsonrpc": "2.0",
    "id": null,
    "result": [
        {
            "id": "5",
            "name": "Prise Radio",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 20:15:38",
                "autorefresh": "",
                "updatetime": "2015-10-31 16:41:28"
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
                    "id": "14",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
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
                        "request": "http://localhost:#192#/rcswitchhe/remote/#195#/device/3/command/on",
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
                "updatetime": "2015-08-31 23:23:25"
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
                "updatetime": "2015-08-31 23:16:41"
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
                "updatetime": "2015-08-31 23:16:56"
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
                "updatetime": "2015-08-31 23:23:40"
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
                "updatetime": "2015-08-31 23:23:59"
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
            "id": "80",
            "name": "Trajet travail",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "wazeintime",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-03 19:21:43",
                "latdepart": "50.656884",
                "londepart": "2.8351811",
                "latarrive": "50.604817",
                "lonarrive": "3.103518",
                "NOA": "0",
                "hide1": "0",
                "hide2": "0",
                "hide3": "0",
                "updatetime": "2015-10-29 19:44:09"
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
                    "id": "709",
                    "logicalId": "lastrefreshret",
                    "eqType": "wazeintime",
                    "name": "Dernier refresh retour",
                    "order": null,
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "563",
                    "logicalId": "lastrefresh",
                    "eqType": "wazeintime",
                    "name": "Dernier refresh",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "551",
                    "logicalId": "time1",
                    "eqType": "wazeintime",
                    "name": "Durée 1",
                    "order": "1",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "553",
                    "logicalId": "time2",
                    "eqType": "wazeintime",
                    "name": "Durée 2",
                    "order": "2",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "555",
                    "logicalId": "time3",
                    "eqType": "wazeintime",
                    "name": "Durée 3",
                    "order": "3",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "557",
                    "logicalId": "timeret1",
                    "eqType": "wazeintime",
                    "name": "Durée retour 1",
                    "order": "4",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "559",
                    "logicalId": "timeret2",
                    "eqType": "wazeintime",
                    "name": "Durée retour 2",
                    "order": "5",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "561",
                    "logicalId": "timeret3",
                    "eqType": "wazeintime",
                    "name": "Durée retour 3",
                    "order": "6",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "min",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "562",
                    "logicalId": "refresh",
                    "eqType": "wazeintime",
                    "name": "Rafraichir",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
                },
                {
                    "id": "550",
                    "logicalId": "routename1",
                    "eqType": "wazeintime",
                    "name": "Trajet 1",
                    "order": "8",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "552",
                    "logicalId": "routename2",
                    "eqType": "wazeintime",
                    "name": "Trajet 2",
                    "order": "9",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "554",
                    "logicalId": "routename3",
                    "eqType": "wazeintime",
                    "name": "Trajet 3",
                    "order": "10",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "556",
                    "logicalId": "routeretname1",
                    "eqType": "wazeintime",
                    "name": "Trajet retour 1",
                    "order": "11",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "558",
                    "logicalId": "routeretname2",
                    "eqType": "wazeintime",
                    "name": "Trajet retour 2",
                    "order": "12",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "560",
                    "logicalId": "routeretname3",
                    "eqType": "wazeintime",
                    "name": "Trajet retour 3",
                    "order": "13",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "80",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": {
                        "onlyChangeEvent": 1
                    },
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                }
            ]
        },
        {
            "id": "81",
            "name": "Pluie Fleurbaix",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "previsionpluie",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-05 10:34:34",
                "villeNom": "Fleurbaix (62840)",
                "ville": "623380",
                "updatetime": "2015-09-05 11:02:30"
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
                    "id": "565",
                    "logicalId": "lastUpdate",
                    "eqType": "previsionpluie",
                    "name": "Dernière mise à jour",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "566",
                    "logicalId": "pluieDanslHeure",
                    "eqType": "previsionpluie",
                    "name": "Pluie prévue dans l heure",
                    "order": "1",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                },
                {
                    "id": "567",
                    "logicalId": "prev0",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 0-5",
                    "order": "2",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "569",
                    "logicalId": "prev10",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 10-15",
                    "order": "3",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "570",
                    "logicalId": "prev15",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 15-20",
                    "order": "4",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "571",
                    "logicalId": "prev20",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 20-25",
                    "order": "5",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "572",
                    "logicalId": "prev25",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 25-30",
                    "order": "6",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "573",
                    "logicalId": "prev30",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 30-35",
                    "order": "7",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "574",
                    "logicalId": "prev35",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 35-40",
                    "order": "8",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "575",
                    "logicalId": "prev40",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 40-45",
                    "order": "9",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "576",
                    "logicalId": "prev45",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 45-50",
                    "order": "10",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "568",
                    "logicalId": "prev5",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 5-10",
                    "order": "11",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "577",
                    "logicalId": "prev50",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 50-55",
                    "order": "12",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "578",
                    "logicalId": "prev55",
                    "eqType": "previsionpluie",
                    "name": "Prévision à 55-60",
                    "order": "13",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "0",
                    "state": ""
                },
                {
                    "id": "564",
                    "logicalId": "prevTexte",
                    "eqType": "previsionpluie",
                    "name": "Previsions Textuelles",
                    "order": "14",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "81",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "1",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1",
                    "state": ""
                }
            ]
        },
        {
            "id": "102",
            "name": "Vacances scolaires",
            "logicalId": "",
            "object_id": "19",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-10-23 18:18:57",
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
                    "id": "690",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "102",
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
                    "id": "691",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "102",
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
                        "infoId": "690"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "692",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "102",
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
                        "infoId": "690"
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
                "refreshCron": "*/10 * * * *",
                "city": "591120",
                "historize": "0",
                "fullMobileDisplay": "1",
                "updatetime": "2015-09-19 09:00:00",
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
                },
                {
                    "id": "663",
                    "logicalId": "refresh",
                    "eqType": "weather",
                    "name": "Rafraichir",
                    "order": null,
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "26",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": null,
                    "template": null,
                    "display": null,
                    "value": null,
                    "isVisible": "1"
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
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
                    "state": ""
                }
            ]
        },
        {
            "id": "100",
            "name": "Chargeur",
            "logicalId": "",
            "object_id": "18",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-10-09 18:58:40",
                "autorefresh": "",
                "updatetime": "2015-10-31 18:23:56"
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
            "order": "12",
            "cmds": [
                {
                    "id": "685",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "100",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/D/command/on",
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
                    "id": "686",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "100",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/D/command/off",
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
                "timestamp": 1446027969.0096,
                "lastvalue": "off",
                "updatetime": "2015-10-28 11:26:15"
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
                    "state": ""
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
                "updatetime": "2015-08-31 23:25:47"
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
            "id": "85",
            "name": "Alarme",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-13 16:57:11",
                "commentaire": "",
                "updatetime": "2015-09-13 16:58:15"
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
                    "id": "592",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "85",
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
                    "id": "593",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "85",
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
                        "infoId": "592",
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
                    "id": "594",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "85",
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
                        "infoId": "592",
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
                },
                {
                    "id": "595",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "partiel",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "85",
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
                        "infoId": "592"
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
            "id": "99",
            "name": "Sortir",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-26 17:50:18",
                "commentaire": "",
                "updatetime": "2015-09-26 18:31:14"
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
                "default": "1"
            },
            "display": {
                "doNotShowNameOnDashboard": "0",
                "doNotShowNameOnView": "0",
                "doNotShowNameOnMobile": "0",
                "doNotShowObjectNameOnView": "0",
                "doNotDisplayBatteryLevelOnDashboard": "0",
                "doNotDisplayBatteryLevelOnView": "0",
                "parameters": []
            },
            "order": "0",
            "cmds": [
                {
                    "id": "682",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Sortie",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "99",
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
                    "id": "683",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "99",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Sortie",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "682",
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
                            "solo": "true",
                            "photo": "/front/static/images/exit.svg",
                            "backgroundcolor": "#B40404"
                        }
                    },
                    "value": "682",
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
                "updatetime": "2015-08-31 23:25:23"
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
                "updatetime": "2015-08-31 23:25:36"
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
                            "icon": "expand-more",
                            "solo": "true",
                            "backgroundcolor": "MediumSeaGreen",
                            "photo": "/front/static/images/SHUTTER.svg"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "101",
            "name": "Chauffage",
            "logicalId": "",
            "object_id": "13",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-10-17 19:10:59",
                "autorefresh": "",
                "updatetime": "2015-10-29 19:21:54"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "1",
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
                    "id": "687",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "101",
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
                            "style": "button",
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "688",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "101",
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
            "id": "106",
            "name": "Lampe boule",
            "logicalId": "",
            "object_id": "13",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-11-01 15:00:34",
                "autorefresh": "",
                "updatetime": "2015-11-01 15:03:38"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "1",
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
                    "id": "711",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "106",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/C/command/on",
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
                    "id": "712",
                    "logicalId": "",
                    "eqType": "script",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "106",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "1",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "requestType": "http",
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/C/command/off",
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
            "id": "79",
            "name": "Lecteur Video",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-01 22:52:16",
                "commentaire": "",
                "updatetime": "2015-09-05 10:25:24"
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
                    "photo": "/front/static/images/AUDIO.svg",
                    "nav": "HTPC",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "530",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioFastForward",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "79",
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
                    "id": "533",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioStepBackward",
                    "order": "1",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "79",
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
                    "id": "532",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioRadio sans pub",
                    "order": "2",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "79",
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
                    "id": "531",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioMetropolys",
                    "order": "3",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "79",
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
                    "id": "534",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#85#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "535",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#86#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                },
                {
                    "id": "547",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "movie",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#33#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:movie"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "536",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "info",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#153#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "info-outline"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "548",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "subon",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#154#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "editor:insert-comment"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "549",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "suboff",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#155#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                    "id": "537",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stepback",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#28#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "533"
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
                            "icon": "av:fast-rewind"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "538",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "fastback",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#150#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:skip-previous"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "539",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "play",
                    "order": "12",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#28#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:play-arrow"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "540",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stop",
                    "order": "13",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#30#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:stop"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "541",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stepforward",
                    "order": "14",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#31#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:fast-forward"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "542",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "forward",
                    "order": "15",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "79",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#151#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "530"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-next"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "93",
            "name": "Ampli",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-16 17:34:18",
                "commentaire": "",
                "updatetime": "2015-09-26 20:44:04"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "1",
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
                    "photo": "/front/static/images/AUDIO.svg",
                    "favorite": "true"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "650",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Volume",
                    "order": "0",
                    "type": "info",
                    "subType": "numeric",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "calcul": "0",
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
                    "id": "656",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#76#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                    "id": "657",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#77#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "659",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "tv",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#79#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "hardware:tv"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "660",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "movie",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#80#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "image:panorama-horizontal"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "661",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "volplus",
                    "order": "5",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#81#",
                        "value": "#slider#",
                        "minValue": "0",
                        "maxValue": "10",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98",
                        "lastCmdValue": "4"
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
                    "id": "662",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "volmoins",
                    "order": "6",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#156#",
                        "value": "#slider#",
                        "minValue": "0",
                        "maxValue": "10",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98",
                        "lastCmdValue": "4"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "slide",
                            "icon": "av:volume-down",
                            "defaultValue": "4",
                            "step": "2"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "658",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "mute",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#78#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "av:volume-off"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "651",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Mini",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Volume",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "650",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "device:signal-cellular-1-bar"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "652",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Moyen",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Volume",
                        "value": "2",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "650",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "device:signal-cellular-2-bar"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "653",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Fort",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Volume",
                        "value": "3",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "650",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "device:signal-cellular-3-bar"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "654",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Maxi",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "93",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Volume",
                        "value": "4",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "650",
                        "actionConfirm": "0",
                        "actionCodeAccess": "a0165dec39fdba2eb267c78463608be6f1ffdf98"
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
                            "icon": "device:signal-cellular-4-bar"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "77",
            "name": "Lecteur Audio",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-09-01 22:12:35",
                "commentaire": "",
                "updatetime": "2015-09-21 18:00:14"
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
                    "photo": "/front/static/images/AUDIO.svg",
                    "nav": "HTPC",
                    "favorite": "true"
                }
            },
            "order": "1",
            "cmds": [
                {
                    "id": "521",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioFastForward",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "77",
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
                    "id": "522",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioMetropolys",
                    "order": "1",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "77",
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
                    "id": "523",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioRadio sans pub",
                    "order": "2",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "77",
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
                    "id": "520",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "SalonLecteur AudioStepBackward",
                    "order": "3",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "77",
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
                    "id": "507",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#85#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "radio-button-checked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "508",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#86#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                },
                {
                    "id": "509",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "info",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#152#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                    "id": "511",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stepback",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#49#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "520"
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
                            "icon": "av:fast-rewind"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "510",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "fastback",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#148#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:skip-previous"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "512",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "play",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#50#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:play-arrow"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "513",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stop",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#52#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:stop"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "514",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "stepforward",
                    "order": "11",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#53#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "av:fast-forward"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "515",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "forward",
                    "order": "12",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#162#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "521"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "av:skip-next"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "516",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "rtl2",
                    "order": "13",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#199#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/1f/50/5170/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "518",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "rfm",
                    "order": "14",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#201#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/58/aa/2993/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "680",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "metro",
                    "order": "15",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#200#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "style": "imgbutton",
                            "icon": "http://static.radio.fr/images/broadcasts/22/f2/4808/c44.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "679",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "rsp",
                    "order": "16",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "77",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#255#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
            "id": "6",
            "name": "Commandes Lecteur Vidéo",
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
                "updatetime": "2015-09-01 22:46:03"
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
            "order": "2",
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
                "updatetime": "2015-08-31 23:27:37"
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
            "order": "3",
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
                    "photo": "../images/SOCKET.svg"
                }
            },
            "order": "4",
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
                            "icon": "radio-button-on"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-08-31 23:27:51"
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
            "order": "5",
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
                "updatetime": "2015-08-31 23:28:02"
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
            "order": "7",
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
                "updatetime": "2015-08-31 23:28:15"
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
            "order": "8",
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
                "updatetime": "2015-08-31 23:28:24"
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
            "order": "9",
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
                    "photo": "../images/VIDEO.svg"
                }
            },
            "order": "11",
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
                            "icon": "radio-button-on"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-08-31 23:19:26"
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
            "order": "12",
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
                "updatetime": "2015-10-09 19:25:15"
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
            "order": "13",
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
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/A/command/on",
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
                        "request": "http://localhost:#192#/rcswitch/group/#684#/device/A/command/off",
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
                "updatetime": "2015-08-31 23:18:07"
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
            "order": "14",
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
                "updatetime": "2015-08-31 23:21:47"
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
            "order": "15",
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
            "id": "76",
            "name": "Leds",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-08-31 19:17:28",
                "commentaire": "",
                "updatetime": "2015-10-28 16:15:17"
            },
            "specificCapatibilities": null,
            "timeout": null,
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
                    "categorie": "SOCKET",
                    "photo": "/front/static/images/ampoule.svg",
                    "favorite": "true"
                }
            },
            "order": "18",
            "cmds": [
                {
                    "id": "491",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "0",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "704"
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
                    "id": "492",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "Etat",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "infoId": "704"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "button",
                            "icon": "radio-button-unchecked"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "696",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "setUni",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#695#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "editor:format-color-fill"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "496",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Middle",
                    "order": "3",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#480#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "forward"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "497",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Blink",
                    "order": "4",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#481#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "image:wb-sunny"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "498",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Elevator",
                    "order": "5",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#482#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "editor:vertical-align-top"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "499",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Dash",
                    "order": "6",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#483#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "more-vert"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "500",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "PingPong",
                    "order": "7",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#484#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "editor:vertical-align-center"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "501",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Intensity",
                    "order": "8",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#485#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "device:brightness-medium"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "502",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "Rainbow",
                    "order": "9",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#486#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "image:palette"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "503",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "RainbowCycle",
                    "order": "10",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#487#",
                        "value": "",
                        "minValue": "",
                        "maxValue": "",
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
                            "icon": "image:camera"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "504",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "setDelay",
                    "order": "11",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#488#",
                        "value": "#slider#",
                        "minValue": "50",
                        "maxValue": "1000",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "lastCmdValue": "50"
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
                        "forceReturnLineAfter": "1",
                        "parameters": {
                            "style": "slide",
                            "icon": "image:timer",
                            "step": "50",
                            "defaultValue": "100",
                            "minValue": "50",
                            "maxValue": "1000"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "505",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "setBrightness",
                    "order": "12",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#489#",
                        "value": "#slider#",
                        "minValue": "0",
                        "maxValue": "100",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "lastCmdValue": "100"
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
                            "style": "slide",
                            "icon": "device:brightness-medium",
                            "step": "10",
                            "defaultValue": "100"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "506",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "setColor",
                    "order": "13",
                    "type": "action",
                    "subType": "slider",
                    "eqLogic_id": "76",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": {
                        "enable": "",
                        "lifetime": ""
                    },
                    "eventOnly": "1",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "#490#",
                        "value": "#slider#",
                        "minValue": "",
                        "maxValue": "",
                        "actionConfirm": "0",
                        "actionCodeAccess": "",
                        "lastCmdValue": "00ff00"
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
                            "style": "color"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "704",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "14",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "76",
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
                "updatetime": "2015-08-31 23:33:48"
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
            "order": "22",
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
            "id": "104",
            "name": "Ambiance Salon",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-10-28 16:59:50",
                "commentaire": "",
                "updatetime": "2015-10-31 17:19:33"
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
            "order": "22",
            "cmds": [
                {
                    "id": "705",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "Etat",
                    "order": "0",
                    "type": "info",
                    "subType": "string",
                    "eqLogic_id": "104",
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
                    "id": "706",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "104",
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
                        "infoId": "705",
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
                    "id": "707",
                    "logicalId": "",
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "104",
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
                        "infoId": "705",
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
                "updatetime": "2015-08-31 23:24:35"
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
            "order": "24",
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
                "updatetime": "2015-08-31 23:24:20"
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
            "order": "25",
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
                "updatetime": "2015-08-31 23:24:51"
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
