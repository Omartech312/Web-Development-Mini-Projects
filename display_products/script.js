
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
    Number(document.getElementById("Pprice").value),
    Number(document.getElementById("Pquantity").value),
    document.getElementById("Punit").value,
    document.getElementById("Pimage").files[0])
    
    ProductList.push(newProduct);
    console.log(ProductList);
    document.getElementById("container").innerHTML = "";
    ProductList.forEach(displayProduct);
});


function displayProduct(Object, index, array){
    let imageURL = "";
    if(Object.image){
        imageURL = URL.createObjectURL(Object.image);
    }
    document.getElementById("container").innerHTML += `
    <div class="product">
    <p>${Object.name}</p>
    <button class="removeB" onclick="remove(${index})">X</button>
    <p>${Object.quantity} ${Object.unit}</p>
    ${imageURL ? `<img src="${imageURL}" class="productImage">` : ""} 
    <p>$${Object.price}</p>
    
    </div>
    `;
}

function remove(index){
    ProductList.splice(index, 1);
    document.getElementById("container").innerHTML = "";
    ProductList.forEach(displayProduct);
}