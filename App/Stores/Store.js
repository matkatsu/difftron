if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Store.production'); // eslint-disable-line global-require
} else {
  module.exports = require('./Store.development'); // eslint-disable-line global-require
}
