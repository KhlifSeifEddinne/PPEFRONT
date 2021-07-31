import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  listLivres: any;
  //ttLivres = { id: -1 };
  listCategories: any;
  categorieCourrante: any;

  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/categories")
      .subscribe(data => {
        this.listCategories = data;
        console.log(data);
      }, error => {
        console.error(error);
      });

  }
  public readLivre(idCategorie?: number) {
    this.categorieCourrante = idCategorie;
    //this.ttLivres = this.listLivres;
    let url = "http://localhost:8080/livres";
    if (idCategorie) {
      url = `http://localhost:8080/categories/${idCategorie}/livres`
    }
    this.httpClient.get(url)
      .subscribe(data => {
        this.listLivres = data;
        console.log(data);
      }, error => {
        console.error(error);
      });
  }

}
