import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'express';

interface User {
  _id: string;
  role: string;
  email: string;
}


declare module 'express' {
  export interface Request {
    user?: User;  
  }
} 

const key: string | undefined = process.env.SECRET_KEY;

async function isUser(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization');
    const realToken = await isAuth(token!);
    const decode: any = jwt.verify(realToken, key!);

    if(decode.type != 'User'){
      return res.status(403).json({message: 'unauthorized'});
    }
    req.user = decode;
    next();
  } catch (err: any) {
    console.log(err);
    return res.status(403).json({message: 'unauthorized'});
  }
}


async function isSeller(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization');
    const realToken = await isAuth(token!);
    const decode: any = jwt.verify(realToken, key!);
    if(decode.role != 'seller'){
      return res.status(403).json({message: 'unauthorized'});
    }
    return next();
  } catch (error) {
    return res.status(500).json({message: 'internal_error'});
  }
  
}

async function isAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization');
    const realToken = await isAuth(token!);
    const decode: any = jwt.verify(realToken, key!);
    if(decode.role != 'admin'){
      return res.status(403).json({message: 'unauthorized'});
    }
    return next();
  } catch (error) {
    return res.status(500).json({message: 'internal_error'});
  }
  
}

async function isAuth(token: string) {
  try {
    if (!token) {
      throw new Error('Forbidden');
    }
    const tokenParts = token.split(' ');
    if (tokenParts[0] !== 'Bearer') {
      throw new Error('Forbidden');
    }
    return tokenParts[1];
  } catch (error: any) {
    throw new Error('Unauthorized');
  }
}


export { isUser, isSeller, isAdmin };