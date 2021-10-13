/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import waitForExpect from 'wait-for-expect';
import Root from '../src/components/Root';
import { mockAxios } from './setup';

const getRequests = () => mockAxios.history.get;

/**
 * Tier 3 is about
 * - fetching data from a server
 * - using React lifecycle (componentDidMount or useEffect)
 * - setting state (array) from the server's response
 * - setting state (boolean) while waiting for data from the server
 * - setting state (error object) if the server replies with a 500 status code
 */

/** Instructions:
 * Edit the Root component in src/components/Root.js
 * Once the component mounts, use axios to make a GET request to /api/pets
 * NOTE: You do not need to edit the express server for any of these tests
 * Pass the pet data as a prop called `pets` to PetList
 * Root should only make one GET request, not every time it renders
 * If an error occurs, display the error message and don't render any pets
 * While the data is loading, display a simple "Loading" message
 */

describe('Tier 3: Root component', () => {
  afterEach(() => mockAxios.reset());

  it('fetches data from /api/pets once after Root first mounts', async () => {
    expect(getRequests()).to.have.lengthOf(0);

    mount(<Root />);

    await waitForExpect(() => {
      expect(getRequests()).to.have.lengthOf(1);
      const [getRequest] = getRequests();
      expect(getRequest).to.deep.include({ url: '/api/pets' });
    });
  });

  it('renders PetList with data retrieved from /api/pets', async () => {
    const samplePets = [
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
    ];
    // For the purposes of this test, any axios request to /api/pets will
    // respond with the sample pets (above). It WILL NOT reach the express
    // routes defined in /app.js
    mockAxios.onGet('/api/pets').reply(200, samplePets);
    const wrapper = mount(<Root />);

    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper).to.include.text('Rigatoni');
      expect(wrapper).to.include.text('Cody');
      expect(wrapper).to.not.include.text('Frankie');
      expect(wrapper).to.not.include.text('Anabelle');
    });
  });

  it('displays loading message while waiting for the data', async () => {
    const samplePets = [
      {
        id: 1,
        name: 'Frankie',
        description: 'The snuggliest kitty',
        species: 'cat',
      },
      {
        id: 2,
        name: 'Anabelle',
        description: 'Might eat your couch',
        species: 'dog',
      },
    ];
    mockAxios.onGet('/api/pets').reply(200, samplePets);
    const wrapper = mount(<Root />);

    expect(wrapper).to.include.text('Loading');
    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper).to.not.include.text('Loading');
      expect(wrapper).to.not.include.text('Rigatoni');
      expect(wrapper).to.not.include.text('Cody');
      expect(wrapper).to.include.text('Frankie');
      expect(wrapper).to.include.text('Anabelle');
    });
  });

  it('displays error message if the server responds with status code 500', async () => {
    mockAxios.onGet('/api/pets').reply(500);
    const wrapper = mount(<Root />);

    expect(wrapper).to.not.include.text('Error');
    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper).to.include.text('Error');
      expect(wrapper).to.not.include.text('Loading');
      expect(wrapper).to.not.include.text('Cody');
      expect(wrapper).to.not.include.text('Rigatoni');
    });
  });
});
