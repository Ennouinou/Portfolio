import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  formations = [
    {
      date : '2019-2021',
      title : 'Master Spécialisé Qualité du Logiciel MQL',
      details : 'FS : Faculté des sciences - Fès',
    },
    {
      date : '2018-2019',
      title : 'Licence Science et Technique –GENIE INFORMATIQUE ',
      details : 'FST : Faculté des sciences technique - Fès - mention Bien',
    },
    {
      date : '2015-2018',
      title : 'DEUST spécialité MIP',
      details : 'FST : Faculté des sciences technique - Fès - mention A.Bien',
    },
    {
      date : '2014-2015',
      title : 'Baccalauréat science physiques',
      details : 'Lycée - Kenitra - mention bien',
    },
  ];
  internships = [
    {
      date : '2019 | Avril-Mai',
      title : 'Projet Fin d\'étude | Licence | S2 HD NEGOCE',
      details : 'Développer une application web basée sur une architecture distribuée JavaEE pour une agence de voyage permettant la digitalisation de leurs services notamment la réservation des voyages et la gestion de stock.',
    },
  ];
  projects = [
    {
      date : '2020 | Juin-Septembre',
      title : 'Participation à la réalisation d\'une plateforme web de visite immobilière en 360°',
      details : 'Technologies : Lumen, Angular, ThreeJs, Materialize',
    },
    {
      date : '2020 | Mai',
      title : 'Participation à la réalisation de la plateforme multi-thèmes MQL | Single Page Application ',
      details : 'Technologies : HTML, CSS, JavaScript',
    },
    {
      date : '2020 | Mars-Avril',
      title : 'Réalisation d\'une application web pour digitaliser la gestion des patiens d\'un hôpital',
      details : 'Technologie : Spring MVC, Spring Data, Spring Secutity , Thymeleaf',
    },
    {
      date : '2020 | Janvier',
      title : 'Réalisation d\'une application desktop permettant la création du diagramme de classe d\'un package donnée',
      details : 'Technologie : JAVA : Introspection - SWING',
    },
  ];
  skills = [
    {
      date : 'JAVA EE',
      title : 'Servlet, Filters, JSP, MVC, MVC2',
      details : '',
    },
    {
      date : 'Framework Java EE',
      title : 'Struts2, JSF, Spring, Hibernate',
      details : '',
    },
    {
      date : 'Ingénieurie Web',
      title : 'HTML, CSS, JavaScript, JQuery, Ajax, PHP, Lumen, Three.js, Angular',
      details : '',
    },
    {
      date : 'Technologies XML',
      title : 'DTD, XSD, XPATH, XSLT, XQuery, DOM, SAX',
      details : '',
    },
    {
      date : 'Business Intelligence',
      title : 'ETL, DataWarehouse, DataMart, Cube OLAP, MDX, Reporting',
      details : '',
    },
    {
      date : 'Outils BI',
      title : 'Talend, Pentaho, Vanilla, JasperSoft, Power BI, Tableau, Iccube, QlikView',
      details : '',
    },
    {
      date : 'Modélisation et GL',
      title : 'UML2, Design Patterns, Scrum, XP',
      details : '',
    },
    {
      date : 'Qualité',
      title : 'Approche Processus, ISO, CMMI, MSP,',
      details : '',
    },
    {
      date : 'SGBD',
      title : 'MySQL, Processus, ISO, CMMI, MSP,',
      details : '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  blueTheme(): void{
    const leftSide = document.getElementsByClassName('left-side')[0] as HTMLElement;
    leftSide.style['background-color'] = 'rgb(51, 83, 132)';
    const elements = document.getElementsByClassName('element') as HTMLCollectionOf<HTMLElement>;
    console.log(elements);
    for (let i = 0 ; i < elements.length ; i++){
      elements[i].style['background-color'] = 'white';
     }
    const mainSide = document.getElementsByClassName('main-side')[0] as HTMLElement;
    mainSide.style['background-color'] = 'white';
    document.getElementsByClassName('big-title')[0].classList.add('white');
    const links = document.getElementsByClassName('link-value') ;
    for (let i = 0 ; i < links.length ; i++){
        links[i].classList.add('white');
    }
  }
  grayTheme(): void{
    const leftSide = document.getElementsByClassName('left-side')[0] as HTMLElement;
    leftSide.style['background-color'] = 'rgb(240,240,240)';
    const elements = document.getElementsByClassName('element') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0 ; i < elements.length ; i++){
      elements[i].style['background-color'] = 'rgb(240,240,240)';
    }
    const mainSidde = document.getElementsByClassName('main-side')[0]  as HTMLElement;
    mainSidde.style['background-color'] = 'whitesmoke';
    document.getElementsByClassName('big-title')[0].classList.remove('white');
    const links = document.getElementsByClassName('link-value');
    for (let i = 0 ; i < links.length ; i++){
      links[i].classList.remove('white');
    }
  }

}
