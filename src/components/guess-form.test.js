import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm/>);
    });

    it('handles user submit', () => {
        // set up event handler to pass in to component
        const submitHandler = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={submitHandler}/>);

        // simulate user using the form
        // enter in a value into the input
        wrapper.find('input[type="number"]').instance().value = 25;
        // submit the form
        wrapper.simulate('submit');

        expect(submitHandler).toHaveBeenCalledWith('25');
    });

    it('resets the form after user submits', () => {
        const wrapper = mount(<GuessForm />);

        // simulate user using the form
        // enter in a value into the input
        const input = wrapper.find('input[type="number"]').instance();
        input.value = 25;
        // submit the form
        wrapper.simulate('submit');

        expect(input.value).toEqual('');
    });
});