/* eslint-env mocha */
import React from 'react';
// import { render, cleanup, fireEvent } from "@testing-library/react"
import { expect } from 'chai';
import { mount } from 'enzyme';

import SinglePet from '../src/components/SinglePet';
import { findButton } from './utils';

/**
 * Tier 1 is about
 * - rendering data from props
 * - handling a click event from a button
 * - setting state (boolean)
 * - rendering text conditionally from state
 * - changing css class based on state
 */

/** Instructions:
 * Edit the SinglePet component in src/components/SinglePet.js
 * It will be passed a pet object as props.pet
 * A pet object looks like this:
 * {
 *   id: 1,
 *   name: "Some Pet Name",
 *   description: "Describing the pet",
 *   species: either "dog" or "cat"
 * }
 *
 * By default, every pet is not adopted. NOTE: The pet provided on props
 * DOES NOT have an adopted status. You are expected to handle that data as
 * component's state.
 *
 * Add a button that, when clicked, toggles the pet's adoption status. The
 * component should render "Available" when adopted is false, and "Adopted!"
 * when adopted is true.
 *
 * When the pet is adopted, the containing div should have
 * the classes single-pet and adopted. When the pet is not adopted, it should
 * only have the class single-pet.
 */

describe('Tier 1: SinglePet component', () => {
  const rigatoni = {
    id: 1,
    name: 'Rigatoni',
    description: 'A flaming hot cheetoh in feline form',
    species: 'cat',
  };

  const cody = {
    id: 2,
    name: 'Cody',
    description: 'Adorable pug who loves to hug',
    species: 'dog',
  };

  it("renders a pet's name, description, and species passed in as props", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />);
    expect(wrapper).to.include.text('Rigatoni');
    expect(wrapper).to.include.text('A flaming hot cheetoh in feline form');
    expect(wrapper).to.include.text('cat');
  });

  it('renders different name, description, and species if passed different props', () => {
    const wrapper = mount(<SinglePet pet={cody} />);
    expect(wrapper).to.include.text('Cody');
    expect(wrapper).to.include.text('Adorable pug who loves to hug');
    expect(wrapper).to.include.text('dog');
  });

  it("renders a 'Toggle Status' button", () => {
    // The button doesn't need to "do anything" just yet. See the next test.
    const wrapper = mount(<SinglePet pet={rigatoni} />);

    expect(wrapper).to.containMatchingElement(<button>Toggle Status</button>);
  });

  it("the 'Toggle Status' button toggles 'Available' to 'Adopted!'", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />);
    const toggleAdoptedButton = findButton(wrapper, 'Toggle Status');

    expect(toggleAdoptedButton).to.have.length(1);

    // The component should render "Available for adoption" and not "Adopted!"
    expect(wrapper.text()).to.contain('Available');
    expect(wrapper.text()).to.not.contain('Adopted!');

    // Click the button!
    toggleAdoptedButton.simulate('click');

    // NOW the component should render "Adopted!"
    expect(wrapper.text()).to.not.contain('Available');
    expect(wrapper.text()).to.contain('Adopted!');
  });

  it("the 'Toggle Status' button toggles 'Adopted!' to 'Available'", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />);
    const toggleAdoptedButton = findButton(wrapper, 'Toggle Status');

    expect(wrapper.text()).to.contain('Available');
    expect(wrapper.text()).to.not.contain('Adopted!');

    // Click the button twice this time!
    toggleAdoptedButton.simulate('click');
    toggleAdoptedButton.simulate('click');

    expect(wrapper.text()).to.contain('Available');
    expect(wrapper.text()).to.not.contain('Adopted!');
  });

  it("the 'Toggle Status' button toggles the 'adopted' css class", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />);
    const toggleAdoptedButton = findButton(wrapper, 'Toggle Status');

    // At first, the container div should not have the adopted class applied
    expect(wrapper).to.have.className('single-pet');
    expect(wrapper).to.not.have.className('adopted');

    // Click the button once
    toggleAdoptedButton.simulate('click');

    // We should see both single-pet AND adopted class applied now
    expect(wrapper).to.have.className('single-pet');
    expect(wrapper).to.have.className('adopted');

    // Click the button a second time
    toggleAdoptedButton.simulate('click');

    // No adopted class anymore
    expect(wrapper).to.have.className('single-pet');
    expect(wrapper).to.not.have.className('adopted');
  });
});
