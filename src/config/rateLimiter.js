import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000 * 24, // 1 day
  max: 60, // Limit each IP to 60 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    status: 'fail',
    request_url: async (request, response) => request.originalUr,
    message: 'Too many requests, please try again later tomorrow!.',
  },
});

export default limiter;
