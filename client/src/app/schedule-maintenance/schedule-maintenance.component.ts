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
>>>>>>> d43bfdeb1e26f399b8fed860e920807a6aa2bee4
//todo: complete missing code

