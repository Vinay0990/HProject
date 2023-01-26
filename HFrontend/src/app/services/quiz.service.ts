import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  API: string = 'http://localhost:8080/api/v1/survey/randomSurvey';

  finalScore!: number;

  setFinalScore(num: number) {
    this.finalScore = num;
  }

  getFinalScore() {
    return this.finalScore;
  }

  getSurveyData() {
    return this.http.get<Question[]>(this.API);
  }
}
