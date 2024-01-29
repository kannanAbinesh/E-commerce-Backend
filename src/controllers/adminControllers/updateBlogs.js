import { BlogDetails } from "../../models";

const updateBlogs = async (req, res, next) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});
        const updateBlogs = await BlogDetails.update({
            title: req.body.title,
            heading: req.body.heading,
            content: req.body.content
        },{
            where : {
                id: req.params.id
            }
        });

        if(!updateBlogs) {
            return res.status(400).json({
                status: 400,
                errorMessage: 'Couldn\'t update blogs please try again'
            })
        };

        const blogs = await BlogDetails.findOne({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            status: 200,
            errorMessage: "Blogs has been successfully updated.",
            blogs
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in updating blogs: ${error}`
        })
    }
};

export default updateBlogs;