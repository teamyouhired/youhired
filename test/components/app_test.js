import { renderComponent, expect } from '../test_helper';
import Root from '../../app/components/_Root';

describe('Root', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Root);
  });

  it('shows... test1...', () => {
    // expect(component.find('.comment-box')).to.exist;
  });

  it('has... test2...', () => {
    // expect(component.find('.comment-list')).to.exist;
  });
});
