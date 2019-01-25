import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../core';
import { AlbumSummary } from 'src/app/shared';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: AlbumSummary[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    // Appel à l'API pour charger les albums
    this.albumService.getAll().subscribe(
      albums => this.albums = albums,
      error => console.log("Error")
    )
  }

}
