import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeeplaidComponent } from './deeplaid.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { AddorderComponent } from './addorder/addorder.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [DeeplaidComponent, HomePageComponent, AddorderComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    DataTablesModule,
    ModalModule.forRoot(),
    NgSelectModule
    
  ]
})
export class DeeplaidModule { }
providers: [
  
  BsModalRef,

]
