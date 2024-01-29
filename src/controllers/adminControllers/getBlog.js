import { BlogDetails } from "../../models";

const getBlog = async (req, res) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});
        const blog = await BlogDetails.findOne({
            where : {
                id: req.params.id
            }
        });

        if(!blog) {
            return res.status(400).json({
                status: 400,
                errorMessage: `No blogs is available in such name.`
            })
        };

        return res.status(200).json({
            status: 200,
            blog
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Somethong went wrong in getting blog data: ${error}`
        })
    }
};

export default getBlog;