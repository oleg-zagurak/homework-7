import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products: Product[] = [
    {
      name: 'Rice', price: '$20', expirationDate: '13.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },

    {
      name: 'Coockie', price: '$11', expirationDate: '11.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },

    {
      name: 'Milk', price: '$2.50', expirationDate: '13.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },

    {
      name: 'Jam', price: '$2', expirationDate: '12.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },

    {
      name: 'Bread', price: '$3', expirationDate: '09.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },

    {
      name: 'Butter', price: '$20', expirationDate: '13.08.2021',
      date: new Date('2021-08-10').toLocaleDateString(), category: 'products', end: false, warn: false
    },
  ]

  constructor() { }

  public checkDate(): void {
    let arr = this.products;
    arr.forEach(e => {
      let firstDate = e.date;
      let secondDate = e.expirationDate;

      let regex: RegExp = new RegExp(/(\d\d)\.(\d\d)\.(\d\d\d\d)/);

      if (regex.test(firstDate) && regex.test(secondDate)) {
        let first_date_arr: string[] = firstDate.split('.');
        let first_milisec = new Date(`${first_date_arr[2]}-${first_date_arr[1]}-${first_date_arr[0]}`);
        
        let second_date_arr: string[] = secondDate.split('.');
        let second_milisec = new Date(`${second_date_arr[2]}-${second_date_arr[1]}-${second_date_arr[0]}`);

        if (first_milisec.getTime() > second_milisec.getTime()) {
          e.end = true;
        }
        if (((second_milisec.getTime() - first_milisec.getTime()) / (1000 * 60 * 60)) <= 48 && !e.end) {
          e.warn = true;
        }
      }
    })
  }

  public getProducts(): Product[] {
    return this.products;
  }
}