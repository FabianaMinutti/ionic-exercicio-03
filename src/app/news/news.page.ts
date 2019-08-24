import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private tituloCadastrado: string;
  private subtituloCadastrado: string;

  constructor() { 
  }

  ngOnInit() {
  }

  private cadastrar(titulo, subtitulo) {
    this.tituloCadastrado = titulo;
    this.subtituloCadastrado = subtitulo;
  }

}
