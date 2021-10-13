/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import waitForExpect from 'wait-for-expect';
import Root from '../src/components/Root';
import DeletePet from '../src/components/DeletePet';
import SinglePet from '../src/components/SinglePet';
import { mockAxios } from './setup';
import { findSinglePet } from './utils';

const deleteRequests = () => mockAxios.history.delete;

/**
 * Tier 4 is about
 * - handling a click event from a button
 * - sending a delete request to the server
 * - synchronizing client-side state with the server
 */

/** Instructions:
 * Edit the DeletePet component in src/components/DeletePet.js
 * Add a click handler to the button
 * In the click handler, send a DELETE request to /api/pets/:petId
 * NOTE: DeletePet will be passed petId and handleDelete as props
 * After the server confirms the successful deletion, call handleDelete
 *
 * See Integration below for more instructions
 */

describe('EXTRA CREDIT: Tier 4: DeletePet component', () => {
  afterEach(() => mockAxios.reset());

  it("renders a 'Delete' button with delete-pet class", () => {
    const wrapper = mount(<DeletePet petId={1} handleDelete={() => {}} />);

    expect(wrapper).to.containMatchingElement(
      <button className="delete-pet">Delete</button>
    );
  });

  it('sends a delete request to /api/pets/:petId when user clicks the button', async () => {
    mockAxios.onDelete('/api/pets/1').reply(204);
    const wrapper = mount(<DeletePet petId={1} handleDelete={() => {}} />);

    const deletePetButton = wrapper.find('button');

    expect(deleteRequests()).to.have.lengthOf(0);

    deletePetButton.simulate('click');

    await waitForExpect(() => {
      expect(deleteRequests()).to.have.lengthOf(1);
      const [deleteRequest] = deleteRequests();
      expect(deleteRequest).to.deep.include({
        url: '/api/pets/1',
      });
    });
  });

  it('calls props.handleDelete if the delete request is successful', async () => {
    mockAxios.onDelete('/api/pets/2').reply(204);
    const handleDeleteSpy = spy();
    const wrapper = mount(
      <DeletePet petId={2} handleDelete={handleDeleteSpy} />
    );

    const deletePetButton = wrapper.find('button');

    deletePetButton.simulate('click');

    await waitForExpect(() => {
      expect(handleDeleteSpy).to.have.callCount(1);
      const [deleteRequest] = deleteRequests();
      expect(deleteRequest).to.deep.include({
        url: '/api/pets/2',
      });
    });
  });

  it('does not call props.handleDelete if the delete request fails', async () => {
    mockAxios.onDelete('/api/pets/3').reply(500);
    const handleDeleteSpy = spy();
    const wrapper = mount(
      <DeletePet petId={3} handleDelete={handleDeleteSpy} />
    );

    const deletePetButton = wrapper.find('button');

    deletePetButton.simulate('click');

    await waitForExpect(() => {
      expect(handleDeleteSpy.called).to.equal(false);
    });
  });

  /** Integration Instructions:
   * Edit the SinglePet, Root, and PetList components
   * SinglePet should render DeletePet (remember to pass the correct petId)
   * Add a handleDelete function to Root
   * Root's handleDelete function should do one of two things -- you decide:
   *   1. Re-fetch the data from the server (e.g. GET /api/pets)
   *   2. Remove the provided pet from state (without making a network request)
   * Pass handleDelete to DeletePet (through PetList and each SinglePet)
   *
   * If everything works correctly, you should be able to click "Delete" and the
   * pet will disappear from the list.
   */
  describe('Integration', () => {
    it('SinglePet renders DeletePet', async () => {
      const anabelle = {
        id: 4,
        name: 'Anabelle',
        description: 'Might eat your couch',
        species: 'dog',
      };
      const wrapper = mount(<SinglePet pet={anabelle} />);

      expect(wrapper).containMatchingElement(
        <button className="delete-pet">Delete</button>
      );
    });

    it('DeletePet removes the deleted pet when clicked', async () => {
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
      /**
       * The mockAxios setup below is only relevant if you've taken the
       * "refetch after delete" approach. The first time you make a GET request
       * to /api/pets, you'll get both sample pets (above). If you make a DELETE
       * request to /api/pets/1, it'll respond with 204 (success!). Then, on a
       * second GET request, you'll get only the second pet.
       */
      mockAxios.resetHandlers();
      mockAxios
        .onGet('/api/pets')
        .replyOnce(200, samplePets)
        .onDelete('/api/pets/1')
        .reply(204)
        .onGet('/api/pets')
        .replyOnce(200, samplePets.slice(1));

      const wrapper = mount(<Root />);

      // First, we'll wait for Root to fetch the list of pets from /api/pets
      await waitForExpect(async () => {
        wrapper.update();
        expect(wrapper).to.include.text('Rigatoni');
        expect(wrapper).to.include.text('Cody');

        const singlePetRigatoni = findSinglePet(wrapper, 'Rigatoni');
        const deletePetButton = singlePetRigatoni.find('.delete-pet');
        deletePetButton.simulate('click');

        // Next, we'll wait for Root to update it's state (either by making
        // anoother GET request to refetch or by removing the pet from state)
        await waitForExpect(() => {
          wrapper.update();
          expect(deleteRequests()).to.have.lengthOf(1);
          expect(wrapper).to.not.include.text('Rigatoni');
          expect(wrapper).to.include.text('Cody');
        });
      });
    });
  });
});
