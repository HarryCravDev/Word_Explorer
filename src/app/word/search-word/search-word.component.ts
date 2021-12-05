import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {

  word: {} | null = null;
  showWord: boolean = false;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
  }

  onBackToWords() {
    this.showWord = false;
  }

  async onSearchWord(word: string) {
    // @desc - Speaks to wordapi method, this will be used!! All working
    // const wordInfo = await this.wordsService.searchWord(word);

    // For testing - to get test data from my api...
    // const wordInfo = await this.wordsService.searchWord(word);
    const wordInfo = await this.wordsService.getWords();

    wordInfo.subscribe(word => {

      console.log("Subscribe: ", word);
      this.word = word.word;
      // this.word = word;
      this.showWord = true;
    });

  }

}
