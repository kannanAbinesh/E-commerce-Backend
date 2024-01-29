import { BlogDetails } from "../../models";

const getBlogDetails = async (req, res) => {
    try {
        
        const blogDetails = await BlogDetails.findAll();
        if(blogDetails.length == 0){
            return res.status(400).json({
                status: 400,
                errorMessage: 'No blogs found found'
            })
        };

        return res.status(200).json({
            status: 200,
            blogDetails
        });

    } catch (error) {
        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong went in  ${error}`
        })
    }
};

export default getBlogDetails;