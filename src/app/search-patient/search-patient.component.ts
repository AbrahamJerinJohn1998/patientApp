import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
pid=""
constructor(private api:ApiService){}
searchData:any=[]

readValue=()=>
{
  let data:any={"pid":this.pid}
  console.log(data)
  this.api.searchPatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("invalid patientid")
      } else {
        this.searchData=response
        
      }
    }
  )
  
}

deleteBtnClick=(id:any)=>
{
  let data:any={"id":id}
  this.api.deletePatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("patient deleted successfully")
      } else {
        alert("can't delete")
      }
    }
  )
}
}
