import PaymentTypes from '../../models/paymentMethods'

const getPaymentMethods = async (req, res) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});
        const paymentTypes = await PaymentTypes.findAll({});

        if(!paymentTypes || paymentTypes.length === 0) {
            return res.status(400).json({
                status: 400,
                errorMessage: 'No payment methods found.'
            });
        };

        return res.status(200).json({
            status: 200,
            paymentTypes
        });
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in getting payment methodsd: ${error}`
        });
    }
};

export default getPaymentMethods;