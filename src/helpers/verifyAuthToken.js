import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../../config";

const verifyAuthToken = (req, res, next) => {
    try {
        /* check whether auth token is provided. */
        if(req?.headers?.auth) {
            /* verify auth token if provided. */
            jwt.verify(req.headers.auth , jwtSecretKey, (err, decoded) => {
                if(err) {
                    return res.status(400).json({ 
                        errorMessage: `Something went wrong: ${err}`});
                }
            });
            next();
        } else next();

    } catch (error) {
        return res.status(400).json({
            errorMessage: `Something went wrong in auth verification: ${error}`
        });
    }
};

export default verifyAuthToken;