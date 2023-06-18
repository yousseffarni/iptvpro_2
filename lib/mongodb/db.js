import getConfig from 'next/config';
import mongoose from 'mongoose';

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONO_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
    Products: ProductsModel()
};

// mongoose models with schema definitions

function ProductsModel() {
    const schema = new Schema({
    name: { type: String, unique: true, required: true},
    type: { type: String, required: true },
    designiation: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldprice: { type: Number, required: true },
    stock: { type: Number, required: true },
    colors:{ type: Array, required: true },
    images: { type: Array, required: true },
    videos: { type: Array, required: true },
    num_stars: { type: Number, required: true },
    detail: { type: Array, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Products || mongoose.model('Products', schema);
}