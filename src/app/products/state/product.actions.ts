import { IProduct } from './../interfaces/product';
import { createAction, props } from '@ngrx/store';

export const loadProduct = createAction('Load Products', props<{ limit: number, pageIndex: number }>());
export const loadProductSuccess = createAction('Load Products Success', props<{ items: IProduct }>());
export const loadProductError = createAction('Load Products Error', props<{ error: any }>());

