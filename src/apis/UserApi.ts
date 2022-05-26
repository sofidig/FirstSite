import { CreateUser, User } from "../application/models/AuthModels";
import { Biography } from "../application/models/BiographyModels";
import { EducationalDetail } from "../application/models/EducationDetailModels";
import { ProfessionalDetail } from "../application/models/ProfessionalDetailModels";
import { ProjectDetail } from "../application/models/ProjectDetailModels";

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
  public async addProjectAsync(data: ProjectDetail) {
    return await this.postAsync<ProjectDetail>(
      "users/project-detail",
      {},
      data
    );
  }
  public async addEducationalAsync(data: EducationalDetail) {
    return await this.postAsync<EducationalDetail>(
      "users/educational-detail",
      {},
      data
    );
  }
  public async updateBiographyAsync(data: Biography) {
    return await this.postAsync<Biography>("users/biography", {}, data);
  }
}

const instance = new UserApi();

export default instance;
