import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/servicios/api.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  datosApi!: any;
  public contador: any;

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
}
