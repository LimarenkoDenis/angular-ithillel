import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CartEffects } from './cart.effects';

describe('CartEffects', () => {
  let actions$: Observable<any>;
  let effects: CartEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CartEffects>(CartEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
