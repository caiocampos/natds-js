import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import Checkbox from '../Components/Checkbox';

describe('Checkbox component', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Checkbox />).toJSON();
      expect(component).matchSnapshot('Checkbox default snapshot');
    });

    test('should match to snapshot - Color', () => {
      const component = renderer.create(<Checkbox color="primary" />).toJSON();
      expect(component).matchSnapshot('Checkbox color primary snapshot');
    });

    test('should match to snapshot - Checked', () => {
      const component = renderer.create(<Checkbox checked />).toJSON();
      expect(component).matchSnapshot('Checkbox checked snapshot');
    });

    test('should match to snapshot - Disabled', () => {
      const component = renderer.create(<Checkbox checked />).toJSON();
      expect(component).matchSnapshot('Checkbox disabled snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onChange', () => {
      const mockOnChange = spy();
      const component = shallow(<Checkbox onChange={mockOnChange} />);

      component.simulate('change');

      assert.calledOnce(mockOnChange);
    });
  });
});
