import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss'],
})
export class ViewproductComponent implements OnInit {
  productDetails:any=[];

  constructor() {}

  ngOnInit(): void {
    this.productDetails = JSON.parse(localStorage.getItem('product') || '');
    console.log(this.productDetails);
  }
}
