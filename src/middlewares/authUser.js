const jwt = require('jsonwebtoken');
require('dotenv').config

const verifyJWT = async (req, res, next) => {    
    const token = req.cookies.accessToken;         
    const secret = process.env.SECRET;    

    if (!token) {
        return res.status(401).json({auth: false, msg: 'Token não informado!'});
    } else {
        jwt.verify(token, secret, async (err, decoded) => {
            if (err) {
                return res.status(401).json({auth: false, msg: 'Token inválido!'});
            } else {                                              
                req.id = decoded.id;
                req.nome = decoded.nome;                
                req.email = decoded.email;                
                req.acesso = decoded.acesso;
                req.status = decoded.status;
                req.visualizar = decoded.visualizar;
                req.criar = decoded.criar;
                req.atualizar = decoded.atualizar;
                req.deletar = decoded.deletar;
                req.ultimoAcesso = decoded.ultimoAcesso;
                next();
            }

            //return res.status(200).json('You're authenticated!');            
        });
    }
};

module.exports = verifyJWT;