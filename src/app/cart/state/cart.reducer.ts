import { ICart } from './../../products/interfaces/product';

import { addproductToCart, deleteCart } from './cart.actions';
import { createReducer, on, createSelector, MemoizedSelector, createFeatureSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import {IRootState} from 'src/app/reducers';

export const cartFeatureKey = 'cart';

export type State = ICart[];

export const initialState: State = [];

const _cartReducer = createReducer(initialState,
  on(addproductToCart, (state: any, { item }: any) => {

    const cloneState = [...state];
    const index: number = cloneState.findIndex((el: ICart) => el.id === item.id);

    if (index === -1) {
      cloneState.push({...item, count: 1});

      // TODO: do not notify cart component
      // clone = [...clone, {...product, count: 1}];
      return cloneState;
    }

    const element: ICart = cloneState[index];
    cloneState.splice(index, 1, {...element, count: element.count + 1});


    return cloneState;

  }),
  on(deleteCart, (state: any, { id }: any) => {
    const clone: ICart[] = [...state];
    const index: number = clone.findIndex((item: ICart) => item.id === id);


    clone.splice(index, 1);


    return clone;
  })
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}


export const cartFeature = createFeatureSelector<any>('cart');

export const totalSumSelector: MemoizedSelector<IRootState, number> = createSelector(
  cartFeature,
  (cart: ICart[]) => cart.reduce((acc: number, next: ICart) => acc + next.count * next.price, 0)
);

// export const totalSumSelector: MemoizedSelector<IRootState, number> = createSelector(
//   createFeatureSelector<any>('cart'),
//   createFeatureSelector<any>('count'),
//    Sourses[]
//   (cart: ICart[], count, ...sourses) =>
//    cart.reduce((acc: number, next: ICart) => acc + next.count * next.price, 0) + count
// );

const gnrToDollarRate = 25;

export const totalSumSelectorConverter: MemoizedSelectorWithProps<IRootState, { convertTo: string }, number>
= createSelector(
  totalSumSelector,
  (totalSum: number, props: { convertTo: string }) => {
    if (!props) {
      return 0
    }

    console.log(totalSum);

    console.log(props);


    if (props.convertTo === 'grn') {
      return totalSum * gnrToDollarRate;
    }
    if (props.convertTo === 'belarus') {
      return totalSum * 10;
    }

    return totalSum;
  }
);
