enum Role {
  owner = "owner",
}
export interface IUser {
  access_token: string;
  account_type: "free";
  active: boolean;
  emailConfirmed: boolean;
  id: string;
  roles: Role[];
  username: string;
  profile: {
    first_name: string;
    last_name: string;
    avatar: {
      en: string;
      fa: string;
    };
  };
}

export interface ISignUpFailed {
  success: boolean;
  error: string;
}
