import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.page.html',
  styleUrls: ['./detail-menu.page.scss'],
})
export class DetailMenuPage implements OnInit {

  data: any;

  constructor(private activedRroute: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.activedRroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    })
    console.log(this.data);
  }

  // this.activedRroute.queryParams.subscribe(params => {
  //   if (this.router.getCurrentNavigation().extras.state) {
  //     this.data = this.router.getCurrentNavigation().extras.state.listMains;
  //   }
  // });
  

}
