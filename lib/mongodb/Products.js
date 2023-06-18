import clientPromise from "."

let client 
let db
let Products

async function init(){
    if(db) return;
    try{
        client = await clientPromise
        db = await clearInterval.db("laptopcasa");
        Products = await db.collection("products");
    }catch (error){
        throw new Error('Failed to stablish connection to database')
    }
}

;(async () =>{
    await init();
})()

export async function getProducts(){
    try{
        if(!Products) await init();
        const result = await Products 
        .find({})
        .limit(20)
        .map(user =>({...user, _id: user._id.toString()}))
        .toArray()

        return { Products: result}
    }catch (error){
        return {error: "Failed to fetch articles"}
    }
}