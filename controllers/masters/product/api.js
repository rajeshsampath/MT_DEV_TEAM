/**
 * @description Product Master Controller
 * @author Rajesh Sampath
 * @return Object<Router>
 */

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
    ProductModule.apiModule.getProducts(query, function(response){
        // let d = {
        //     data: data.product,
        //     count: data.count
        // }
        res.json(response);
    });
});

// List all products data (Paginated)
router.post('/getProductById', function(req, res){
    ProductModule.apiModule.getProductById(req.body.id, function(response){
        res.json(response);
    });
});

// Add a product 
router.post('/addProduct', function(req, res){
    ProductModule.apiModule.addProduct(req, function(response){
        res.json(response);
    });
});

// Update a product
router.post('/updateProductById', function(req, res){
    let data = {
        id:req.body.id,
        product_id: req.body.product_id,
        product_type: req.body.product_type
    }
    ProductModule.apiModule.updateProductById(data, function(response){
        res.json(response);
    })
});

// Delete Product By Id (making state as false)
router.post('/deleteProductById', function(req, res){
    let data = {
        id:req.body.id
    }
    ProductModule.apiModule.deleteProductById(data, function(response){
        res.json(response);
    })
})
// Export The Controller
module.exports = router;