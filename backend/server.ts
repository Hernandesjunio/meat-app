import { handleAuthentication } from './auth';
import {handleAuthorization} from './authz'
import * as jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'

var server: Express = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
    
server.get('/',(req, res)=>{
  res.send('Hello')
})

server.get('/hello',(req, res)=>{
  res.send('Hello')
})

console.log(handleAuthentication)

//middlware para login
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)

// Use default router
server.use(router);
 
const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, function () {
  console.log('JSON Server is running on https://localhost:3001/');
});
