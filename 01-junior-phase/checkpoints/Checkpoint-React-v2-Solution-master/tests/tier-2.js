/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import PetList from '../src/components/PetList';
import { valueOf } from './utils';

/**
 * Tier 2 is about
 * - rendering a list
 * - handling a change event from a select
 * - setting state (string)
 * - filter a list of rendered components
 */

/** Instructions:
 * Edit the PetList component in src/components/PetList.js
 * It will be passed an array of pet objects as props.pets
 * Pass each pet to a SinglePet component as a prop called `pet`
 * Create a dropdown that allows the user to select between three options:
 * - all (the default option)
 * - cats
 * - dogs
 * When the user selects a new option, set state accordingly
 * If the selected option is "all", render all the pets
 * If the selected option is "cats", render only the cats
 * If the selected option is "dogs", render only the dogs
 */

describe('Tier 2: PetList component', () => {
  const pets = [
    {
      id: 1,
      name: 'Rigatoni',
      description: 'A flaming hot cheetoh in feline form',
      species: 'cat',
    },
    {
      id: 2,
      name: 'Cody',
      description: 'Adorable pug who loves to hug',
      species: 'dog',
    },
    {
      id: 3,
      name: 'Frankie',
      description: 'The snuggliest kitty',
      species: 'cat',
    },
    {
      id: 4,
      name: 'Anabelle',
      description: 'Might eat your couch',
      species: 'dog',
    },
  ];

  it('renders a list of SinglePets', () => {
    const wrapper = mount(<PetList pets={pets} />);
    expect(wrapper).to.include.text('Rigatoni');
    expect(wrapper).to.include.text('Cody');
    expect(wrapper).to.include.text('Frankie');
    expect(wrapper).to.include.text('Anabelle');
  });

  it('renders a select dropdown with three options: all, cats, dogs', () => {
    const wrapper = mount(<PetList pets={pets} />);
    const select = wrapper.find('select');
    const options = select.find('option');
    expect(options).to.have.lengthOf(3);
    const optionValues = options.map((option) => valueOf(option));
    expect(optionValues).to.include.members(['all', 'cats', 'dogs']);
  });

  it("when the filter is set to 'cats', only render SinglePets with cats", () => {
    const wrapper = mount(<PetList pets={pets} />);

    // By default, the value of select should be "all"
    let select = wrapper.find('select');

    // Simulate a user clicking the dropdown menu and selecting cats
    select.simulate('change', { target: { value: 'cats' } });

    // Now, the value of select should be "cats"
    select = wrapper.find('select');

    // We should expect to see Rigatoni and Frankie, but not Cody or Anabelle
    expect(wrapper).to.include.text('Rigatoni');
    expect(wrapper).to.not.include.text('Cody');
    expect(wrapper).to.include.text('Frankie');
    expect(wrapper).to.not.include.text('Anabelle');
  });

  it("when the filter is set to 'dogs', only render SinglePets with dogs", () => {
    const wrapper = mount(<PetList pets={pets} />);

    // By default, the value of select should be "all"
    let select = wrapper.find('select');
    expect(select).to.have.value('all');

    // Simulate a user clicking the dropdown menu and selecting dogs
    select.simulate('change', {
      target: {
        value: 'dogs',
      },
    });

    // Now, the value of select should be "dogs"
    select = wrapper.find('select');

    // We should expect to see Cody and Anabelle, but not Rigatoni or Frankie
    expect(wrapper).to.not.include.text('Rigatoni');
    expect(wrapper).to.include.text('Cody');
    expect(wrapper).to.not.include.text('Frankie');
    expect(wrapper).to.include.text('Anabelle');
  });
});
