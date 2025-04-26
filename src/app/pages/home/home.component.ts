import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { PlanCardComponent } from '../../components/plan-card/plan-card.component';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    PlanCardComponent
  ],
  templateUrl: 'home.component.html', // Added quotes
  styleUrls: ['home.component.css']   // Added quotes
})
export class HomeComponent {
  plans: Plan[] = []; // Initialize to an empty array

  constructor(private planService: PlanService) {
    this.loadPlans();
  }

  private loadPlans(): void {
    const plans = this.planService.getPlans();
    if (plans instanceof Promise) {
      plans.then(data => this.plans = data);
    } else {
      this.plans = plans;
    }
  }
}