import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.page.html',
  styleUrls: ['./mytickets.page.scss'],
})
export class MyticketsPage implements OnInit {
  code = 'some sample string';
  generated = '';
  generated2 = '';

  constructor() { }

  ngOnInit() {
    this.process();
  }

  displayQrCode() {
    return this.generated !== '';
    return this.generated2 !== '';
  }

  process() {
    const segs = [
      { data: 'null', mode: 'null' }
    ];

    const segs2 = [
      { data: 'BacketBall', mode: 'KTAYLOR1' }
    ];

    QRCode.toDataURL(segs, (err, url) => {
      this.generated2 = url;
    });

    QRCode.toDataURL(segs2, (err, url) => {
      this.generated = url;
    });
  }

}
