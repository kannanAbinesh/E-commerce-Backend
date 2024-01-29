import { BlogDetails } from "../../models";

const deleteBlogs = async (req, res, next) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});
        const deleteBlog = await BlogDetails.destroy({
            where: {
                id: req.params.id,
                isStatic: 0
            }
        });

        if(!deleteBlog) {
            return res.status(400).json({
                status: 400,
                errorMessage: 'Sorry, Couldn\'t delete blogs it may be static data which cannot be deleted'
            });
        };

        return res.status(200).json({
            status: 200,
            successMessage: 'Blog has been successfully deleted'
        })
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in deleting blogs: ${error}`
        });
    }
};

export default deleteBlogs;