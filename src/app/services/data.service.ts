import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any={
       
    1000:{acno:1000,balance:10000,username:"Ajith",password:"testuser"},
    1001:{acno:1001,balance:20000,username:"Joseph",password:"testuser1"},
    1002:{acno:1002,balance:25000,username:"Anupama",password:"testuser2"}

}

currentUser:any;

  constructor() { 
   this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
    //  localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    //  localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
   }

 getDetails(){

  if(localStorage.getItem("accountDetails")){
    this.accountDetails = JSON.parse(localStorage.getItem("accountDetails")||'')
    }
  if(localStorage.getItem("currentUser")){
    this.currentUser  = localStorage.getItem("currentUser")
  }
  //   this.accountDetails=localStorage.getItem("accountDetails")
  //  this.currentUser= localStorage.getItem("currentUser")
    
  // //   this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'')
  // //  this.currentUser= JSON.parse(localStorage.getItem("currentUser")||'')

 }
  
  register(acno:any,username:any,password:any){
    if(acno in this.accountDetails){
      alert("User already exist. Please Log in")
      return false;
    }
    
    this.accountDetails[acno]={
      acno,
      balance:0,
      username,
      password
    }
   this.saveDetails();
    alert("Registration successful");
    console.log(this.accountDetails);
    return true;
  }

  login(accno:any,pwd:any){
    let dataset=this.accountDetails;
       if(accno in dataset){
         var pswd1 = dataset[accno].password
         //console.log(pswd1);
         if(pswd1==pwd){
          this.currentUser= dataset[accno].username
          this.saveDetails();
           alert("Login Successful");
           return true
                   }
       
       else{
        alert("incorret password")
        return false
       }
      }
       else{
        alert("No user exist with provided Account Number")
        return false
       }
}


deposit(accno:any,pwd:any,amount:any){
  var amt = parseInt(amount);
  let dataset=this.accountDetails;
  if(accno in dataset){
    var pswd1 = dataset[accno].password
    //console.log(pswd1);
    if(pswd1==pwd){
     dataset[accno].balance+=amt
    this.saveDetails();
      alert("Acoount credited with amount: "+amount+" New balance is: "+dataset[accno].balance);
            }
  
  else{
   alert("incorret password")
  
  }
 }
  else{
   alert("No user exist with provided Account Number")
   
  }

}

withdraw(accno:any,pwd:any,amount:any){
  var amt = parseInt(amount);
  let dataset=this.accountDetails;
  if(accno in dataset){
    var pswd1 = dataset[accno].password
    //console.log(pswd1);
    if(pswd1==pwd){
      if(dataset[accno].balance>amount){
        dataset[accno].balance-=amt
       this.saveDetails();
      alert("Acoount debited with amount: "+amount+" New balance is: "+dataset[accno].balance);
      }
      else{
        alert("Low balance")
      }
      }
  
  else{
   alert("incorret password")
  
  }
 }
  else{
   alert("No user exist with provided Account Number")
   
  }

}
}
