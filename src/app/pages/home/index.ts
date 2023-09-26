import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { ListaFormDialogComponent } from 'src/app/components/lista/lista-form-dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ListaService } from 'src/app/services/lista';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule, MatToolbarModule, MatCardModule,
    CommonModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _listas: Lista[] = [];

  constructor(public dialog: MatDialog, private _listaService: ListaService) {
    this.atualizaLista();
  }

  get listas() {
    return this._listas;
  }

  atualizaLista() {
    this._listas = this._listaService.getListas();
    console.log(this._listas);
  }

  abrirLista(lista: any) {
    this._openDialog({ lista })
  }

  adicionarLista() {
    this._openDialog({});
  }

  abrirDialogoDeConfirmacao(lista: Lista): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._listaService.remove(lista);
        this.atualizaLista();
      }
    });
  }

  private _openDialog(data: {}) {
    const dialogRef = this.dialog.open(ListaFormDialogComponent, {
      data    
    });

    dialogRef.afterClosed().subscribe(this._onDialogClose.bind(this));
  }

  private _onDialogClose(result: any) {
    this.atualizaLista();
  }
}
