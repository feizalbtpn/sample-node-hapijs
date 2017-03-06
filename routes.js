/**
 * Created by feizal on 3/2/17.
 */

"use strict";

const Product = require('./products');

module.exports = [{
    method: 'GET',
    path:'/products',
    handler: (request, reply) => {
        const products = Product.getProducts();
        reply({
            products: products,
        }).code(200);
    }
}, {
    method: 'GET',
    path:'/product/{id}',
    handler: (request, reply) => {
        const product = Product.getProduct(request.params.id);
        reply({
            product: product,
        }).code(200);
    }
}, {
    method: 'POST',
    path:'/products',
    handler: (request, reply) => {
        const created = Product.addProduct(request.payload);
        created ? reply().code(201) : reply().code(500)
    }
}];
