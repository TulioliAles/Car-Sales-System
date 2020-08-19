import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() : void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.alertService.info("Funcionalidade ainda não implementada!")
      },
      (httperror) => {
        this.alertService.error(httperror.error.message);
      }
    );
  }
}
