import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild("input") input : ElementRef;

  movements;
  cards;
  balances;

  formCard: FormGroup;

  constructor(private homeService: HomeService, private form: FormBuilder) {
    this.homeService.getMovements().subscribe( (res) => {
      this.movements = res.movimientos;
    }, error => console.error(error));
    this.homeService.getCard().subscribe( res => {
      this.cards = res.tarjetas;
    }, error => console.error(error));
    this.homeService.getBalances().subscribe( res => {
      this.balances = res.saldos[0];
    }, error=> console.error(error));
  }

  ngOnInit(): void {
    this.formCard = this.form.group({
      tarjeta: ['', Validators.required],
      cuenta: ['', Validators.required],
      issuer: ['', Validators.required],
      nombretarjeta: ['', Validators.required],
      marca: ['', Validators.required],
      estatus: ['', Validators.required],
      saldo: ['', Validators.required],
      tipocuenta: ['', Validators.required]
    });
  }

  add() {
    alert(JSON.stringify(this.formCard.value));
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}
