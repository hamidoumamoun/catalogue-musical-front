import { Component, OnInit } from '@angular/core';
import { AlbumDetails } from '../../shared';
import { AlbumService } from '../../core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: AlbumDetails;

  constructor(private albumService: AlbumService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number.parseInt(params.get('id'));
        return this.albumService.getById(id);
      })
    ).subscribe(
      album => this.album = album,
      error => console.log("Error")
    )
  }

}
