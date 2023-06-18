import products from "./products";


const GetAllProducts = () =>{
   return products;
}

const GetProduct = (id) =>{
    return products.find(a=> a.id == id);
}

export {
    GetAllProducts,
    GetProduct
}