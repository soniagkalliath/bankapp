import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder,public dataService:DataService) { }

  ngOnInit(): void {
  }
deposit(){
if(this.depositForm.valid){
this.dataService.deposit(this.depositForm.value.accno,this.depositForm.value.pswd,this.depositForm.value.amount)
}
else{
  alert("Invalid Forms")
}
}

withdraw(){
  if(this.withdrawForm.valid){
    this.dataService.withdraw(this.withdrawForm.value.accno,this.withdrawForm.value.pswd,this.withdrawForm.value.amount)
    }
    else{
      alert("Invalid Forms")
    }
}

}
