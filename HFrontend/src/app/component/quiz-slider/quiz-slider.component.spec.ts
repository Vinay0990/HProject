import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSliderComponent } from './quiz-slider.component';

describe('QuizSliderComponent', () => {
  let component: QuizSliderComponent;
  let fixture: ComponentFixture<QuizSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
