export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: { type: "Buffer"; data: number[] };
}