import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get('/listar-usuarios', async (req,res)=>{

    try {
        const users = await prisma.user.findMany({omit: {password: true}})

        res.status(200).json({mesagge: 'Usuarios listados com sucesso', users})

    } catch (error) {
        res.status(500).json({message: 'falha no servidor'})
    }

})

export default router