const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per `window` (15 minutes)
  message: 'Too many login attempts from this IP, please try again later.'
});

module.exports = { loginLimiter };
