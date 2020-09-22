import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ennouinou-cv';
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
      title : 'HTML, CSS, JavaScript Tomcat',
      details : '',
    },
    {
      date : 'Modélisation et Génie Logiciel',
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
}
