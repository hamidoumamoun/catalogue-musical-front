import { Component, OnInit } from '@angular/core';
import { ArtistService, AlbumService } from 'src/app/core';
import { ArtistSummary, AlbumSummary } from 'src/app/shared';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: ArtistSummary[]=[];
  albums: AlbumSummary[];


  constructor(private albumService: AlbumService) { 
    
  }

  ngOnInit() {
    this.albumService.getAll().subscribe(
      data => {
        this.albums = data,
        this.getAllArtist()
      },
      error => console.log("Error")
    )
 
  }
getAllArtist(){
 this.albums.forEach(album => {
    this.artists.push(album.artist)
  });
}
}
