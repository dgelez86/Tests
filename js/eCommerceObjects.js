class Product {

    constructor(id, desc, price) {
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

}


class Bag {

    constructor() {
        this.bag = []
    }

    addTO(product) {
        this.bag.push(product)
    }

    removeFrom(product) {
        this.bag.splice(this.bag.indexOf(product), 1)
    }

    showBag() {
        console.log(this.bag)
    }

}


prod1 = new Product(1, "product1", 100)
prod2 = new Product(5, "product2", 350)
bag1 = new Bag()

bag1.addTO(prod1)
bag1.showBag()
bag1.addTO(prod2)
bag1.showBag()
bag1.addTO(prod1)
bag1.showBag()
bag1.removeFrom(prod1)
bag1.showBag()