import reducer, { AUTHENTICATED, GOT_ROOMS, BOOK_ROOM } from "./reducer";
import { expect } from "chai";
describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      user: {},
      rooms: []
    });
  });

  it("should handle AUTHENTICATED", () => {
    expect(
      reducer(
        { user: {}, rooms: [] },
        {
          type: AUTHENTICATED,
          payload: { name: "Cassio Zen", address: "5 Hanover Sqr", bookedRoom: null }
        }
      )
    ).to.deep.equal({
      user: { name: "Cassio Zen", address: "5 Hanover Sqr", bookedRoom: null },
      rooms: []
    });
  });

  it("should handle GOT_ROOMS", () => {
    expect(
      reducer(
        { user: {}, rooms: [] },
        {
          type: GOT_ROOMS,
          payload: [
            {
              id: "stdct",
              name: "City View Standard Room",
              description: "1 Queen bed",
              booked: false
            },
            {
              id: "stdoc",
              name: "Ocean View Standard Room",
              description: "1 Queen bed",
              booked: false
            },
            {
              id: "dlxct",
              name: "Deluxe Room, City View",
              description: "2 Double beds",
              booked: false
            }
          ]
        }
      )
    ).to.deep.equal({
      user: {},
      rooms: [
        {
          id: "stdct",
          name: "City View Standard Room",
          description: "1 Queen bed",
          booked: false
        },
        {
          id: "stdoc",
          name: "Ocean View Standard Room",
          description: "1 Queen bed",
          booked: false
        },
        {
          id: "dlxct",
          name: "Deluxe Room, City View",
          description: "2 Double beds",
          booked: false
        }
      ]
    });
  });

  it("should handle BOOK_ROOM", () => {
    expect(
      reducer(
        {
          user: { name: "Cassio Zen", address: "5 Hanover Sqr", bookedRoom: null },
          rooms: [
            {
              id: "stdct",
              name: "City View Standard Room",
              description: "1 Queen bed",
              booked: false
            },
            {
              id: "stdoc",
              name: "Ocean View Standard Room",
              description: "1 Queen bed",
              booked: false
            },
            {
              id: "dlxct",
              name: "Deluxe Room, City View",
              description: "2 Double beds",
              booked: false
            }
          ]
        },
        {
          type: BOOK_ROOM,
          roomId: "dlxct"
        }
      )
    ).to.deep.equal({
      user: { name: "Cassio Zen", address: "5 Hanover Sqr", bookedRoom: "dlxct" },
      rooms: [
        {
          id: "stdct",
          name: "City View Standard Room",
          description: "1 Queen bed",
          booked: false
        },
        {
          id: "stdoc",
          name: "Ocean View Standard Room",
          description: "1 Queen bed",
          booked: false
        },
        {
          id: "dlxct",
          name: "Deluxe Room, City View",
          description: "2 Double beds",
          booked: true
        }
      ]
    });
  });
});
