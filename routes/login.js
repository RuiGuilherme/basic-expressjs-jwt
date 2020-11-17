import express from 'express'
import { authenticateToken, createJWTToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/index', authenticateToken, (req, res, next) => {
	// Qualquer expressão aqui dentro só vai rodar depois de passar pelo authenticateToken
	res.render('index', { title: 'Express' })
})

router.get('/login', (req, res, next) => {
	// Sistema base de login vem aqui, chame o createJWTToken somente após validar o usuario com o banco de dados
	if (req.body.username === 'someuser') {
		res.set('authorization', createJWTToken(req.body.username))
		res.send({
			ok: true,
			mensagem: 'Sucess'
		})
	} else {
		res.sendStatus(401)
	}
})

router.get('/checkToken', authenticateToken, (req, res, next) => {
	res.send({
		ok: true,
		mensagem: 'Sucess'
	})
})

export default router
