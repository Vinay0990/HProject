import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-quiz-slider',
  templateUrl: './quiz-slider.component.html',
  styleUrls: ['./quiz-slider.component.css'],
})
export class QuizSliderComponent implements OnInit {
  @Input() question!: Question;

  @Input() index!: number;
  answer: any = { score: 0, id: 0 };

  steps = ['Dissatisfied', '', '', '', 'Satisfied'];
  options: Options = {
    floor: 1,
    ceil: 5,
    showTicks: true,
    getLegend: (value: number): string => {
      return this.steps[value - 1];
    },
  };

  @Output() scoreEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.answer.id = this.index;

    this.scoreEvent.emit(this.answer);
  }
}
