import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-quiz-radio',
  templateUrl: './quiz-radio.component.html',
  styleUrls: ['./quiz-radio.component.css'],
})
export class QuizRadioComponent implements OnInit {
  @Input() question!: Question;

  @Input() index!: number;
  answer: any = { score: 0, id: 0 };

  options = [
    { id: 1, value: 1, label: 'Extremely Dissatisfied' },
    { id: 2, value: 2, label: 'Dissatisfied' },
    { id: 3, value: 3, label: 'Neutral' },
    { id: 4, value: 4, label: 'Somewhat Satisfied' },
    { id: 5, value: 5, label: 'Satisfied' },
  ];
  @Output() scoreEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onChange(e: Event) {
    this.answer.id = this.index;

    this.scoreEvent.emit(this.answer);
  }
}
