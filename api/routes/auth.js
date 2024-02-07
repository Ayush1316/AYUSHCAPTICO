import express from 'express';
import { login, register, registerAdmin } from '../controllers/auth.controller.js';

const router=  express.Router();

//Register
router.post("/register",register);

//register as admin
router.post("/registeradmin",registerAdmin);

//login
router.post("/login",login);


export default router;



