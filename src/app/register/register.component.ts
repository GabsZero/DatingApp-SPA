import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() homeValues: any;
  @Output() cancelRegistration = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Register was sucessful');
    }, error => console.log(error));
  }

  cancel() {
    this.cancelRegistration.emit(false)
    console.log('cancelled');
  }

}
