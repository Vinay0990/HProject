import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './component/my-input/my-input.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { QuizRadioComponent } from './component/quiz-radio/quiz-radio.component';
import { QuizSliderComponent } from './component/quiz-slider/quiz-slider.component';
import { QuizButtonComponent } from './component/quiz-button/quiz-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    DashboardComponent,
    QuizComponent,
    PageNotFoundComponent,
    QuizRadioComponent,
    QuizSliderComponent,
    QuizButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
