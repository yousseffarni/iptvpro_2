import getConfig from 'next/config';
import { db } from './db';

const { serverRuntimeConfig } = getConfig();
const Products = db.Products;

export const articlesRepo = {
    getAll
};

async function getAll() {
    return await Products.find();
}
