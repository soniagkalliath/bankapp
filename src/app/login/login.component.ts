import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
aim="Perfect Partner";
accno ="Account number please";
pswd="";

loginForm = this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private router:Router,private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getAccNo(event:any){
    this.accno = event.target.value;
    //console.log(this.accno);
  }
  pswdChange(event:any){
    this.pswd= event.target.value;
    //console.log(this.pswd);
  }
login(){
 //alert("login works");
 if(this.loginForm.valid){
  var accNumber=this.loginForm.value.accno;;
 console.log(accNumber);
var pwd=this.loginForm.value.pswd;
console.log(pwd);
var result = this.dataService.login(accNumber,pwd)
if(result){
    this.router.navigateByUrl("dashboard");
}
 }
else{
  alert("Inavalid Form")
}
 }
 
  
//   let dataset=this.dataService.accountDetails;
       
//       if(accountNo in dataset){
//         var pswd1 = dataset[accountNo].password
//           if(pswd1==pwd){
//               alert("Login successful")
//               this.router.navigateByUrl("dashboard");
//           }
//         else{
    
//           alert("Incorrect password")
//         }
//       }
//       else{
//         alert("User does not exist")//("no user exist with provided username")
//       }
  
}
