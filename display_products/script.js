
class Product{

    static productCount = 0;

    constructor(name, price, quantity, unit, image){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.unit = unit;
        this.image = image;
        Product.productCount++;
    }
}

const ProductList = [];

document.getElementById("Psubmit").addEventListener("click", () =>{
    // retriving the provided data for display
    let newProduct = new Product(document.getElementById("Pname").value,
    document.getElementById("Pprice").value,
    document.getElementById("Pquantity").value,
    document.getElementById("Punit").value,
    document.getElementById("Pimage").file)
    
    ProductList.push(newProduct);
    console.log(ProductList);
});

