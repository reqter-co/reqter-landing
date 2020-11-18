import { get, post } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import storage from "../../services/storage";
import { IUser } from "@Interfaces/user";

// =====================================================
const getUserInfo = async () => {
  const token = storage.getItem("@caaser-token");
  if (!token) {
    const error: any = new Error("Not authorized!");
    error["status"] = 403;
    throw error;
  }
  const response = await get<IUser>(urls.userInfo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  const error: any = new Error("Not authorized!");
  error["status"] = 403;
  throw error;
};
const login = async (username: string, password: string) => {
  const response = await post<{ access_token: string }>(
    urls.login,
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        clientid,
      },
    }
  );

  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return null;
};

const signUp = async (fullname: string, email: string, password: string) => {
  const response = await post<{ error?: string; success?: boolean }>(
    urls.signUp,
    {
      username: email,
      password: password,
      first_name: fullname,
      last_name: fullname,
    },
    {
      headers: {
        "Content-Type": "application/json",
        clientid,
      },
    }
  );

  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return null;
};

export { login, getUserInfo, signUp };
