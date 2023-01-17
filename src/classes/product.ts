import { CartItem } from './interfaces/cart-item-Protocol';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
