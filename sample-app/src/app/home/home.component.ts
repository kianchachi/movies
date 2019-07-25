import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  review:any;
tasks:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allMovies() ;
  }


    allMovies() {
      
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.review = data["review"];
      console.log(this.review)
    })
  }



  onDelete(id) {
    this._httpService.delete(id).subscribe(data =>{
      this.ngOnInit();
    })
  }
}
