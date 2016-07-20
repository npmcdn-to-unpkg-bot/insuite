import { Injectable } from '@angular/core';
import { Camera } from './app.camera';
import { CAMERAS } from './app.mock-cameras';


@Injectable()
export class CameraService {

  getCameras() {
    return CAMERAS;
  }

}