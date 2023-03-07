import { Injectable } from '@angular/core';
import { IReadable } from '@librimem/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ReadableClientService {
  constructor(private http: HttpClient) { }

  public addReadable(readable: Omit<IReadable, "id">) {
    return this.http.post<{ readable: IReadable }>(environment.readableAPI, readable)
  }

  public getReadable(entityId: number) {
    return this.http.get<IReadable>(environment.readableAPI + "/" + entityId.toString())
  }
}
