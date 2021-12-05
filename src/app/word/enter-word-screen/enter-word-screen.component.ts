import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-enter-word-screen',
  templateUrl: './enter-word-screen.component.html',
  styleUrls: ['./enter-word-screen.component.css']
})
export class EnterWordScreenComponent implements OnInit {

  words: string[] = [""];
  word: any = "";

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {

    this.getWords();
  }

  async getWords() {
    const data = await this.wordsService.getWords();
    await this.wordsService.foo();


    await this.wordsService.words.subscribe((word: any) => {
      console.log("Subscribe: ", word);
      this.word = word;
    })

    console.log("Word: ", this.word);
  }

}
