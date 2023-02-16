import bcrypt from 'bcryptjs';

import User from './userUsuario'


import jwt from 'jsonwebtoken';




const signup = (req, res, next) => {
    // checks if email already exists
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => {
        if (dbUser) {
            return res.status(409).json({message: "email already exists"});
        } else if (req.body.email && req.body.password) {
            // password hash
            bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                if (err) {
                    return res.status(500).json({message: "couldnt hash the password"}); 
                } else if (passwordHash) {
                    return User.create(({
                        email: req.body.email,
                        name: req.body.name,
                        password: passwordHash,
                    }))
                    .then(() => {
                        res.status(200).json({message: "Usuário criado"});
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(502).json({message: "Erro durante a criação"});
                    });
                };
            });
        } else if (!req.body.password) {
            return res.status(400).json({message: "Escolha uma senha"});
        } else if (!req.body.email) {
            return res.status(400).json({message: "Escolha um email"});
        };
    })
    .catch(err => {
        console.log('Erro', err);
    });
};

const login = (req, res, next) => {
    // checks if email exists
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => {
        if (!dbUser) {
            return res.status(404).json({message: "Usuário não encontrado"});
        } else {
            // password hash
            bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
                if (err) { // error while comparing
                    res.status(502).json({message: "Erro durante a checkagem da senha"});
                } else if (compareRes) { // password match
                    const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({message: "Usuário logado em", "token": token});
                } else { // password doesnt match
                    res.status(401).json({message: "Senha inválida"});
                };
            });
        };
    })
    .catch(err => {
        console.log('error', err);
    });
};
