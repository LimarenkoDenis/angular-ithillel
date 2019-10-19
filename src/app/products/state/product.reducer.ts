import { IEntittyState } from './../../reducers/index';
import { IProduct } from './../interfaces/product';
import { createReducer, on } from '@ngrx/store';
import { loadProduct } from './product.actions';


export const initialState: IEntittyState<IProduct> = {
  isLoading: false,
  data: [],
  entities: {}
};

const _productReducer = createReducer(initialState,
  on(loadProduct, (state: IEntittyState<IProduct>) => {
    return {...state, isLoading: true};
  }),
);

export function productReducer(state: IEntittyState<IProduct>, action) {
  return _productReducer(state, action);
}
