import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
     return;
    }else{
      this.postService.savePost({title, body} as Post).subscribe(post => {
        console.log(post);
        this.newPost.emit(post);
      }) ;
    }
  }

}
