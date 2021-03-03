export interface SaveSurveyAnswer {
  save (params: SaveSurveyAnswer.Params): Promise<void>
}

export namespace SaveSurveyAnswer {
  export type Params = {
    value: number
    survey_id: string
  }
}