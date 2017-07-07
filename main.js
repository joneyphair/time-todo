'use strict';

const { app, BrowserWindow } = require('electron');

var win = null;

app.on('ready', function () {

    win = new BrowserWindow({
        height: 500,
        width: 300
    });

    win.loadURL('http://localhost:8080');
    //win.loadURL('file://' + __dirname + '/app/index.html');


});
