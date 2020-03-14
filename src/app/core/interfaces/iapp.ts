export interface IApp {
  id: string;
  name: string;
  description: string;
  categories: Array<string>;
  subscriptions: [{
    name: string;
    price: number;
  }];
}
