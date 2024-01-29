import Model from "../sequelize";
import DataType from 'sequelize';

const SiteSettings = Model.define('SiteSettings', {
    
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataType.STRING,
        allowNull : false
    },

    value: {
        type: DataType.STRING,
        allowNull: true
    },

    type: {
        type: DataType.ENUM('appSettings', 'configSettings'),
        allowNull: true,
        defaultValue: null
    }

});

/*
    appSettings --> where details such as site name, site image, etc ...)
    configSettings --> where secret keys where given (stripe, pushnotification, smtp keys, etc... )
 */

export default SiteSettings;