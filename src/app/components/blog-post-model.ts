export class BlogPostModel {
  push(post: BlogPostModel) {
    throw new Error('Method not implemented.');
  }
  titulo: string = '';
  imagem: string = '';
  texto: string = '';
  exibirImagem = true;
}
