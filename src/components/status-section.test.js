import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from "./status-section";

describe('<StatusSection />', () => {
   it('Renders without crashing', () => {
       shallow(<StatusSection guesses={[5, 92]}/>);
   })
});