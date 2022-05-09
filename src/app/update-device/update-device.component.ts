import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

   
  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  Name: string;
  Notes: string;
  DataLogger: string;
  TypeReseau: string;
  Status: string;

  devicedetails:any= []
  
  deviceforupdate: AngularFireList<any>

  data = {
    Name: '',
    Notes : '' ,
    TypeReseau : '',
    DataLogger :  '' ,
    Status :  ''  
   } 
    id1: any;
    
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private deviceService: DeviceService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.deviceforupdate = this.firebase.list('device');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }


  ngOnInit(): void {

   

    this.formGroup=new FormGroup({
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
    this.deviceService.getDeviceById(this.id1).subscribe((results) => {
      
      this.getdevice(results)
    
    })

  }

  getdevice(entries: any[]){
   
    this.devicedetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.devicedetails.push(y as Device);

      this.data.Name = this.devicedetails[0]['Name'] 
      this.data.Notes = this.devicedetails[0]['Notes'] 
      this.data.DataLogger = this.devicedetails[0]['DataLogger'] 
     
   
     
   })
   console.log("res");
   console.log(this.data.Name);
   console.log(this.devicedetails);
   }

  onSubmit1() {
  
    let create = 'false';
    
     console.log(this.data.Name);
     this.deviceforupdate.update(this.id1 , {
      Name :  this.data.Name ,
      Notes  : this.data.Notes   ,
      DataLogger :  this.data.DataLogger ,
    }).then(added =>{




      
      this.router.navigate(['/device'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  

 
  }
}
