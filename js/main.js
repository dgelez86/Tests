import {getId, getDesc, getPrice, addTO, removeFrom, showBag} from "./class"

prod1 = new Product(1, product1, 100)
prod2 = new Product(5, product2, 350)
bag1 = new Bag()

bag1.addTO(prod1)
showBag()
bag1.addTO(prod2)
showBag()
bag1.addTO(prod1)
showBag()
bag1.removeFrom(prod1)
showBag()