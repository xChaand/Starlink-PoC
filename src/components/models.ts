export interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  new?: boolean;
}

export enum Filter {
  Featured = 'Featured',
  High = 'Price: High to low',
  Low = 'Price: Low to high',
  New = 'Newest',
}
