export interface IProductTypes {
  _id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface IProductState {
  id?: any;
  products?: IProductState[];
  product?: IProductTypes;
  isActivityInProgress: boolean;
  error?: any;
  message?: string;
}
