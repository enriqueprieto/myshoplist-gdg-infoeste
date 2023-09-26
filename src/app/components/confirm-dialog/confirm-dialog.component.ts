import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [ MatButtonModule, MatDialogModule],
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onConfirm(): void {
    // Lógica para ação de confirmação aqui
    this.dialogRef.close(true); // Fecha o diálogo e retorna true
  }

  onCancel(): void {
    this.dialogRef.close(false); // Fecha o diálogo e retorna false
  }
}
