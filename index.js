var vhost = require('vhost');
var express = require('express');

express()
.use(vhost('dev.localhost', require('../BotsViewer/api/')))
.use(vhost('localhost', require('../BotsViewer/client/server/').app))
.listen(80)