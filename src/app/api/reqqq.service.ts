import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqqqService {

  constructor(private http: HttpClient) { }

  getKontaks(){
    return this.http.get<any[]>
    ('http://192.168.43.41:3000/daftar');
  }

  pushData(nama: any, no_hp: any, email: any){
    let data ={
      "nama": nama,
      "no_hp": no_hp,
      "email": email,
    }
    return this.http.post<any[]>
    ('http://192.168.43.41:3000/buat',data);
  }

  deleteData(id){
    let httpOptions = {
      headers: new HttpHeaders({
        'id': ''+id
      })
    }
    return this.http.delete<any[]>
    ('http://192.168.43.41:3000/hapus', httpOptions);
  }

}
