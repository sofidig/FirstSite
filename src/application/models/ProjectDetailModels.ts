import { DateDuration } from "./MasterModels";

export interface ProjectDetail {
  name: string;
  category: string;
  description: string;
  duration: DateDuration;
  images: string;
  skills: string;
}
