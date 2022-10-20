import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    app: ``
  });

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  submit() {
    this.http.post(`${API_PATH}auth/login`, { 'headers': this.headers }, this.form.getRawValue())
      .subscribe(
        (res: any) => {
          console.log(res);
          AuthInterceptor.acessToken = res.token;
          this.router.navigate(['/']);
        }
      )
  }

}
