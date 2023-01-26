import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions!: Question[];

  score: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  totalScore: number = 0;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.getSurveyData().subscribe((res) => {
      this.questions = res;
    });
  }

  onScoreChange(answer: any) {
    this.score[answer.id] = parseInt(answer.score);
    console.log(this.score);

    this.totalScore = this.score.reduce((partialSum, a) => partialSum + a, 0);
    console.log(this.totalScore);
  }

  onSubmit() {
    this.router.navigate([''], {
      queryParams: { finalScore: this.totalScore },
    });
  }
}
