import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './aural-status';

describe('<InfoSection />', () => {
   it('Renders without crashing', () => {
       shallow(<InfoSection/>);
   })
});