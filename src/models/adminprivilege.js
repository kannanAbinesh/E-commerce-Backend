import bcrypt from 'bcrypt'; 
import DataType from 'sequelize';
import Model from '../sequelize';

const AdminPrivileges = Model.define('AdminPrivileges', {

    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true
    },

    email: {
        type: DataType.STRING,
        validate: { isEmail : true }
    },

    isSuperAdmin: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    password: {
        type: DataType.STRING
    }
    
},{
    hooks: {
        beforeCreate : async (user) => {
            if(user.password) {
                const hash = await bcrypt.genSaltSync(10);
                user.password = bcrypt.hashSync(user.password, hash);
            }
        }
    }
});

export default AdminPrivileges;