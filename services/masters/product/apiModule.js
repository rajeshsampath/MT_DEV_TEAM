const Models = rootRequire('models/index');
let _ = require('lodash');

module.exports = {
    getProducts: function(query, nCallback){
        let criteriaObj = extractSearch(query.search);
        let critria = {};

        if(criteriaObj.product_id){
            critria['PRODUCT_ID'] = {"$regex": criteriaObj.product_id, "$options": "i" };
        }
        if(criteriaObj.product_type){
            critria['PRODUCT_TYPE'] = {"$regex": criteriaObj.product_type, "$options": "i" };
        }
        Models['MASTERS.ProductMaster'].getProductCount(critria, (count)=>{
            let perPage = parseInt(query.limit);
            let page = parseInt(query.page) || 0;

            let skip = parseInt(query.page);
            let limit = parseInt(query.limit);
            Models['MASTERS.ProductMaster'].getProducts(critria,perPage,page, (products)=>{
                return nCallback(products);
            })
        })
    },
    getProductById:function(id,nCallback){
        Models['MASTERS.ProductMaster'].getProductById(id, (product)=>{
            return nCallback(product);
        })
    },
    getProductById:function(id,nCallback){
        Models['MASTERS.ProductMaster'].getProductById(id, (product)=>{
            return nCallback(product);
        })
    }
}

function extractSearch(query){
    let result = {};
    try{
        let list = JSON.parse(query);
        _.each(list, function(v,k){
            if(v!=""){
                result[k] = v;
            }
        });
    }catch(err){
        console.log(err);
    }
    return result;
}