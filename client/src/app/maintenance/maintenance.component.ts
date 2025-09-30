import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  //todo: complete missing code...
<<<<<<< HEAD
=======
  itemForm!: FormGroup;
  ngOnInit(): void {
    
  }
>>>>>>> 3ca6604f428921f2ad944ca7669240bc7a2f3df6
}

