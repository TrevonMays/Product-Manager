const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minLength: [3, 'Title must be at least three characters.']
    },
    price: {
        type: String,
        required: [true, 'Artist is required.'],
        min: [0, 'price must be at least three characters.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: [3, 'Description must be at least three characters.']
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;