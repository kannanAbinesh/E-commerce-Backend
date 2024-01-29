/* Plugins. */
import express from 'express';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import bodyParser from 'body-parser';

/* Crons. */
// import updateCurrencyCron from './core/cron/updateCurrencyCron';

/* helpers and functions. */
import { jwtSecretKey, port } from '../config'
import verifyAuthToken from './helpers/verifyAuthToken';
import models from './models';
import adminRoute from '../src/routes/adminRoutes'
import userRoute from './routes/userRoutes';
const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Auth token verification. */
app.use(verifyAuthToken);
app.use(expressjwt({
    requestProperty: "credentials",
    secret: jwtSecretKey,
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: req => req.headers.auth
}));

app.use('/api/v1/', adminRoute);    // Admin routes.
app.use('/api/v2/', userRoute);     // User routes.
// app.use('/api/v3/', );           // Merchant routes.

/* Cron functions */
// updateCurrencyCron(app);

const promise = models.sync().catch((err) => console.log('Something went wrong in model sync ' + err));
promise.then(() => {
    app.listen(port, () => {
        console.log('Server is running in ' + port)
    });
});