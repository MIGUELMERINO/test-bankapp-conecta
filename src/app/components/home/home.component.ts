import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movements;
  cards;
  balances;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getMovements().subscribe( (res) => {
      this.movements = res.movimientos;
    }, error => console.error(error));
    this.homeService.getCard().subscribe( res => {
      this.cards = res.tarjetas;
    }, error => console.error(error));
    this.homeService.getBalances().subscribe( res => {
      console.log(res.saldos);
      this.balances = res.saldos[0];
    }, error=> console.error(error));
  }

}
