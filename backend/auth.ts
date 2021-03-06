import { NamedModulesPlugin } from 'webpack';
import {Request, Response} from 'express'
import { User, users } from './users'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config';

export const handleAuthentication = (req:Request,res:Response)=>{
const user:User = req.body
console.log('Consultando usuario '+ user.email)
if(isValid(user)){
    
    const dbUser = users[user.email]
 
    const token = jwt.sign({sub:dbUser.email, 
                            iss:'meat-api',
                            },apiConfig.secret);

    res.json({name:dbUser.name,email:dbUser.email, accessToken:token })
}
else
res.status(403).json({message:'Dados inválidos'})
}

function isValid(user:User){
    if(!user)
    return false
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
}