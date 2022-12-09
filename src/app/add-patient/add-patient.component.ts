import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: '"app-add-patient"',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
name=""
pid=""
address=""
contact=""
doa=""
image=""
dname=""

constructor(private api:ApiService){}

readValue=()=>
{
  let data:any={"name":this.name,"pid":this.pid,"address":this.address,"contact":this.contact,"doa":this.doa,"image":this.image,
  "dname":this.dname}
  console.log(data)
  this.api.addPatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("patient added successfully")
        this.name=""
        this.address=""
        this.contact=""
        this.dname=""
        this.doa=""
        this.pid=""
        this.image=""
      } else {
        alert("something went wrong")
      }
      
      
    }
  )
}
}
