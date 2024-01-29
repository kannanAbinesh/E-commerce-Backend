require('dotenv').config();

export const port = process.env.PORT || 8000 ;
export const dataBaseUrl = process.env.DATABASE_URL;
export const jwtSecretKey = process.env.JWT_SECRET_KEY ;
