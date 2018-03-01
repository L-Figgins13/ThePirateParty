import jwt from 'jsonwebtoken';
import User from '../server/Models/Users.js';
import config from '../config/index.json';


const authCheck = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).send();
    }

    // this splits the value(token) part of the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, config.jwtSecret)
    .then(decodedToken => {
        const userId = decodedToken.sub;
        
        User.findById(userId)
        .then(user => {
            if(!user){
                res.status(401).send();
            }

            //saves the decoded token information on the request object
            //for user later on in the request life cycle
            
            req.user = user;
            console.log(user);

            next();
        })
        .catch(error => {
            console.log(error);
        })

    })
    .catch(error => {
        res.status(401).send();
    })    
}

export default authCheck;