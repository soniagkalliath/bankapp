import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails:any={
       
    1000:{acno:1000,balance:10000,username:"userone",password:"testuser"},
    1001:{acno:1001,balance:20000,username:"usertwo",password:"testuser1"},
    1002:{acno:1002,balance:25000,username:"userthree",password:"testuser2"}

}
  
aim="Perfect Partner";
accno ="Account number please";
pswd="";

  constructor(private router:Router) { }

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
 var accNumber=this.accno;;
 console.log(accNumber);
var pwd=this.pswd;
console.log(pwd);
let dataset=this.accountDetails;
       if(accNumber in dataset){
         var pswd1 = dataset[accNumber].password
         //console.log(pswd1);
         if(pswd1==pwd){
           alert("Login Successful");
           this.router.navigateByUrl("dashboard");
         }
       
       else{
        alert("incorret password")
       }
      }
       else{
        alert("No user exist with provided Account Number")
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
