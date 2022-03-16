





//导入express模块
const express = require("express"); 
const articles = require("./dummydata/articles");


//创建web服务器
const server = express(); 


const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;


//监听GET和POST请求
server.get('/', (req,res) => {
    res.send("API is running")
})

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});



server.get('/api/articles',(req,res) =>{
    res.json(articles);
});


//调用app.listen()函数启动服务器
server.listen(5000, console.log("server is working and listening PORT 5000"));