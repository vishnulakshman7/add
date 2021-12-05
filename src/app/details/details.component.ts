import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';
import { register } from '../register/register.model';
import { details } from './details.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private he:InputService) { }

  ngOnInit(): void {
    this.fntest();
  }
  
  result:any

  fntest(){
    this.he.fnget().subscribe(res=>{
      this.result=res
    })
  }
  fndele(remove:any){
    this.he.fndelete(remove).subscribe(res=>{
      this.result=res
      this.fntest()
    })

  }

  radstatus:any;
  radmale=false;
  radfemale=false;
  crea=new register()

  fnedit(dat:any){
    this.crea.id=dat.id;
    this.crea.f_name=dat.f_name
    this.crea.l_name=dat.l_name
    this.crea.dob=dat.dob
    this.radstatus=dat.gender
    if(this.radstatus=="male"){
      this.radmale=true
      this.radfemale=false
    }
    else if(this.radstatus=="female"){
      this.radfemale=true
      this.radmale=false
    }
    this.crea.email=dat.email


  }


  fnup(){
    this.he.fnupdate(this.crea).subscribe(res=>{
      this.result=res
      console.log(this.result)
    })
  }
  fnclear(){
    
  }


}
