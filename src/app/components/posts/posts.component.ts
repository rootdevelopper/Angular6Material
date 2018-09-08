import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };

  isEdit = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  removePost(post: Post) {
    this.postService.removePost(post).subscribe(() => {
      this.posts.forEach((currentPost, index) => {
        if (post.id === currentPost.id) {
          this.posts.splice(index, 1);
          this.posts.unshift(post);
        }
      });

    });
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((currentPost, index) => {
      if (post.id === currentPost.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });
  }
}
