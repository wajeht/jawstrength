import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import express from 'express';
const app = express();

import { SERVER } from './config/constants.js';
import rateLimiter from './config/rateLimiter.js';
import WebRoutes from './web/web.routes.js';

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'default-src': ["'self'", 'plausible.jaw.dev'],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          'jaw-strength.jaw.dev',
          'localhost',
          'plausible.jaw.dev',
          'unpkg.com',
          'kit.fontawesome.com',
        ],
      },
    },
  }),
);
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'src', 'web', 'public'), { maxAge: 31536000000 }));
app.set('view engine', 'ej');
app.set('views', path.resolve(path.join(process.cwd(), 'src', 'web', 'views')));

app.use(rateLimiter);
app.use(WebRoutes);

app.use((req, res, next) => res.status(404).render('404.ejs', { path: '/not-found', pageTitle: 'JawStrength: 404' })); // 404
app.use((err, req, res, next) => res.status(500).render('500.ejs', { path: '/err', pageTitle: 'JawStrength: 500' })); // 500
app.listen(SERVER.PORT, () => console.log(`App is running at http://localhost:${SERVER.PORT}`));
