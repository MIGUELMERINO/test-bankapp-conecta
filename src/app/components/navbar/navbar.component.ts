import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cuenta;
  
  constructor(private home: HomeService) { }

  ngOnInit(): void {
    this.home.getAccounts().subscribe( res => {
      this.cuenta = res.cuenta[0];
    });
  }

}
