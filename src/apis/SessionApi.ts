import {
  CreateSession,
  CreateToken,
  SessionResponse,
  TokenResponse,
} from "../application/models/AuthModels";
import BaseApi from "./BaseApi";

class SessionApi extends BaseApi {
  public async createSessionAsync(data: CreateSession) {
    return await this.postAsync<SessionResponse>("sessions", {}, data);
  }

  public async refreshToken(refresh_token: string) {
    return await this.postAsync<TokenResponse>("sessions/token", {}, {
      refreshToken: refresh_token,
    } as CreateToken);
  }
}

const instance = new SessionApi();

export default instance;
