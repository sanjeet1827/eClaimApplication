import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.css']
})
export class ReportIncident implements OnInit {

  private dataSubmitted:boolean = false;

  private submitMessage:string = 'Thanks for providing incident report, we will get back to you soon. Keep looking you emails and sms';

  incident: { customerName, policyNo, mobileNo, email, location, detail, photoPath } =
    { customerName: "", policyNo: "", mobileNo: "", email:"", location: "", detail: "", photoPath: "" };

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  private report(){
    console.log(this.incident);
    this.dataService.report(this.incident).subscribe(()=>{
      this.dataSubmitted=true;
    });
    //this.incident = {id: null, name: "", description: "", email: ""};

  }
}
