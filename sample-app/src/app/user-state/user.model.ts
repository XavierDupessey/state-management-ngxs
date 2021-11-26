export interface UserApi {
  birthDate: Date;
  id: number;
  name: string;
}

export interface User extends UserApi {
  age: number;
}
