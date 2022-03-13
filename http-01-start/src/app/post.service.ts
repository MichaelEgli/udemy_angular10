import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators"; 
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content};
        console.log(postData);
        this.http
        .post< { name: string }>(
          'https://ng-complete-guide-53bf4-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
        postData,
        {
          observe: 'response'
        }
        ).subscribe(responseData => {
          console.log(responseData.body);
        }, error => {
          this.error.next(error.message);
        });

    }

    fetchPosts() {
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print', 'pretty');
        return this.http
        .get< { [key: string]: Post }>('https://ng-complete-guide-53bf4-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams,
          responseType: 'json'
        }
        )
        .pipe(map(responseData => {
          console.log('responseData', responseData);
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
    }

    deletePost() {
      return this.http.delete(
        'https://ng-complete-guide-53bf4-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events'
        }
      ).pipe(
        tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // .... 
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      }));
    }
}