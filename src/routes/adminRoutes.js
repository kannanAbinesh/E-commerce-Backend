import express from 'express';
const adminRoute = express.Router();

import adminLogin from '../controllers/adminControllers/adminLogin'; //Site data.
import getSiteSettings from '../controllers/adminControllers/getSiteSettings';
import updatePassword from '../controllers/adminControllers/updatePassword';
import getBlogDetails from '../controllers/adminControllers/getBlogDetails'; // Blogs.
import addBlogs from '../controllers/adminControllers/addBlogs';
import deleteBlogs from '../controllers/adminControllers/deleteBlogs';
import updateBlogs from '../controllers/adminControllers/updateBlogs';
import getBlog from '../controllers/adminControllers/getBlog';
import getPaymentMethods from '../controllers/adminControllers/getPaymentMethods'; // Payment methods.
import updatePayments from '../controllers/adminControllers/updatePayments';

/* Without auth verification. */
adminRoute.route('/adminLogin').get(adminLogin);
adminRoute.route('/getBlogDetails').get(getBlogDetails);

/* With auth verification. */
adminRoute.route('/updatePassword').put(updatePassword);
adminRoute.route('/getSiteSettings/:type').get(getSiteSettings);
adminRoute.route('/addBlog').post(addBlogs);
adminRoute.route('/updateBlog/:id').get(getBlog).put(updateBlogs).delete(deleteBlogs);
adminRoute.route('/getPaymentMethods').get(getPaymentMethods);
adminRoute.route('/updatePayments/:id').put(updatePayments);

export default adminRoute;