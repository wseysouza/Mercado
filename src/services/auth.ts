import { api } from "./api";

interface LoginProps {
  username: string,
  password: string,
}

export const login = (user: LoginProps) => api.get('login', { auth: user });

