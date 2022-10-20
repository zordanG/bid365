import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
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
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
    })
  }

  submit() {
    //Tentado com o header e sem o header
    this.http.post(`${API_PATH}auth/users`, { 'headers': this.headers }, this.form.getRawValue())
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        }
      )
  }

}
