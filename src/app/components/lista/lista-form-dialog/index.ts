import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { Lista, ListaOptions } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista';
@Component({
  standalone: true,
  imports: [
    MatDialogModule, MatButtonModule, FormsModule,
    MatInputModule, MatFormFieldModule, MatSnackBarModule
  ],
  selector: 'app-lista-form-dialog',
  templateUrl: './lista-form-dialog.component.html',
  styleUrls: ['./lista-form-dialog.component.scss']
})
export class ListaFormDialogComponent {
  lista: Lista = new Lista();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ListaFormDialogComponent>,
    private _snackBar: MatSnackBar,
    private _listaService: ListaService
  ) {
    const {
      lista
    } = this.data;

    if (lista) {
      this.lista = new Lista(lista);
    }
  }

  salvarLista() {
    this._listaService.save(this.lista);

    this.fecharDialog();
  }

  fecharDialog() {
    return this.dialogRef.close();
  }

  salvar(event: SubmitEvent) {
    event.stopPropagation();

    if (!this.lista.name) {
      this._snackBar.open('Nome é obrigatório', 'Ok', {
        duration: 1000
      });

      return;
    }

    this.salvarLista();
  }
}
