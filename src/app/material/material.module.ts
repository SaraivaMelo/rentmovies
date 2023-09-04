import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

const MODULES = [ CommonModule, MatToolbarModule, MatIconModule , MatTooltipModule, MatCardModule]

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
