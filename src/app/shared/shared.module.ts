import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';


const COMPONENTS = [SearchComponent]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports:[COMPONENTS]
})
export class SharedModule { }
