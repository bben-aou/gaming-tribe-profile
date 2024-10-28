import { Router } from "express";
import {login, logout, me , refreshToken, register } from '@controllers/auth.controller';

const router = Router();


router.post('/register',register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token',refreshToken)
router.get('/me',me)


export default router;