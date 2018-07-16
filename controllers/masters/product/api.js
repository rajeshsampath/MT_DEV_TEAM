/**
 * @description Product Master Controller
 * @author Rajesh Sampath
 * @return Object<Router>
 */

<<<<<<< HEAD
var express = require('express');
router = express.Router(),
config = require('config');
ProductModule = rootRequire('services/masters/product');

// List all products data (Paginated)
router.get('/getProducts', function(req, res){
let query = {
    page: req.query.page,
    limit: req.query.limit,
    search: req.query.query
}
let search = {};
ProductModule.apiModule.getProducts(query, function(data){
    // let d = {
    //     data: data.product,
    //     count: data.count
    // }
    res.json(data);
});
=======
 var express = require('express');
    router = express.Router(),
    config = require('config');
    ProductModule = rootRequire('services/masters/product');

// List all products data (Paginated)
router.get('/getProducts', function(req, res){
    let query = {
        page: req.query.page,
        limit: req.query.limit,
        search: req.query.query
    }
    let search = {};
    ProductModule.apiModule.getProducts(query, function(data){
        // let d = {
        //     data: data.product,
        //     count: data.count
        // }
        res.json(data);
    });
>>>>>>> f00a55465c8891e628bac526bd07b0a6d37a7fd9
});

// List all products data (Paginated)
router.post('/getProductById', function(req, res){
<<<<<<< HEAD
ProductModule.apiModule.getProductById(req.body.id, function(data){
    res.json(data);
});
});

// Add a product 
router.post('/addProduct', function(req, res){
ProductModule.apiModule.addProduct(req, function(data){
    res.json(data);
});
});

// Update a product
router.post('/updateProductById', function(req, res){
let data = {
    id:req.body.id,
    product_id: req.body.product_id,
    product_type: req.body.product_type
}
ProductModule.apiModule.updateProductById(data, function(){
    res.json(data);
})
})
=======
    ProductModule.apiModule.getProductById(req.body.id, function(data){
        res.json(data);
    });
});

// List all products data (Paginated)
router.post('/addProduct', function(req, res){
    ProductModule.apiModule.addProduct(req, function(data){
        res.json(data);
    });
});

>>>>>>> f00a55465c8891e628bac526bd07b0a6d37a7fd9
// Export The Controller
module.exports = router;