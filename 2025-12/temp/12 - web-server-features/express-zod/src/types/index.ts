export type User = {
  id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: string;
  updatedAt: string;
};

export type NewUser = Pick<User, "name" | "email" | "age">;
export type UpdateUser = Partial<NewUser>;