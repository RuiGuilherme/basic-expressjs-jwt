import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
// Acredito que eu não deveria usar o crypto :D
import crypto from 'crypto'
dotenv.config()

export const authenticateToken = (req, res, next) => {
	// Obtem o token JWT da Header Requet
	const token = req.headers['authorization']
	if (token == null) return res.sendStatus(401) // Se não tiver um token retorna 401

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403) // caso exista qualquer erro com o jwt retorna 403
		req.user = user
		// Caso a execução chegue até aqui ele valida o JWT e segue a diante.
		next()
	})
}

export const createJWTToken = (username) => {
	// você pode adicionar itens aqui
	return jwt.sign({ nome: username, chave: crypto.randomBytes(16).toString('hex').toUpperCase() }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
}
