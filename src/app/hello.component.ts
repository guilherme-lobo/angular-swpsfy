import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
//import { Result } from '@zxing/library';
@Component({
  selector: 'hello',
  template: `
    <zxing-scanner></zxing-scanner>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  //@Input() resultstring: string;
  resultstring = '';
  hasDevices: boolean = false;
  hasPermission: boolean;
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo;
  scanner: ZXingScannerComponent;
  constructor() {}

  ngOnInit() {
    this.hasPermission = false;
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
    });
    this.scanner.camerasNotFound.subscribe(() => {
      this.hasDevices = false;
    });
    // this.scanner.scanComplete.subscribe((result: Result) => {
    //   this.qrResult = result;
    //   this.hasPermission = false;
    // });
    this.scanner.permissionResponse.subscribe((perm: boolean) => {
      this.hasPermission = perm;
    });
  }

  handleQrCodeResult(resultstring) {
    resultstring = resultstring;
    alert(resultstring);
  }
}
