import { CartItem } from "./cartItem";

export class Cart {

    items: CartItem[] = [];

    get totalPrice(): number {

        let total = 0;

        this.items.forEach(i => {

            total = i.price;
        });

        return total;
    }
}