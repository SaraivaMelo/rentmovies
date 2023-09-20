import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AddCommentDialogComponent } from './components/add-comment-dialog/add-comment-dialog.component';
import { SliderComponent } from './components/slider/slider.component';

const COMPONENTS = [AddCommentDialogComponent, SliderComponent]

const MODULES = [ FlexLayoutModule, MaterialModule]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS]
})
export class CoreModule { }
