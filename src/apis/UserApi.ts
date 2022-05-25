import { CreateUser, User } from "../application/models/AuthModels";
import { ProfessionalDetail } from "../application/models/ProfessionalDetailModels";

import BaseApi from "./BaseApi";

class UserApi extends BaseApi {
  public async createUserAsync(data: CreateUser) {
    return await this.postAsync<User>("users", {}, data);
  }

  public async getUserDetailsAsync() {
    return await this.getAsync<any>("users", {});
  }

  public async addProfessionAsync(data: ProfessionalDetail) {
    return await this.postAsync<ProfessionalDetail>(
      "users/professional-detail",
      {},
      data
    );
  }
}

const instance = new UserApi();

export default instance;
