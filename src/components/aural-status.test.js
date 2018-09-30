import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus/>);
    });

    it('Renders the aural status', () => {
       const STATUS = 'The status';
       let wrapper = shallow(<AuralStatus auralStatus={STATUS}/>);
       expect(wrapper.contains(STATUS)).toEqual(true);
    });
});