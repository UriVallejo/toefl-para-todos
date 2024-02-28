import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,Validators,ValidatorFn , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss', 
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegisterComponent {

  registerForm: FormGroup = this.fb.group({
    name:['',[Validators.required]]

  })

  public user: User;
  public title = "Registro de usuario"; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.user = new User(
      "",
      "",
      "",
      "",
      "",
      "",
      1,
      ""
    )
  }

  ngOnInit() {

  }

}
