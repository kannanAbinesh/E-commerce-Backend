import { SiteSettings } from "../../models";

const getSiteSettings = async (req, res) => {
    try {
        
        if(!req?.credentials?.isAdmin) return res.status(400).json({ errorMessage : "please login and try again"});

        const getSiteSettingsData = await SiteSettings.findAll({
            where : {
                type : req.params.type
            },
            raw: true
        });

        if(!getSiteSettingsData) return res.status(400).json({ errorMessage : "No data found" });
        return res.status(200).json({
            status: 200,
            results : getSiteSettingsData
        });

    } catch (error) {

        return res.status(400).json({
            status: 400,
            errorMessage: `Something went wrong: ${error}`
        });

    }
};

export default getSiteSettings;