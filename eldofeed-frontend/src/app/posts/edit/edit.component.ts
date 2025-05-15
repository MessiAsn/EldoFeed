import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe({
      next: (data) => this.post = data,
      error: (err) => console.error('Erro ao buscar post', err)
    });
  }

  updatePost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.updatePost(id, this.post).subscribe({
      next: (res) => console.log('Post atualizado!', res),
      error: (err) => console.error('Erro ao atualizar post', err)
    });
  }
}
