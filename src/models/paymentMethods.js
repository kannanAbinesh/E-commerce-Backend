import Model from "../sequelize";
import DataType from 'sequelize';

const PaymentTypes = Model.define('PaymentTypes', {
    
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataType.STRING,
        allowNull: false
    },

    isActive: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    processingDays: {
        type: DataType.STRING,
        allowNull: true
    }

});

export default PaymentTypes;