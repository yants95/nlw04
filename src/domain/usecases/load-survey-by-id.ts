import { SurveyModel } from "@/domain/models";

export interface LoadSurveyById {
  load: (id: string) => Promise<LoadSurveyById.Result>
}

export namespace LoadSurveyById {
  export type Result = SurveyModel
}