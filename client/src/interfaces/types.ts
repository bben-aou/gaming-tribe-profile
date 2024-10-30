import { ReactNode } from "react";

export type User = {
  id: string;
  firstName: string;
  lastName : string;
  email: string;
  city? :string,
  country?:string,
  username?: string,
  avatar?: string;
};



export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (data : TLoginRequestBody) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: TRegisterBody) => Promise<void>;
  errors: Record<string, string>;
  clearErrors: () => void
  OAuthAuthentication: (token: string) => Promise<void>
  initiateGithubLogin: () => void
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type TLoginRequestBody = {
  email : string;
  password: string;
}
export type TRegisterBody = {
  firstName : string;
  lastName : string;
  email : string;
  password : string;
}