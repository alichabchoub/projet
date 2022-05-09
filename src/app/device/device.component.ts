import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import {MatDialog} from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  Id: string;
  Name: string;
  Notes: string;
  DataLogger: string;
  TypeReseau: string;
  Status: string;

  userforupdate: AngularFireList<any>
  data = {
     Id: '',
     Name : '' ,
     Notes :  '' ,
     DataLogger :  ''  ,
     TypeReseau :  ''  ,
     Status :  ''  ,

   } 
    id1: any;

devicefordelete : AngularFireList<any>; 
listdevice: Device[] = [];

displayAdd: boolean = false;




deviceList: AngularFireList<any>

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private userService: DeviceService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ,private fire:AngularFireAuth) {
      this.deviceList = db.list('device');

      this.devicefordelete = this.firebase.list('device');
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('device');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }


  ngOnInit(): void {
    this.userService.getDevice().subscribe((results) => {
      
      this.listDevice(results)
   
    })
    
  
  }

  onSubmit() {
 
    let create = 'false';
    
            this.deviceList.push({
          
              Id: this.Id ,
              Name: this.Name ,
              Notes: this.Notes,
              DataLogger: this.DataLogger,
              TypeReseau: this.TypeReseau,
              Status: this.Status
           
          
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

  listDevice(entries: any[]){
    this.listdevice = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listdevice.push(y as Device);
  })
  console.log(this.listdevice);
  }

  openDialog(key: FirebaseOperation): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.devicefordelete.remove(key);
      
     
      }
    });   
  } 
  edit(key: string){
    
    this.router.navigate(['update-device/'+key])
  
  }
  



}