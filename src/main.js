'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';

/*
 * Font awesome icons
 */
require("font-awesome-webpack");

require("./style.css");

//Add sorting to taps
require("jquery-ui/ui/widgets/sortable");

//Include drop-tetber 
window.Tether = require('tether');
window.Drop = require('tether-drop');

//Popover library
window.Popper  = require('popper.js').default;

const appRouter = require('./router');
window.AppUI = require('./libs/app-ui');
var AppView = require('./views/app_view');



import './libs/jquery.spring-friendly.js';

//Include data tables and bootstramp styles
$.fn.DataTable = require('datatables.net');
require('datatables.net-bs');
require('datatables.net-bs/css/dataTables.bootstrap.css');

var appView = new AppView();

appRouter();

Backbone.history.start();

//Initiailzie Tabdrop
AppUI.I().Tabs().closeTabEvent();
AppUI.I().Tabs().initTabDrop();

//Enable sorting of tabs
$('#bd_nav_tab').sortable();