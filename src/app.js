import path from 'path';
import cors from 'cors';
import helmet from 'helmet';

import express from 'express';
const app = express();

import { SERVER } from './config/constants.js';
import WebRoutes from './web/web.routes.js';

app.use(helmet({contentSecurityPolicy: false})); // prettier-ignore
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'src', 'web', 'public')));
app.set('view engine', 'ej');
app.set('views', path.resolve(path.join(process.cwd(), 'src', 'web', 'views')));

app.use(WebRoutes);

app.use((req, res, next) => res.status(404).render('404.ejs', { path: '/not-found', pageTitle: 'JawStrength: 404' })); // 404
app.use((err, req, res, next) => res.status(500).render('500.ejs', { path: '/err', pageTitle: 'JawStrength: 500' })); // 500
app.listen(SERVER.PORT, () => console.log(`App is running at http://localhost:${SERVER.PORT}`));
