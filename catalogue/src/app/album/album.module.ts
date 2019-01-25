import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';

import { MatCardModule, MatButtonModule, MatListModule, MatDividerModule, MatIconModule, MatGridListModule } from '@angular/material';


import { FlexLayoutModule } from '@angular/flex-layout';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
  declarations: [AlbumListComponent, AlbumDetailsComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatListModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
