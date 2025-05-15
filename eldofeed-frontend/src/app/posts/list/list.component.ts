import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Erro ao buscar posts', err)
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(post => post.id !== id);
      },
      error: (err) => console.error('Erro ao excluir post', err)
    });
  }
}
