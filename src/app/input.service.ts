import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http:HttpClient) { }
  // get data
  fnget(){
    return this.http.get("https://cybersquare.herokuapp.com/user/")
  }
  // delete data
  fndelete(remove:any){
    return this.http.delete("https://cybersquare.herokuapp.com/user/"+remove)
  }
  // insert data
  fninsert(data:any){
    return this.http.post("https://cybersquare.herokuapp.com/user/",data)
  }
  // update data
  fnupdate(dat:any){
    return this.http.put("https://cybersquare.herokuapp.com/user/",dat)
  }
}
