import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from './book-details';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  //HttpModule/HttpClient
  configUrl = "http://216.10.245.166//Library/GetBook.php?AuthorName=Shetty1";

  constructor(private http: HttpClient) { }

  getBookDetails() : Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.configUrl);
  };

  addBook() {};

  deleteBook() {};
}
