import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient) {

   }
loginForm!:FormGroup
  ngOnInit(): void {

this.loginForm = this.fb.group({
   username:new FormControl(''),
   password:new FormControl('')
})

  }

  Login(){
    this.http.post('http://127.0.0.1:8000/login/', this.loginForm.value).subscribe(data => { console.log(data) }, err => { console.log(err) });  
  }

}
