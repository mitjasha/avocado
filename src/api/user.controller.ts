import { get, post } from "./api";
import { User, UserResponse, UserRegistrationResponse } from "./api.interface";

const userController = {
  signUp: (user: User) =>
    post<UserRegistrationResponse>("/users/signup", JSON.stringify(user)),
  signIn: (user: User) =>
    post<UserResponse>("/users/login", JSON.stringify(user)),
  getUser: () => get<UserResponse>("/user"),
};

export default userController;
