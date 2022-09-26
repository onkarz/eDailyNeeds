import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  products = [
    {
      id: 1,
      productName: 'Truptee Tea',
      price: '90',
      qrCodeUrl: '../assets/img/qr.jpg',
      productImage: '../assets/img/trupti1.png',
      weight:'250g'
    },
    {
      id: 2,
      productName: 'Truptee Tea',
      price: '180',
      qrCodeUrl: '../assets/img/qr.jpg',
      productImage: '../assets/img/trupti1.png',
      weight:'500g'
    },
    {
      id: 3,
      productName: 'Truptee Tea',
      price: '360',
      qrCodeUrl: '../assets/img/qr.jpg',
      productImage: '../assets/img/trupti1.png',
      weight:'1Kg'
    },
  ];


  viewProduct(item: any){
    console.log(item);
    localStorage.setItem("product", JSON.stringify(item));
    this.router.navigate(["/view"]);
  }
}
