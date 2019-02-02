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
  idAlbum:number;


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


getIdAlbumFromArtist(artist:ArtistSummary):number{
this.albums.forEach(album => {
  if(artist===album.artist){
    this.idAlbum=album.id;
  }
  });
 return this.idAlbum;
}

}
