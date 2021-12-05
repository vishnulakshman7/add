import { Component, OnInit } from '@angular/core';
import { register } from './register.model';
import { InputService } from '../input.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:InputService) { }

  ngOnInit(): void {
  }

  crea=new register()
  result:any


  fnreg(){
    this.reg.fninsert(this.crea).subscribe(res=>{
      this.result=res

    })
  }

}
