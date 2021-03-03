export interface LoadSurveyById {
  load: (id: string) => Promise<void>
}