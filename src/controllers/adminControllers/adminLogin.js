import bcrypt from 'bcrypt';
import { AdminPrivileges } from "../../models";
import createAuthToken from '../../helpers/createAuthToken';

const adminLogin = async (req, res) => {
    try {
        
        const isAdmin = await AdminPrivileges.findOne({
            attributes: ['id', 'email', 'password'],
            where : {
                id: req.body.userId,
                email : req.body.email
            },
            raw: true
        });

        /* is valid email id. */
        if(!isAdmin) return res.status(400).json({ errorMessage : "Incorrect email id "});

        /* is valid password. */
        if(!bcrypt.compareSync(req.body.password, isAdmin.password)){
            return res.status(400).json({
                status: 400,
                errorMessage: `Incorrect password`
            });
        };

        const token = await createAuthToken({userId: isAdmin.id, isAdmin: true, email: isAdmin.email }, true);
        return res.status(200).json({
            status: 200,
            result: {
                token,
                userId: isAdmin.id,
                email: isAdmin.email
            }
        });

    } catch (error) {
        
        return res.status(400).json({
            status: 400,
            errorMessage: 'Something went wrong:' + error
        });
        
    }
};

export default adminLogin;