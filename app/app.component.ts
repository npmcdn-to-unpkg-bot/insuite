import { Component, OnInit } from '@angular/core';
import { Camera } from './app.camera';
import { CameraService } from './app.service.camera';


@Component({
  selector: 'insuite-app',
  templateUrl: 'app/views/app.component.camera-view.html',
  styleUrls: ['app/styles/app.component.camera-view.css'],
  providers: [ /* The providers array tells Angular to create a 
                  fresh instance of the CameraService when it creates a new AppComponent. 
                  The AppComponent can use that service to get cameras and so can every 
                  child component of its component tree. */
    CameraService
  ],
})
export class AppComponent implements OnInit{

cameras: Camera[];

/*  injects the service as a singleton  */
constructor(private cameraService: CameraService) { }

/*  get cameras from the service */
getCameras(){
    this.cameras = this.cameraService.getCameras();
}

/*  Lifecycle Hook used to call a method in the beginning of the component lifecycle.  */
ngOnInit(){
  this.getCameras();
}




 }
