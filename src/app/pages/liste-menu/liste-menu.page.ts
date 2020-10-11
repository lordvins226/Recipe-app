import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { DetailMenuPage } from '../detail-menu/detail-menu.page';

@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.page.html',
  styleUrls: ['./liste-menu.page.scss'],
})
export class ListeMenuPage implements OnInit {

  searchText = '';

  listMains = [
    {
      Id: 1,
      Nom: "Doro wat",
      Origine: "Ethiopie",
      Description: "Il est très consommé dans le Nord de l’Éthiopie. Le doro wat est une sorte de ragoût à base de poulet et d’une sauce pimentée. Le plat s’accompagne souvent des œufs et des légumes, le tout sur l’injeera, une galette à base de farine de teff.",
      Image: "assets/images/doro-wat.jpg"
    },
    {
      Id: 2,
      Nom: "Thiéboudienne",
      Origine: "Mali",
      Description: "On l’appelle parfois «riz au gras» dans d’autres pays d’Afrique de l’Ouest. Le thiéboudienne est composé de riz, de poissons et de beaucoup de légumes.",
      Image: "assets/images/thieboudienne.jpeg"
    },
    {
      Id: 3,
      Nom: "Couscous",
      Origine: "Maroc",
      Description: "Le couscous est connu comme étant le plat le plus célèbre d’Afrique du Nord. La préparation varie cependant selon les pays.",
      Image: "assets/images/couscous.jpg"
    },
    {
      Id: 4,
      Nom: "Soya",
      Origine: "Nigéria",
      Description: "Le soya est un plat de viandes grillées très populaire que l’on trouve au Cameroun, au Nigeria ou au Ghana. La viande est assaisonnée avec un mélange d’épices (paprika, gingembre, cayenne, etc.)",
      Image: "assets/images/soya.jpg"
    },
    {
      Id: 5,
      Nom: "Garba",
      Origine: "Côte d'Ivoire",
      Description: "Plat typique ivoirien; il est composé de thon frit et de semoule de manioc appelée attiéké. Il s’agrémente de tomates, d’oignons et de piments frais découpés.",
      Image: "assets/images/garba.jpg"
    },
    {
      Id: 6,
      Nom: "Alloco",
      Origine: "Côte d'Ivoire",
      Description: "Ce plat désigne de la banane plantain frite. Il se mange avec des œufs, du poisson et toute sortes de viande.",
      Image: "assets/images/alloco.jpg"
    },
    {
      Id: 7,
      Nom: "Poulet Yassa",
      Origine: "Sénégal",
      Description: "Le fameux yassa sénégalais est composé de poulet cuit avec de la moutarde, beaucoup d’oignons. On le déguste traditionnellement avec du riz.",
      Image: "assets/images/yassa.jpg"
    },
    {
      Id: 8,
      Nom: "Bobotie",
      Origine: "Afrique de Sud",
      Description: "Le bobotie est un plat orginaire de l’Afrique du Sud. Il désigne un gratin à base de viande hachée épicée, d’œuf et de pain imbibé de lait.",
      Image: "assets/images/bobotie.jpg"
    },
    {
      Id: 9,
      Nom: "Ndolè",
      Origine: "Cameroun",
      Description: "Le ndolé est une spécialité camerounaise composée de feuilles du même nom, et qui se prépare avec de la viande et/ou du poisson fumé.",
      Image: "assets/images/ndole.jpg"
    },
    {
      Id: 10,
      Nom: "Tajine",
      Origine: "Maroc",
      Description: "Le tajine est surtout le récipient qui aide à la cuisson de cette spécialité marocaine. Ce mélange de viandes et d’épices est un délice.",
      Image: "assets/images/tajine.jpg"
    }
  ];



  constructor(private router: Router, private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  search(event) {
    this.searchText = event.detail.value;
  }
  detailWithQueryParams(menu: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(menu),
      }
    };
    this.router.navigate(['/detail-menu'], navigationExtras);
  }

  // openDetailsWithState() {
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       listMains: this.listMains
  //     }
  //   };
  //   this.router.navigate(['/detail-menu'], navigationExtras);
  // }

  // navigate() {
  //   this.router.navigate(['/detail-menu'])
  // }




  ngOnInit() {
  }

}
