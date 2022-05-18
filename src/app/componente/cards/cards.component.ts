import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/servicios/api.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  pages: number = 1;

  datosApi!: any;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerDatosApiD();
  }

  obtenerDatosApiD() {
    this.apiService.obtnerDatos().subscribe(
      (res) => (this.datosApi = res),
      (err) => console.log(err)
    );
  }

  botonLevel(e: any) {
    e.target;
    Swal.fire({
      title: 'El nivel deeste Digimon es: ' + e,
    });
  }
}
