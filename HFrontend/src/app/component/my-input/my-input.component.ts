import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent implements OnInit {
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
