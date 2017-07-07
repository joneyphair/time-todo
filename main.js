'use strict';

const { app, BrowserWindow } = require('electron');

var win = null;


app.on('ready', function () {

    win = new BrowserWindow({
        height: 500,
        width: 300
    });

    if(process.env.NODE_ENV !== 'production'){
        win.loadURL('http://localhost:8080');
        return ;
    }
    win.loadURL('file://' + __dirname + '/build/index.html');

});
