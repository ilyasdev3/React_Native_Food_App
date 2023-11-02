export interface IUserTypes {
  name?: string;
  email: string;
  password: string;
  token?: string;
  error?: string;
  isActivityInProgress?: boolean;
  message?: string;
  user?: {
    name: string;
    phone: string;
    address: string;
    email: string;
  };
}
