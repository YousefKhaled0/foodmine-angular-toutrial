import { Food } from "./food";

export class CartItem {

    food: Food;

    quantity: number = 1;

    constructor(food: Food) {
        this.food = food;
    }

    get price() : number{

        return this.quantity * this.food.price;
    }
}