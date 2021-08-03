import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/livre';
import { LivreServiceService } from 'src/app/shared/livre-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

  id!: number;
  livre: Livre = new Livre();
  constructor(private livreService: LivreServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.livreService.getLivreById(this.id).subscribe(data => {
      this.livre = data;
    }, error => console.log(error));
  }
  onSubmit() {
    this.livre.categorie = `http://localhost:8080/categories/${this.livre.categorie}`;
    this.livreService.updateLivre(this.id, this.livre).subscribe(data => {
      this.goToLivreList();
    }
      , error => console.log(error));
  }

  goToLivreList() {
    this.router.navigate(['/']);
  }

}
