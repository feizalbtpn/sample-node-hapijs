/**
 * Created by feizal on 3/2/17.
 */

'use strict';

const uuidV1 = require('uuid/v1');
const products = require('./dummy_data').products;

module.exports.addProduct =  (data) => {
    const productId = uuidV1();
    products[productId] = {
        name: data.name,
        description: data.description
    };
    return true
};

module.exports.getProduct = (productId) => {
    return products[productId]
};

module.exports.getProducts = () => {
    const values = Object.keys(products).map((key) => {
        return products[key];
    });
    return values
};

module.exports.updateProduct = (productId, data) => {
    const product = products[productId];
    if (product) {
        products[productId] = {
            name: data.name ? data.name : product.name,
            description: data.description ? data.description : product.description
        };
        return true
    } else {
        return null
    }
};

module.exports.deleteProduct = (productId) => {
    delete products[productId];
    return true
};