import Model from "../sequelize";
import DataType from 'sequelize';

const BlogDetails = Model.define('BlogDetails', {
    
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataType.STRING,
        allowNull : false
    },

    heading: {
        type: DataType.STRING,
        allowNull: false
    },

    isStatic: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    
    content: {
        type: DataType.TEXT,
        allowNull: false
    }

});

export default BlogDetails;