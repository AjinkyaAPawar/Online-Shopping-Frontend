import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  id1!: number;
  name1!: string;
  constructor(private router: Router, private http: HttpClient){}
  getThisCategory(id: number, name: string){
    this.id1 = id;
    this.name1 = name;
    this.router.navigateByUrl('/categories', {state:{"categoryId":this.id1, "categoryName": this.name1}});
  }
}
