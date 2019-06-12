import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private username: string;
  private clientid = '78d239211a3a6465f0bc';
  private clientsecret = 'ed2c3711f241772b2662d0e386ebe196a4620a09';


  constructor(private http: HttpClient) {
    console.log('service is now ready!');
    this.username = 'Nasiboyussuf';
    }
    getProfileInfo() {
      return this.http.get('https://api.github.com/users/' + this.username + '?client_id' +
      this.clientid + '&client_secret' + this.clientsecret).pipe(map(res => res));
    }
    getProfileRepos() {
      return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id' +
      this.clientid + '&client_secret' + this.clientsecret).pipe(map(res => res));
    }
    updateProfile(username: string) {
      this.username = username;
    }
  }
