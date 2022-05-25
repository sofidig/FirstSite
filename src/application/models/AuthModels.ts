export interface User {
  id?: string;
  email: string;
  name: string;
  password?: string;
  createdAt: Date;
  updateAt: Date;
}

export interface Session {
  id?: string;
  user: string;
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface CreateSession {
  email: string;
  password: string;
}

export interface SessionResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface CreateToken {
  refreshToken: string;
}

export interface TokenResponse {
  accessToken: string;
}
