import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.css'],
})
export class QuizButtonComponent implements OnInit {
  @Input() question!: Question;
  @Input() index!: number;

  constructor() {
    this.toggle = false;
  }
  answer: any = { score: 0, id: 0 };
  toggle: boolean;

  options = [
    { id: 1, value: 1, label: 'Extremely Dissatisfied' },
    { id: 2, value: 2, label: 'Dissatisfied' },
    { id: 3, value: 3, label: 'Neutral' },
    { id: 4, value: 4, label: 'Somewhat Satisfied' },
    { id: 5, value: 5, label: 'Satisfied' },
  ];

  tempValue!: any;
  @Output() scoreEvent = new EventEmitter<number>();
  ngOnInit(): void {}

  onChange(e: any) {
    this.toggle = !this.toggle;

    this.answer.id = this.index;
    this.tempValue = this.options.filter((d) => d.label == e.target.value);
    this.answer.score = this.tempValue[0].value;

    this.scoreEvent.emit(this.answer);
  }
}
