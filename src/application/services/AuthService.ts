import UserApi from "../../apis/UserApi";
import SessionApi from "../../apis/SessionApi";
import { CreateSession, CreateUser } from "../models/AuthModels";
import { setAuthHeader } from "../../apis/AxiosInstance";

class AuthService {
  public async Login(data: CreateSession) {
    return await SessionApi.createSessionAsync(data);
  }

  public async Register(data: CreateUser) {
    return await UserApi.createUserAsync(data);
  }

  public async RefreshAccessToken() {
    try {
      let refresh_token = localStorage.getItem("refresh-token");
      if (refresh_token) {
        refresh_token = JSON.parse(refresh_token);
        const res = await SessionApi.refreshToken(refresh_token!);
        if (res) {
          setAuthHeader(res.accessToken);
        }
      } else {
        // current location / != => route /
        const currentPath = window.location.pathname;
        console.log(currentPath);
        // if(currentURL != "/")
      }
      return true;
    } catch (e) {
      localStorage.removeItem("refresh-token");
      // window.location.href = "/";
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
