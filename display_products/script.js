
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