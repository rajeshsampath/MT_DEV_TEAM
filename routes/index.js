const masters = rootRequire('controllers/masters');

module.exports.initialize = function(app){
  /**
   *  Master Service
   */
  app.use('/api/product', masters.product.api);
}
