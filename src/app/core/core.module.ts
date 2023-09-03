import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

const MODULES = [ FlexLayoutModule, MaterialModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES]
})
export class CoreModule { }
