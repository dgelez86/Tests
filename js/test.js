class Product {

    id
    description
    price

    Product(id, desc, price) {
        this.id = id
        this.desc = desc
        this.price = price
    }

    getId() {
        return this.id
    }

    getDesc() {
        return this.desc
    }

    setDes(desc) {
        this.desc = desc
    } 

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }

    static addTO(product) {
        bag.push(product)
    }

    static removeFrom(product) {
        bag.splice(bag.indexOf(product), 1)
    }

    static showBag() {
        console.log(bag)
    }


}


// class Bag {

//     Bag() {
//         this.bag = []
//     }

//     addTO(product) {
//         bag.push(product)
//     }

//     removeFrom(product) {
//         bag.splice(bag.indexOf(product), 1)
//     }

//     showBag() {
//         console.log(bag)
//     }

// }

let bag = []
prod1 = new Product(1, "product1", 100)
prod2 = new Product(5, "product2", 350)

console.log(prod1)
console.log(prod2)

prod1.getDesc()

Product.addTO(prod1)
Product.showBag()
Product.addTO(prod2)
Product.showBag()
Product.addTO(prod1)
Product.showBag()
Product.removeFrom(prod1)
Product.showBag()