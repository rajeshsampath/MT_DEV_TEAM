/**
 *@description ProductMaster User Model
*@author Nahl , HariKrishna, Rajesh, Aashick, Rupam
*@return Object<Schema>
*/
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
let schema = new Schema({
	PRODUCT_ID: { type: Number, unique: true, required: true },
	PRODUCT_TYPE: { type: String, required: true },	
	CREATED_DATE : { type: Date }, 
    LAST_MODIFIED_DATE : { type: Date, default:Date.now() }
}, { autoIndex: true, versionKey: false })


// Get Product Count
schema.statics.getProductCount = function(critria, cb){
    let _self = this;
    _self.count(critria, (err, count) => {
        if(count && !err){
            return cb(count)
        }else{
			return cb({status:"ERROR", response: err})
		}
    })
}
//	Get all the products
schema.statics.getProducts = function(critria,perPage, page, cb){
	let _self = this;
    _self.find(critria)
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, docs) => {
            if (docs && !err) {
                return cb(docs)
            }else{
                return cb({status:"ERROR", response: err})
            }
	});
}

//	Get product by id
schema.statics.getProductById = function(id,cb){
	let _self = this;
	_self.findOne({PRODUCT_ID:id},(err, doc) => {
		if (doc && !err) {
			return cb(doc)
		}else{
			return cb({status:"ERROR", response: err})
		}
	})
}
module.exports = mongoose.model("ProductMaster", schema, "ProductMaster")