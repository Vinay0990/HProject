import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  API: string = 'http://localhost:8080/api/v1/survey/randomSurvey';

  getSurveyData() {
    return this.http.get<Question[]>(this.API);
  }
}
