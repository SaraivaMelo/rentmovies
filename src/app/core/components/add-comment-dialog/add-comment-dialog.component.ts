import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-data.model';

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.css']
})
export class AddCommentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCommentDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
