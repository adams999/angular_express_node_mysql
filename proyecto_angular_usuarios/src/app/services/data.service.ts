import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private url: string = 'http://localhost:8090/api/';

  constructor(public http: HttpClient) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  getAll(txtSearch: string = '') {
    let aux: string = txtSearch ? `/${txtSearch}` : '';
    return this.http.get(this.url + 'test/getAll' + aux);
  }

  updateTest(id: number, body: {}) {
    return this.http.put(this.url + 'test/update/' + id, body);
  }

  deleteTest(id: number) {
    return this.http.delete(this.url + 'test/delete/' + id);
  }

  insertTest(body: {}) {
    return this.http.post(this.url + 'test/insert', body);
  }

  getChartPie() {
    return this.http.get(this.url + 'getChartPie');
  }

  getChartBar() {
    return this.http.get(this.url + 'getChartBar');
  }
}
