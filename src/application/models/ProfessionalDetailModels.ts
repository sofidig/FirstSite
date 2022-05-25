import { CompanyBasic, DateDuration } from "./MasterModels";

export interface ProfessionalDetail {
  company?: CompanyBasic;
  jobRole: string;
  duration?: DateDuration;
}
