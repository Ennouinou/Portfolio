import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-p',
  templateUrl: './infos-p.component.html',
  styleUrls: ['./infos-p.component.css']
})
export class InfosPComponent implements OnInit {

  name: string;
  date: string;
  constructor() {
    this.name = 'Ennouinou Alaeddinne';
    this.date = 'Né le 15-01-1998';
  }

  ngOnInit(): void {
  }

}
