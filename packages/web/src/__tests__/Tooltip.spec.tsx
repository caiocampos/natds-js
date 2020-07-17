import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Tooltip from '../Components/Tooltip';
import { expect } from 'chai';

const placements: any = {
  'bottom': 'bottom',
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  'left': 'left',
  'left-end': 'left-end',
  'left-start': 'left-start',
  'right': 'right',
  'right-end': 'right-end',
  'right-start': 'right-start',
  'top': 'top',
  'top-end': 'top-end',
  'top-start': 'top-start'
};


describe('Tooltip component', () => {
  Object.keys(placements).forEach((placement: string) => {
    test(`should match snapshot - Any valid Tooltip with ${placement} placement`, () => {
      const component = renderer.create(<Tooltip title="some title" placement={placement as any}><div>some content</div></Tooltip>).toJSON();

      expect(component).matchSnapshot(`Tooltip snapshot - with ${placement} color`);
    });
  });
});
