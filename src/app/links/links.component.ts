import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links = [
    {
      title : 'Email',
      value : 'alaeddinne.ennouinou@gmail.com',
      icon : 'at',
    },
    {
      title : 'Téléphone',
      value : '+212 6 24 05 20 11',
      icon : 'phone',
    },
    {
      title : 'Linekedin',
      value : 'https://www.linkedin.com/in/alae-ennouinou-50103a180/',
      icon : 'linkedin',
    },
    {
      title : 'Github',
      value : 'https://github.com/Ennouinou',
      icon : 'github',
    },
    {
      title : 'Adresse',
      value : 'LOT 23 RUE ANOUAL KENITRA',
      icon : 'map-marker',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
