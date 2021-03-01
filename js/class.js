class Product {

    Product(id, desc, price) {
        this.id = id
        this.desc = desc
        this.price = price
    }

    export getId() {
        return this.id
    }

    export getDesc() {
        return this.desc
    }

    setDes(desc) {
        this.desc = desc
    } 

    export getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }

    addTO() {

    }
    RemoveFrom()

}


class Bag {

    Bag() {
        let bag = []
    }

    export addTO(product) {
        bag.push(product)
    }

    export removeFrom(product) {
        bag.splice(bag.indexOf(product), 1)
    }

    export showBag() {
        console.log(bag)
    }

}