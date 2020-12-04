import { get, post, put } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import { IUser, ISignUpFailed } from "@Interfaces/user";
import { getToken } from "@Utils/index";

// =====================================================
const getUserInfo = async () => {
  const token = getToken();
  const response = await get<IUser | null>(urls.userInfo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    if (response.parsedBody.auth === false) {
      return null;
    }
    return response.parsedBody;
  }
  return null;
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
  const response = await post<IUser | ISignUpFailed>(
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
const forgotPass_SendCode = async (email: string) => {
  const response = await put(
    urls.forgotPass_sendCode,
    {
      username: email,
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
const forgotPass_VerifyCode = async (email: string, code: string) => {
  const response = await put<{ access_token: string }>(
    urls.forgotPass_verifyCode,
    {
      username: email,
      code,
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
const forgotPass_ResetPass = async (token: string, newpassword: string) => {
  const response = await put(
    urls.forgotPass_verifyCode,
    {
      newpassword,
    },
    {
      headers: {
        authorization: "Bearer " + token,
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
const confirmEmail = async (token: string) => {
  let response;
  try {
    response = await put(
      urls.confirmEmail,
      {},
      {
        headers: {
          authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    if (response && response.parsedBody) {
      return response.parsedBody;
    }
  } catch (error) {
    return null;
  }
  return null;
};

const updateProfile = async (first_name: string, last_name: string) => {
  const token = getToken();
  let response;
  try {
    response = await put<IUser>(
      urls.updateProfile,
      { first_name, last_name },
      {
        headers: {
          authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    if (response && response.parsedBody) {
      return response.parsedBody;
    }
  } catch (error) {
    return null;
  }
  return null;
};

export {
  login,
  getUserInfo,
  signUp,
  forgotPass_SendCode,
  forgotPass_VerifyCode,
  forgotPass_ResetPass,
  confirmEmail,
  updateProfile
};
