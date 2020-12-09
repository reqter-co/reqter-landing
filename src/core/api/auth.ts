import { queryCache } from "react-query";
import { post, put, del, connectApi } from "@Utils/http";
import { clientid, authBaseUrl, urls } from "@Core/constants";
import { IUser, ISignUpFailed } from "@Interfaces/user";
import { getToken } from "@Utils/index";
const api = connectApi(authBaseUrl as string);
// =====================================================
const getUserInfo = async () => {
  try {
    return await api.get<IUser>(urls.userInfo);
  } catch (error) {
    queryCache.setQueryData("user", undefined);
    throw new Error(error);
  }
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
const changePassword = async (oldpassword: string, newpassword: string) => {
  const token = getToken();
  let response;
  try {
    response = await put(
      urls.changePassword,
      { oldpassword, newpassword },
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
const toggleNotification = async (notification: boolean) => {
  const token = getToken();
  let response;
  try {
    response = await put<IUser>(
      urls.emailNotify,
      { notification },
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
const sendEmailConfirmation = async () => {
  const token = getToken();
  let response;
  try {
    response = await put(
      urls.sendEmailConfirmation,
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
const deleteAccount = async () => {
  const token = getToken();
  let response;
  try {
    response = await del(
      urls.deleteAccount,
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

export {
  login,
  getUserInfo,
  signUp,
  forgotPass_SendCode,
  forgotPass_VerifyCode,
  forgotPass_ResetPass,
  confirmEmail,
  updateProfile,
  changePassword,
  toggleNotification,
  sendEmailConfirmation,
  deleteAccount,
};
