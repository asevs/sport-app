export interface Auth {
  token: string;
  isLoggedIn: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
