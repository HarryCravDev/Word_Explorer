import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit, OnDestroy {

  // @Input() word: {} | null = null;
  @Input() word: any;
  syllables: string | undefined = "No syllables found for that word.";
  example: string | undefined = "";
  wordtype: string | undefined = "";
  definition: string | undefined = "";

  @Output() backToWords = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.getSyllables();
    this.getExample();
    this.getWordtype();
    this.getDefinition();
  }

  ngOnDestroy() {}

  onBackClick() {
    this.backToWords.emit();
  }

  getDefinition() {
    const wordDefinitionArr = this.word?.results;

    if(wordDefinitionArr){
      const wordDefinition = wordDefinitionArr[0].definition;
      return this.definition = wordDefinition;
    }

    return this.definition = "No definition found.";
  }

  getWordtype() {
    const wordTypeArr = this.word?.results;

    if(wordTypeArr){
      const wordType = wordTypeArr[0].partOfSpeech;
      return this.wordtype = wordType;
    }
    return "";
  }

  getExample() {

    this.word.results?.forEach((obj: any) => {

      if(this.example){
        return
      }

      if(obj.examples){
        return this.example = obj.examples[0];
      }
    });

    if(!this.example){
      return this.example = "No example found for that word.";
    }

    return "";
  }

  getSyllables() {
    const syllables = this.word.syllables?.list;
    let foo: string | undefined = undefined;

    if(syllables){
      foo = "";
      syllables.forEach((e: string, i: number) => {

        if(syllables.length === 1){
          return foo = e;
        }

        if(syllables.length === 2){
          return foo += (i === 0) ? e : ` - ${e}`;
        }
        
        if(i === 0){
          return foo += `${e} *`;
        }
        
        if(i === syllables.length - 1){
          return foo += ` ${e}`;
        }
        
        return foo += ` ${e} * `;
      });
      
      this.syllables = foo;

      return this.syllables;
    }

    return "";
  }

}
