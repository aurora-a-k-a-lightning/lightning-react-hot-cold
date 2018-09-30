import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[5, 92]}/>);
    });

    it('Renders the list', () => {
        const guesses = [5, 92];
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        const guessList = wrapper.find('li');
        expect(guessList.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
           expect(guessList.at(index).text()).toEqual(guess.toString());
        });
    });

});