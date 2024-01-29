import { PaymentTypes } from "../../models";

const updatePayments = async (req, res) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});
        const updateData = await PaymentTypes.update({
            isActive: req.body.isActive
        }, {
            where: {
                id: req.params.id
            }
        });

        if(!updateData){
            return res.status(400).json({
                status: 400,
                errorMessage: 'Couldn\'t able to update the payment status.'
            })
        };

        return res.status(200).json({
            status: 200,
            successMessage: 'Payment method types has been successfully updated.'
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in getting payment methodsd: ${error}`
        })
    }
};

export default updatePayments;