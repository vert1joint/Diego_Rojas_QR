import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  scannedResult: any;
  bandera: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  //Scanear QR
  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true});
      if (status.granted) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      return;
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
  
      // Agrega una clase al elemento principal
      document.querySelector('body')?.classList.add('scanner-active');
      this.bandera = false;

      await BarcodeScanner.hideBackground();
  
      const result = await BarcodeScanner.startScan();
      console.log(result);
  
      if (result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground();
  
        // Elimina la clase cuando desactivas el escaneo
        document.querySelector('body')?.classList.remove('scanner-active');
        this.bandera = true;
        console.log(this.scannedResult);
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.startScan();
    document.querySelector('body')?.classList.add('scanner-active');
  }

}
