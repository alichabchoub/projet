import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './device';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

   deviceList: AngularFireList<any>

  

  constructor(private db:AngularFireDatabase ) {

    this.deviceList = db.list('device')
  }





  createUser(device: Device) {
    
    this.deviceList.push({
      Id: device.Id ,
      Name: device.Name ,
      Notes: device.Notes ,
      DataLogger: device.DataLogger,
      TypeReseau: device.TypeReseau,
      Status: device.Status
    
    
    
}).catch(error=>{
console.error(error)

})

}


getDevice() : Observable<any>{
return this.db.list('device').snapshotChanges();
}

getDeviceById(id:any) : Observable<any>{
  return this.db.list('device', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
}}