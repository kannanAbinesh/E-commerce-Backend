import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../../config";

const createAuthToken = (userDetails, isAdmin) => {
    try {

        let token = jwt.sign(userDetails, jwtSecretKey, { expiresIn : isAdmin ? '24h' : '180d' });
        return token;

    } catch (error) {
        return res.status(400).json({
            errorMessage: `Something went wrong in auth verification: ${error}`
        });
    }
};

export default createAuthToken;