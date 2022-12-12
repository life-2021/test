// 导包
const express = require('express');
// 创建路由对象
const admin = express.Router();

admin.get('/set', (req, res) => { 
    res.send('this is admin set page,this is a get request.');
})

admin.post('/add', (req, res) => { 
    res.send('this is add admin page,this is a post request.');
})

// 导出
module.exports = admin;