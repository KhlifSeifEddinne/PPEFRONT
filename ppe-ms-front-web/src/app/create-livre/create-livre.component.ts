import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/livre';
import { Router } from '@angular/router';
import { LivreServiceService } from 'src/app/shared/livre-service.service';

@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrls: ['./create-livre.component.css']
})
export class CreateLivreComponent implements OnInit {
  livre: Livre = new Livre();
  constructor(private livreService: LivreServiceService, private router: Router) {

  }

  ngOnInit(): void {
  }
  goToLivreList() {
    this.router.navigate(['/']);
  }
  saveLivre() {
    this.livreService.createLivre(this.livre).subscribe(data => {
      console.log(data);
      this.goToLivreList();
    },
      error => console.log(error));
  }
  onSubmit() {
    console.log(this.livre);
    this.saveLivre();
  }

}
