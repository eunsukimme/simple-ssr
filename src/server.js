const express = require('express')
require("@babel/register");
const fs = require('fs');
const path = require('path');
const { counterApp } = require('./app-server')

const app = express()
const port = 3000

app.use('/assets', express.static('dist/assets'))

app.get('/', (req, res) => {
    //   TODO: Counter 앱을 SSR 해서 html 을 내려준다
    // step 1: html 가져와야죠
    const template = fs.readFileSync(path.resolve('dist/index.html'), { encoding: 'utf-8' })
    
    // step 2: <Counter /> 렌더링 해줘야죠(app-server.js 에서 처리해줌)

    // step 3: 렌더링된  <Counter /> 를 html에 포함해서 응답을 내려줍니다
    const html = template.replace('<div id="root"></div>', `<div id="root">${counterApp}</div>`)

    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})