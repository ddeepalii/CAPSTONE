import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.scss']
})
<<<<<<< HEAD
export class ScheduleMaintenanceComponent 
=======
export class ScheduleMaintenanceComponent {
  itemForm!: FormGroup;
}
>>>>>>> 3ca6604f428921f2ad944ca7669240bc7a2f3df6
//todo: complete missing code

