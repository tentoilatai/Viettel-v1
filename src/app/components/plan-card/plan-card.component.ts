import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../../models/plan.model';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'plan-card.component.html', // Added quotes
  styleUrls: ['plan-card.component.css'] // Added quotes
})
export class PlanCardComponent {
  @Input() plan!: Plan;

  onSmsClick() {
    // In a real app, this could open the SMS app with the code pre-filled
    alert(`Để đăng ký gói cước ${this.plan.name}, soạn tin: ${this.plan.smsCode}`);
  }
}