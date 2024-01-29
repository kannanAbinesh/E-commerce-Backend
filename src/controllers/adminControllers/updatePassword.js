import bcrypt from 'bcrypt';
import { AdminPrivileges } from "../../models";

const updatePassword = async (req, res) => {

    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : "please login and try again"});
        
        const isValid = await AdminPrivileges.findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                id: req.credentials.userId
            }
        });

        if(!isValid) return res.status(400).json({ errorMessage: 'Incorrect credentials '});
        if(bcrypt.compareSync(req.body.oldPassword, isValid.password)) {

            const updatePassword = await AdminPrivileges.update({
                password: bcrypt.hashSync(req.body.newPassword, await bcrypt.genSaltSync(10))
            },{
                where: {
                    id: req.credentials.userId
                }
            });
    
            if(updatePassword){
                return res.status(200).json({
                    status: 200,
                    successMessage: 'Password has been updated successfully',
                    result: {
                        userId: isValid.id,
                        email: isValid.email
                    }
                });
            };

        };
        
        return res.status(400).json({
            status: 400,
            errorMessage: 'Incorrect password'
        })
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in updating admin password: ${error}`
        })
    }
};

export default updatePassword;