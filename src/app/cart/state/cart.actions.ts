import { ICart, IProduct } from './../../products/interfaces/product';
import { Action, createAction, props } from '@ngrx/store';

export const loadCart = createAction('[Cart] Load Carts');
export const addproductToCart = createAction('[Cart] Add prodcut', props<{ item: IProduct }>());
export const deleteCart = createAction('[Cart] Delete prodcut', props<{ id: number }>());
