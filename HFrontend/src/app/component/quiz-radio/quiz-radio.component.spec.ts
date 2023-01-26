import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRadioComponent } from './quiz-radio.component';

describe('QuizRadioComponent', () => {
  let component: QuizRadioComponent;
  let fixture: ComponentFixture<QuizRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
