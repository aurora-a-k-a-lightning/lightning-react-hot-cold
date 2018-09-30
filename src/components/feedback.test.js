import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';
import AuralStatus from "./aural-status";

describe('<Feedback />', () => {
   it('Renders without crashing', () => {
       shallow(<Feedback/>);
   });

    it('Renders the feedback', () => {
        const FEEDBACK = 'Cold!';
        let wrapper = shallow(<Feedback feedback={FEEDBACK}/>);
        expect(wrapper.contains(FEEDBACK)).toEqual(true);
    });
});