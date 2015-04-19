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
                    "photo": "../images/SHUTTER.svg"
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
                    "photo": "../images/SHUTTER.svg"
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
                    "photo": "../images/SHUTTER.svg"
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
                "updatetime": "2015-04-03 22:28:43"
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
                    "photo": "../images/VIDEO.svg",
                    "nav": "HTPC"
                }
            },
            "order": "0",
            "cmds": [
                {
                    "id": "185",
                    "logicalId": null,
                    "eqType": "xbmc",
                    "name": "TVsList",
                    "order": "0",
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
                    "order": "1",
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
                    "order": "3",
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
                    "order": "4",
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
                    "order": "5",
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
                    "order": "6",
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
                    "order": "7",
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
                    "order": "8",
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
                    "order": "9",
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
                    "order": "10",
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
                    "order": "11",
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
                            "icon": "communication:message"
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
                            "icon": "communication:messenger"
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
                    "order": "14",
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
                    "photo": "../images/SHUTTER.svg"
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
                "updatetime": "2015-03-30 23:10:45"
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
                    "photo": "../images/scenario.svg"
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-04-03 23:58:51"
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
            "display": null,
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
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=23811849&key=power",
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
                            "icon": "settings-power"
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
                        "request": "http://hd1.freebox.fr/pub/remote_control?code=23811849&key=power",
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
                            "icon": "radio-button-off"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "33",
            "name": "Interrupteur Musique",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-04-04 00:01:10",
                "commentaire": "",
                "updatetime": "2015-04-05 11:50:07"
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
                    "photo": "../images/scenario.svg"
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
                    "state": "0"
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-04-04 00:58:50"
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
                    "photo": "../images/ampoule.svg"
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
                        "html_password": ""
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-03-28 19:22:34"
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
                    "photo": "../images/scenario.svg"
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
                    "state": "0"
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
                        "actionCodeAccess": ""
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
                            "icon": "settings-power"
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
            "name": "Lampe bleu",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 19:04:19",
                "autorefresh": "",
                "updatetime": "2015-04-04 00:58:18"
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
                    "photo": "../images/ampoule.svg"
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-04-04 01:01:06"
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
                    "photo": "../images/ampoule.svg"
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
                        "html_password": ""
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
                            "icon": "settings-power",
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-04-04 00:58:30"
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
                            "icon": "settings-power"
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
                "updatetime": "2015-04-05 11:49:01"
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
                    "photo": "../images/AUDIO.svg",
                    "nav": "HTPC"
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
                            "icon": "/images/radio/rtl2.png"
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
                            "icon": "/images/radio/metropolys.jpg"
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
                            "icon": "/images/radio/rfm.png"
                        }
                    },
                    "value": "",
                    "isVisible": "1"
                }
            ]
        },
        {
            "id": "18",
            "name": "XBMC",
            "logicalId": "",
            "object_id": "4",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-21 23:01:19",
                "autorefresh": "",
                "updatetime": "2015-03-30 23:09:40"
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
                    "photo": "../images/VIDEO.svg"
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
                        "request": "http://192.168.0.16:8080/sarah/launch?key=xbmc",
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
                        "actionCodeAccess": ""
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
                            "icon": "settings-power"
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
                        "actionCodeAccess": ""
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
                "updatetime": "2015-04-05 11:31:55"
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
                    "photo": "../images/AUDIO.svg"
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                        "lastCmdValue": 5,
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
                        "forceReturnLineBefore": "1",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "slide",
                            "icon": "av:volume-up"
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
                        "lastCmdValue": 5,
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
                        "forceReturnLineBefore": "1",
                        "forceReturnLineAfter": "0",
                        "parameters": {
                            "style": "slide",
                            "icon": "av:volume-down"
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
                    "photo": "../images/SHUTTER.svg"
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
                            "icon": "expand-more"
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
                    "photo": "../images/SHUTTER.svg"
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
            "id": "5",
            "name": "Radio",
            "logicalId": "",
            "object_id": "8",
            "eqType_name": "script",
            "eqReal_id": null,
            "isVisible": "1",
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
                    "categorie": "SOCKET",
                    "photo": "../images/SOCKET.svg"
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
                        "html_password": ""
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                    "photo": "../images/SHUTTER.svg"
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
                    "photo": "../images/ampoule.svg"
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
                        "html_password": ""
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
                            "icon": "settings-power",
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
                            "icon": "radio-button-off"
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
                    "photo": "../images/ampoule.svg"
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
                        "html_password": ""
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
                            "icon": "settings-power"
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
                            "icon": "radio-button-off"
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
                "updatetime": "2015-03-30 23:14:35"
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
                    "name": "jour",
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
                    "state": "1"
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
                        "infoName": "jour",
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
                        "infoName": "jour",
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
                "updatetime": "2015-04-03 06:15:28",
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
                    "state": "Dégagé"
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
                    "state": "Partiellement nuageux"
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
                    "state": "Partiellement nuageux"
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
                    "state": "Plutôt ensoleillé"
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
                    "state": "Beau"
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
                    "state": "2023"
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
                    "state": "30"
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
                    "state": "47"
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
                    "state": "716"
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
                    "state": "1015.92"
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
                    "state": "10"
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
                    "state": "11"
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
                    "state": "11"
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
                    "state": "15"
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
                    "state": "15"
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
                    "state": "17"
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
                    "state": "1"
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
                    "state": "2"
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
                    "state": "3"
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
                    "state": "4"
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
                    "state": "5"
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
                    "state": "14.48"
                }
            ]
        },
        {
            "id": "29",
            "name": "Presence",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-26 21:37:40",
                "commentaire": "",
                "updatetime": "2015-03-30 23:14:39"
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
                    "id": "141",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "presence",
                    "order": "0",
                    "type": "info",
                    "subType": "binary",
                    "eqLogic_id": "29",
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
                        "value": 1
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
                    "id": "143",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "on",
                    "order": "1",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "29",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "presence",
                        "value": "1",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "141"
                    },
                    "template": null,
                    "display": {
                        "icon": ""
                    },
                    "value": "",
                    "isVisible": "1"
                },
                {
                    "id": "144",
                    "logicalId": null,
                    "eqType": "virtual",
                    "name": "off",
                    "order": "2",
                    "type": "action",
                    "subType": "other",
                    "eqLogic_id": "29",
                    "isHistorized": "0",
                    "unite": "",
                    "cache": null,
                    "eventOnly": "0",
                    "configuration": {
                        "virtualAction": "1",
                        "infoName": "presence",
                        "value": "0",
                        "minValue": "",
                        "maxValue": "",
                        "infoId": "141"
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
            "id": "23",
            "name": "Interrupteur tous les volets",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:11:40",
                "commentaire": "",
                "updatetime": "2015-03-28 19:43:31"
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
                    "photo": "../images/scenario.svg"
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
            "id": "21",
            "name": "Interrupteur Volets Avant",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:09:06",
                "commentaire": "",
                "updatetime": "2015-03-31 21:23:51"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
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
                    "categorie": "SHUTTER",
                    "photo": "../images/scenario.svg"
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
            "name": "Interrupteur Volets Arrières",
            "logicalId": "",
            "object_id": "1",
            "eqType_name": "virtual",
            "eqReal_id": null,
            "isVisible": "1",
            "isEnable": "1",
            "configuration": {
                "createtime": "2015-03-22 17:17:37",
                "commentaire": "",
                "updatetime": "2015-03-31 21:23:58"
            },
            "specificCapatibilities": null,
            "timeout": null,
            "category": {
                "heating": "0",
                "security": "0",
                "energy": "0",
                "light": "0",
                "automatism": "1",
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
                    "categorie": "SHUTTER",
                    "photo": "../images/scenario.svg"
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
        }
    ]
};
        
        cb(null,json.result);
    });

};
