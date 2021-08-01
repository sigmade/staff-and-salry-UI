import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './modules/shared-material/shared-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    SharedMaterialModule
  ]
})

export class SharedModule { }