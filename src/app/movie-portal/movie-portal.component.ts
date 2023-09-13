import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-portal',
  templateUrl: './movie-portal.component.html',
  styleUrls: ['./movie-portal.component.css']
})
export class MoviePortalComponent {
@Input() pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-L_rj8CuYehsE3IHUWe3zUw7St8gvHSYObw&usqp=CAU"
@Input() movieName = "OPPENHEIMER";
@Input() rating = "⭐ 9.1";
@Input() description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias,
sequi repellendus eaque libero voluptatem itaque consequuntur facere illum
rem quis error eum, repellat, rerum dolorum earum! Nihil, harum similique.
Architecto autem porro sunt culpa nesciunt fugit sit illum, quisquam quam,
impedit at odio magni distinctio quos ut qui voluptate`;
}
