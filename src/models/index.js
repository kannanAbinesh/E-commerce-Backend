import sequelize from "../sequelize";

import SiteSettings from "./siteSettings";
import AdminPrivileges from "./adminprivilege";
import BlogDetails from "./blogDetails";
import PaymentTypes from "./paymentMethods";

function sync(...args){
    return sequelize.sync(...args);
};

export default { sync };

export {
    AdminPrivileges,
    SiteSettings,
    BlogDetails,
    PaymentTypes
};