
// //创建服务器
// // 导入http模块
// const http = require('http');

// // 创建服务器实例
// const server = http.createServer();

// // 使用服务器实例的on方法，为服务器绑定一个request事件。
// server.on('request', (req, res) => {
//     //只要有客户端请求服务器就会触发request事件，从而调用这个事件处理
//     console.log("接收到客户端请求。")
// })

// // 调用listen(端口号，回调函数)方法即可启动web服务器
// server.listen('80', () => {
//     console.log("服务器已开启，端口为80");
// })




// // req请求对象
// const http = require('http');
// const server = http.createServer();
// // req是请求对象，包含了与客户端相关的数据和属性
// server.on('request', (req) => {
//     // req.url 是客户端请求的url地址
//     console.log(req.url);
//     // req.method 是客户端请求的 method 类型
//     console.log(req.method);
// })
// server.listen(80, () => {
//     console.log("服务器已开启，地址为：http://127.0.0.1:80");
// });


// // req请求对象
// const http = require('http');
// const server = http.createServer();
// // res是响应对象，其中包含了服务器的相关数据和属性
// server.on('request', (req, res) => {

//     // 调用res.setHeader()方法 设置 Content-Type 响应头，解决中文乱码问题。
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     // 或者使用res.writeHead()方法
//     // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
 
//     // 调用res.end()方法，向客户端响应内容并结束这次的qingqiu
//     res.end(`你的请求地址是${req.url},你的请求方式是${req.method}`);

// })
// server.listen(80, () => {
//     console.log("服务器已开启，地址为：http://127.0.0.1:80");
// });



// // moment包    时间格式化对象
// // 安装 npm install moment
// // 导入moment包
// // 使用moment()方法获取时间
// // 使用format()对时间进行格式化
// const moment =require("moment");
// var time = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(time);


// express包   

// 导入express
const express = require('express');

// 创建web服务器
const app = express();

// 监听get请求
app.get('/index/:userId/:time', (req, res) => {
    // 返回客户端请求
    res.send('this is index page,this is get request.');
    console.log(req.params);
}) 

// 监听post请求
app.post('/index', (req, res) => { 
    // 返回客户端请求
    res.send('this is index page,this is post request.');
})

// 静态资源托管
path = require('path')
app.use(express.static(path.join(__dirname, '/public')));

// 导入路由模块
const admin = require('./router/admin.js');
// 注册路由模块
app.use('/admin',admin); 
 
// 启动web服务器
app.listen(80, () => { 
    console.log('server runing at http://localhost:80');
});



