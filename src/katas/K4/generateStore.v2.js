if (process.env.NODE_ENV === 'production') {
  module.exports = require('./generateStore.prod');
}
else {
  module.exports = require('./generateStore.dev');
}
