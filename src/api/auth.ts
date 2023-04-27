import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

const baseUrl = `${SERVER_URL}/auth`;

const HEADER_CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (email: string, password: string) =>
  new Promise((resolve: (value: string) => void, reject: (value: string) => void) => {
    let reqUrl = `${baseUrl}/login`;

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(reqUrl, body, HEADER_CONFIG)
      .then((response) => {
        if (response.data.code === 200) {
          localStorage.setItem("access", response.data.object.accessToken);
          localStorage.setItem("refresh", response.data.object.refreshToken);
          resolve(response.data.message);
        } else {
          reject(response.data.object.errors[0].message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

export const signup = (
  email: string | string[] | undefined,
  password: string,
  inviteCode: string | string[],
  publicAddress?: string,
  signature?: string
) =>
  new Promise((resolve: (value: string) => void, reject: (value: string) => void) => {
    let reqUrl = `${baseUrl}/signup`;

    const body = {
      email: email,
      password: password,
      invite_code: inviteCode,
      public_address: publicAddress,
      signature: signature,
    };

    axios
      .post(reqUrl, body, HEADER_CONFIG)
      .then((response) => {
        if (response.data.code === 200) {
          resolve(response.data);
          // localStorage.setItem("client-id", HEADER_CONFIG.headers["x-client-id"]);
        } else {
          resolve("");
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
