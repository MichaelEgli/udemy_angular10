import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators"; 
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
        postData
        ).subscribe(responseData => {
          console.log(responseData);
        }, error => {
          this.error.next(error.message);
        });

    }

    fetchPosts() {
        return this.http
        .get< { [key: string]: Post }>('https://ng-complete-guide-53bf4-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
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
      return this.http.delete('https://ng-complete-guide-53bf4-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    }
}