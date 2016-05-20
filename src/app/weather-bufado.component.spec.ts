import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WEATHERBUFADOAppComponent } from '../app/weather-bufado.component';

beforeEachProviders(() => [WEATHERBUFADOAppComponent]);

describe('App: WEATHERBUFADO', () => {
  it('should create the app',
      inject([WEATHERBUFADOAppComponent], (app: WEATHERBUFADOAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'weather-bufado works!\'',
      inject([WEATHERBUFADOAppComponent], (app: WEATHERBUFADOAppComponent) => {
    expect(app.title).toEqual('weather-bufado works!');
  }));
});
