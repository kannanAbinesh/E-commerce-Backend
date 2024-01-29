import { BlogDetails } from "../../models";

const addBlogs = async (req, res, next) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : 'Please login and try again'});

        const addBlogs = await BlogDetails.create({
            title: req.body.title,
            heading: req.body.heading,
            content: req.body.content
        });

        if(!addBlogs) {
            return res.status(400).json({
                status: 400,
                errorMessage: `Cannot add blogs`
            })
        };

        return res.status(200).json({
            status: 200,
            addBlogs
        })

    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong in adding blogs ${error}`
        })
    }
};

export default addBlogs;