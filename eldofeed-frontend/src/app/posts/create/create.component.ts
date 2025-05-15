import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true, // Adicione esta linha
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  post: any = {};

  constructor(private postService: PostService) {}

  createPost() {
    this.postService.createPost(this.post).subscribe({
      next: (res) => console.log('Post criado!', res),
      error: (err) => console.error('Erro ao criar post', err)
    });
  }
}
