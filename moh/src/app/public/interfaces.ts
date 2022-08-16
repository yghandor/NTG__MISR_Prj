export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}



export interface LoginResponse {
  name: string;
  email: string;
  token: string;
  tokenType: string;
}


export interface LoginRequest {
  email: string;
  password: string;
}


export interface RegisterRequest {

  email: string | null | undefined;
  username: string| null | undefined;
  firstname: string| null | undefined;
  lastname: string| null | undefined;
  password: string| null | undefined;


}

export interface RegisterResponse {
  status: number;
  message: string;
}
