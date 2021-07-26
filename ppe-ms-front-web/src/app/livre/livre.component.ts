import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  //email: string = 'siiif@gmail.com';
  listCategories: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/categories")
      .subscribe(data => {
        this.listCategories = data;
        console.log(JSON.stringify(data));
      }, error => {
        console.error(error);
      });

  }

}
