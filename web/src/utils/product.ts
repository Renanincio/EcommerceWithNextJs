export interface Product {
  id: string;
  price: number;
  description: string;
  name: string;
  color: string;
  category: string;
  info: string;
  datasheet: string;
  image: { type: "Buffer"; data: number[] };
}
