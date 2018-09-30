import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
   it('Renders without crashing', () => {
       shallow(<TopNav/>);
   });

   it('calls onNewGame', () => {
       const onRestartGame = jest.fn();
       const wrapper = mount(<TopNav onRestartGame={onRestartGame}/>);

       // get the link to click on
       const link = wrapper.findWhere(n => n.type() === 'a' && n.contains('+ New Game'));
       // click on the link
       link.simulate('click');

       expect(onRestartGame).toHaveBeenCalled();
   });

   it('calls generate aural update', () => {
      const onGenerateAuralUpdate = jest.fn();
      const wrapper = mount(<TopNav onGenerateAuralUpdate={onGenerateAuralUpdate}/>);

      const link = wrapper.find('.status-link');
      link.simulate('click');
      expect(onGenerateAuralUpdate).toHaveBeenCalled();

   });

});