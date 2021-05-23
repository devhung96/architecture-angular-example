import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpClientBase {
  baseUrl?: string = 'https://60aa032366f1d00017772494.mockapi.io/api/v1';
  constructor(private httpClient: HttpClient) {}
}
