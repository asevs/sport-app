export interface Auth {
  userId: number;
  login: string;
  password: string;
  token: string;
  photo: string;
  isLoggedIn: boolean;
}