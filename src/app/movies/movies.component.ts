import { Component, Input } from '@angular/core';
interface Movie{
  name:string,
  poster:string,
  rating:number,
  summary:string
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent {
  @Input() MoviesList: Movie = {
    name:"",
    poster:"",
    rating:0,
    summary:""
    }
}
