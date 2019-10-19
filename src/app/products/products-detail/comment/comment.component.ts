import { ProductsService } from './../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public comments$: Observable<any>;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  public ngOnInit(): void {
    this.comments$ = this._activatedRoute.parent.paramMap.pipe(
      switchMap((data: ParamMap) => this._productsService.getProductComments(+data.get('id')))
    ); 
  }

}
