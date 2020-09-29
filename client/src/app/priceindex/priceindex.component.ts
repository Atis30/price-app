import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Priceschema } from './priceschema';

import { PricelistService } from '../priceindex.service';
import { Priceschema } from '../priceschema';

@Component({
  selector: 'app-priceindex',
  templateUrl: './priceindex.component.html',
  styleUrls: ['./priceindex.component.css'],
})
export class PriceindexComponent implements OnInit {
  priceForm: FormGroup;
  errorMessage: string;
  showSpinner = false;
  price: Priceschema[];

  constructor(
    private pricelistService: PricelistService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.init();
  }
  //private getPrice(){
  //this.pricelistService.getPrice(this.listprice, this.doff, this.netprice,this.comments).subscribe()
  // }

  init() {
    this.priceForm = this.fb.group({
      listprice: [''],
      doff: [''],
      netprice: [''],
      comments: [''],
    });
  }

  addPrice(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    this.pricelistService
      .saveAllPrice(this.priceForm.value)
      .subscribe((data) => {
        console.log(data);
        this.priceForm.reset();
      });
  }

  displayprice() {
    this.router.navigate(['display']);
  }
}
