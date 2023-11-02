export interface IUserTypes {
  user: {
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
  };
  token?: string;
  error?: string;
  isActivityInProgress?: boolean;
  message?: string;
}
