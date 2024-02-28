import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import * as $ from "jquery"; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 public title = 'TOEFL PARA TODOS';
 name = new FormControl('');

}
