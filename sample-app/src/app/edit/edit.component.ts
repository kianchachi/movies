import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  err:any;
  constructor(private _httpService: HttpService, private _route:Router, private _router:ActivatedRoute) { }
  editProd = {review: {name:"", stars:"",description: ""}}

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params)
    this._httpService.getOne(params['id']).subscribe(data => {
      console.log(data)
    this.editProd = data['review'];
        
      }) 
    })
  }

  onSubmit(){
    this._httpService.update(this.editProd._id, this.editProd).subscribe(data => {
      if(data['movies']){
        this._route.navigate(['/'])
      }
      else{
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }


}
