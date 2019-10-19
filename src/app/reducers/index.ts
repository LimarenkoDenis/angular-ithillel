import { IEntittyState } from './index';
import { ICart, IProduct } from './../products/interfaces/product';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer } from '../counter/counter.reducer';
import { cartReducer } from '../cart/state/cart.reducer';
import {productReducer} from '../products/state/product.reducer';


export interface IEntittyState<T> {
  isLoading: boolean;
  data: T[];
  entities: {[key: string]: T };
}



export const stateFeatureKey = 'state';

export interface IRootState {
  count: number;
  cart: ICart[];
  products: IEntittyState<IProduct>;
}

export const reducers: ActionReducerMap<IRootState> = {
  count: counterReducer,
  cart: cartReducer,
  products: productReducer,
};


export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];
