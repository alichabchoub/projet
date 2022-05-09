import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DeviceService } from '../device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AdddeviceComponent implements OnInit {
  errorMessage1:string ='';
  errorMessage:string ='';
  addDeviceForm: FormGroup ;
 
  
  Name: string;
  Notes: string;
  DataLogger: string;


  deviceList: AngularFireList<any> 
  constructor(private deviceService : DeviceService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      this.deviceList = db.list('device')
    }

  ngOnInit(): void {
    this.addDeviceForm=new FormGroup({
   
      NAme: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      NOte: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      DAtaLogger: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
  
    
    });
  }

  onSubmit() {
 
    let create = 'false';
    
            this.deviceList.push({
          
            Name: this.Name ,
            Notes: this.Notes ,
            DataLogger: this.DataLogger,
          
              }).then(added =>{
                this.router.navigate(['/device'])
              
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
     
    })
    
   /*
    this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
   
    console.log(this.condactor)
    this.conductorservice.createConductor(this.condactor)
    */
  
  }

}
