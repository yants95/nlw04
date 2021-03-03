export interface LoadSurveyByIdRepository {
  load: (id: string) => Promise<void>
}
