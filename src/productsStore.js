

const productsArray = [
    {
        id: "price_1NEb52LqxLnNt45uO7lb4DgC",
        title: "coffee",
        price: 4.99
    },
    {
        id: "price_1NEbEjLqxLnNt45uIjWEX7Ho",
        title: "sunglasses",
        price: "9.99",
    },
    {
        id: "price_1NEbJ8LqxLnNt45ujFgjfcbQ",
        title: "camera",
        price: 39.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("product data does not exist for ID: " + id);
        return undefined;
    }

    return productData
}

export  { productsArray, getProductData };