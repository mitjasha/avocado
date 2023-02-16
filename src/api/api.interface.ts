export interface User {
  usernames: string;
  password: string;
}

export interface UserResponse {
  user: {
    id: string;
    username: string;
    token: string;
  };
}

export interface UserRegistrationResponse {
  user: {
    username: string;
    password: string;
    id: string;
    token: string;
  };
}

export interface UserProfileCreate {
  firstName: string;
  lastName: string;
  gender: "MALE";
  birth: "2021-09-10";
  weight: string;
  height: number;
  goal: "Lose weight";
  targetWeight: string;
  photo: string;
}

export interface UserProfileResponse {
  ffirstName: string;
  lastName: string;
  gender: "MALE";
  birth: "2021-09-10";
  weight: string;
  height: number;
  goal: "Lose weight";
  targetWeight: string;
  photo: "";
  user: {
    id: "c01f6231-c510-4952-981e-bccc0e05eb94";
    username: "mitjasha";
  };
  id: "367646dd-0b02-4787-bf32-335ad602baa8";
}

export interface Event {
  name: string;
  startTime: string;
  description: string;
  id: string;
}
