import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) {}

    getAll(){
    return this._http.get('/review')

 }

    getOne(id){
      return this._http.get(`/review/${id}`)

    }

    create(prod){
      return this._http.post('/review', prod)

    }

    
    update(id, prod){

      return this._http.put(`/review/${id}`, prod )

    }

    delete(id){

      return this._http.delete(`/review/${id}`)

    }

    getTasks(){
    return this._http.get('/review')
 }


    // addLike(id, likes){

    //   return this._http.put(`/review/${id}/like`, likes)

    // }



}





