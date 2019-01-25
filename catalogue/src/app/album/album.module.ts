import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';

import { MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatGridListModule } from '@angular/material';


import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
