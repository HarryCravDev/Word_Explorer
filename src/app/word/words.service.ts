import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words: any = new Subject<any>()

  constructor(private http: HttpClient) { }


  async foo(): Promise<any>{
    const data = await this.http.get("http://localhost:3000/words");

    data.subscribe((word: any) => {
      console.log("Service: ", word);
      this.words.next(word.word);
    });
  }
  
  async getWords(): Promise<Observable<any>> {
    // const res = await this.http.get("http://localhost:3000/words");
    // return res;

    return this.http.get("http://localhost:3000/words");
  }
  
  async searchWord(word: string): Promise<Observable<any>> {

    const options = {
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "6c0fed6d17msh5935458206f0d8ep1aff04jsn5631d0992f63"
      }
    };

    const data = await this.http.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options);

    return data;
  }

}
