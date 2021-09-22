// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require('chai');

// JSDOM lets us pretend we're in a web browser even through we're running this code in Node. Here, we import JSOM and create fake document and window objects. We assign these to global so they're available to your code, when we run it.
const { JSDOM } = require('jsdom');
const window = new JSDOM(`<!DOCTYPE html><body></body>`).window;
const { document } = window;
global.window = window;
global.document = document;

// Sinon is a framework which provides helper functions for writing tests-- you've seen it beofre in foundations. We'll be using it's built-in `spy` method to check whether you're calling functions.
const sinon = require('sinon');

// This imports your code so we can test it
const code = require('./script.js');

// This is a helper function to reset the fake dom to a state that roughly imitates what index.html provides in the browser.
function resetJSDOM() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  const coffeeCounter = document.createElement('div');
  coffeeCounter.id = 'coffee_counter';
  document.body.appendChild(coffeeCounter);

  const producerContainer = document.createElement('div');
  producerContainer.id = 'producer_container';
  document.body.appendChild(producerContainer);

  const cpsDisplay = document.createElement('div');
  cpsDisplay.id = 'cps';
  document.body.appendChild(cpsDisplay);

  const bigCoffee = document.createElement('div');
  bigCoffee.id = 'big_coffee';
  document.body.appendChild(bigCoffee);
}

/***************************
 *   SLICE 1 STARTS HERE
 ***************************/

// First, if you haven't, read the README.md file. If you've done that already, move on!

// Before you get started writing code that passes the tests, be sure to do `npm run start` and open http://localhost:8000 so you can also see the results of your work in the web browser. This will make it easier to understand what the tests are asking for. We'll also be providing some guidance as to what functionality you can expect to see at each step of the way. At first, you should see a giant coffee emoji with some text above it and an empty div tag labeled "Coffee producers."

// Remember that you can open multiple terminal emulator windows or mutliple tabs within your terminal emulator-- this will let you run the web server at the same time that you run the tests using Mocha.

describe('Slice 1: Clicking & Incrementing Coffee', function() {
  beforeEach('reset the fake DOM', function() {
    resetJSDOM();
  });
  // First, we're having you write a function which will run every time the coffee icon is clicked. You don't need to attach this as an event listener-- we've done that for you near the bottom of `script.js`.
  describe('The updateCoffeeView function', function() {
    it('calls document.getElementById() or document.querySelector()', function() {
      const spyOnGetElementById = sinon.spy(document, 'getElementById');
      const spyOnQuerySelector = sinon.spy(document, 'querySelector');
      code.updateCoffeeView(); // this is where we actually run your code
      const wereFnsCalled =
        spyOnGetElementById.called || spyOnQuerySelector.called;
      expect(wereFnsCalled).to.equal(true);
      spyOnGetElementById.restore();
      spyOnQuerySelector.restore();
    });

    it('updates the coffee counter to display the current coffee count', function() {
      const coffeeCounter = document.getElementById('coffee_counter');
      code.updateCoffeeView(4000);
      expect(coffeeCounter.innerText).to.equal(4000);
      code.updateCoffeeView(4);
      expect(coffeeCounter.innerText).to.equal(4);
    });
  });

  describe('The clickCoffee function', function() {
    it('increments the coffee count by one', function() {
      const data = { coffee: 0, producers: [] };
      code.clickCoffee(data);
      expect(data.coffee).to.equal(1);
    });
    // Here, we're not checking to see that you call updateCoffeeView, the
    // function you wrote above. But it would be a good idea to do so!
    it('updates the coffee counter element with the incremented value', function() {
      const coffeeCounter = document.getElementById('coffee_counter');
      const data = { coffee: 50, producers: [] };
      code.clickCoffee(data);
      expect(coffeeCounter.innerText).to.equal(51);
    });
  });
});

// You've made it through slice 1-- great! If these two tests are passing, you should be able to open the page up in your browser (do `npm run start` and then visit http://localhost:8000) and see some functionality. At the bottom of `script.js` you'll see some code that attaches your `clickCoffee` function to the coffee emoji you see on screen (this is just a div element). Now, when you click the emoji, you should see the counter update (because of the `updateCoffeeView` function).

// Try opening up your browser's console. On a mac in Chrome, the shortcut is cmd + option + J. Here, you have access to all of the functions defined in the global scope.

// Try running `updateCoffeeView(5000)`. What do you see? Why?

// Now try runnning `data`. You'll see the data object printed to the console-- something like: `{coffee: 0, totalCPS: 0, producers: Array(12)}`. you can click the arrow to expand this object.

// To debug, you can manually manipulate variables to see how the app responds. Try `data.coffee = 5000`, then try running `data` again. The data has changed, but what we see on screen hasn't changed. Why? Finally, try running `clickCoffee(data);`. Does what you see make sense?

/***************************
 *   SLICE 2 STARTS HERE
 ***************************/

describe('Slice 2: Unlocking & Rendering Producers', function() {
  describe('The unlockProducers function', function() {
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 0,
        producers: [
          { id: 'producer_A', price: 50, unlocked: false },
          { id: 'producer_B', price: 200, unlocked: false },
          { id: 'producer_C', price: 500, unlocked: false }
        ]
      };
    });

    it("changes `unlocked` to `true` when the player's coffee count is equal to or larger than half the initial price of the producer", function() {
      data.coffee = 100;
      code.unlockProducers(data.producers, data.coffee);
      expect(data.producers[0].unlocked).to.equal(true);
      expect(data.producers[1].unlocked).to.equal(true);
      expect(data.producers[2].unlocked).to.equal(false);
    });

    it('does not set `unlocked` to `false` once a producer has been unlocked, even if the coffee count drops again', function() {
      data.coffee = 100;
      code.unlockProducers(data.producers, data.coffee);
      data.coffee = 0;
      code.unlockProducers(data.producers, data.coffee);
      expect(data.producers[0].unlocked).to.equal(true);
      expect(data.producers[1].unlocked).to.equal(true);
      expect(data.producers[2].unlocked).to.equal(false);
    });
  });

  describe('The getUnlockedProducers function', function() {
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 0,
        producers: [
          { id: 'producer_A', price: 50, unlocked: true },
          { id: 'producer_B', price: 200, unlocked: false },
          { id: 'producer_C', price: 500, unlocked: false }
        ]
      };
    });

    it('returns an array of producer objects', function() {
      const results = code.getUnlockedProducers(data);
      expect(results).to.be.an('array');
      results.forEach(element => {
        expect(element).to.be.an('object');
        expect(element).to.have.property('id');
        expect(element).to.have.property('price');
        expect(element).to.have.property('unlocked');
      });
    });

    it('filters out producer objects which are not unlocked', function() {
      let results = code.getUnlockedProducers(data);
      expect(results).to.have.lengthOf(1);

      // let's make sure you didn't hardcode the solution...
      data.producers[2].unlocked = true;
      results = code.getUnlockedProducers(data);
      expect(results).to.have.lengthOf(2);
    });

    it('does not mutate the data', function() {
      const snapshot = JSON.stringify(data);
      code.getUnlockedProducers(data);
      expect(JSON.stringify(data)).to.equal(snapshot);
    });
  });

  describe('The makeDisplayNameFromId function', function() {
    it('returns a string', function() {
      const result = code.makeDisplayNameFromId('input_string');
      expect(result).to.be.a('string');
    });

    it('transforms its input string from snake_case to Title Case', function() {
      const testStrings = [
        'input_string',
        'mr._coffee',
        'Mr._Coffee',
        '10_gallon_urn'
      ];
      const results = testStrings.map(code.makeDisplayNameFromId);
      expect(results[0]).to.equal('Input String');
      expect(results[1]).to.equal('Mr. Coffee');
      expect(results[2]).to.equal('Mr. Coffee');
      expect(results[3]).to.equal('10 Gallon Urn');
    });
  });

  describe('The makeProducerDiv function', function() {
    const producer = {
      id: 'producer_A',
      price: 57,
      unlocked: true,
      cps: 100,
      qty: 5
    };

    it('returns a DOM element', function() {
      const result = code.makeProducerDiv(producer);
      expect(result).to.be.an('HTMLDivElement');
    });

    it('correctly fills in template string', function() {
      // Here, we make a tiny fake DOM local to this test so we can append the element returned by makeProducerdiv to it. Then, we query this tiny DOM to make some assertions about it.
      const result = code.makeProducerDiv(producer);
      const doc = new JSDOM(`<!DOCTYPE html><body></body>`).window.document;
      doc.body.appendChild(result);

      const titleDiv = doc.getElementsByClassName('producer-title');
      expect(titleDiv[0].innerHTML).to.equal('Producer A');

      const buttonEl = doc.getElementById('buy_producer_A');
      expect(buttonEl.innerHTML).to.equal('Buy');

      const rightColumn = doc.getElementsByClassName('producer-column')[1];
      const qtyDiv = rightColumn.children[0];
      const cpsDiv = rightColumn.children[1];
      const costDiv = rightColumn.children[2];
      expect(qtyDiv.innerHTML).to.equal('Quantity: 5');
      expect(cpsDiv.innerHTML).to.equal('Coffee/second: 100');
      expect(costDiv.innerHTML).to.equal('Cost: 57 coffee');
    });
  });

  describe('The deleteAllChildNodes function', function() {
    // make a tiny little document just for this describe block
    let doc;
    beforeEach('rebuild our tiny document', function() {
      doc = new JSDOM(`
      <!DOCTYPE html>
      <body>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </body>
      `).window.document;
    });

    it('calls the `.removeChild()` method on the dom node passed in at least once', function() {
      const spyOnRemoveChild = sinon.spy(doc.body, 'removeChild');
      code.deleteAllChildNodes(doc.body);
      expect(spyOnRemoveChild.called).to.be.equal(true);

      spyOnRemoveChild.restore();
    });

    it('gets rid of all of the children of the DOM node passed in', function() {
      code.deleteAllChildNodes(doc.body);
      expect(doc.body.childNodes.length).to.be.equal(0);
    });
  });

  // Inside renderProducers you should probably be calling *three* functions written previously
  describe('The renderProducers function', function() {
    // Clear out our fake DOM
    beforeEach('reset the fake DOM', function() {
      resetJSDOM();
    });

    // Set up some fake data
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 100,
        producers: [
          { id: 'producer_A', price: 50, unlocked: false },
          { id: 'producer_B', price: 200, unlocked: false },
          { id: 'producer_C', price: 500, unlocked: false }
        ]
      };
    });

    // We're giving you a big hint, here
    it('calls document.getElementById() or document.querySelector()', function() {
      const spyOnGetElementById = sinon.spy(document, 'getElementById');
      const spyOnQuerySelector = sinon.spy(document, 'querySelector');
      code.renderProducers(data);
      const wereFnsCalled =
        spyOnGetElementById.called || spyOnQuerySelector.called;
      expect(wereFnsCalled).to.equal(true);
      spyOnGetElementById.restore();
      spyOnQuerySelector.restore();
    });

    // Big hint: don't just render blank divs; we've written the makeProdcuerDiv function for you, which should be called, here.
    it('appends some producer div elements to the producer container', function() {
      code.renderProducers(data);
      const producerContainer = document.getElementById('producer_container');
      // Did you generate the right number of child nodes?
      assert.isAbove(producerContainer.childNodes.length, 0);

      // Here's we're just checking something about the structure of the first one to make sure it roughly matches the structure of what makeProducerDiv returns. We could have tested any number of properties of this node; here we're just checking to make sure it has 5 children anywhere in the tree below it
      expect(producerContainer.childNodes[0].childNodes).to.have.length(5);
    });

    // Hint: call the function written to do this!
    it('unlocks any locked producers which need to be unlocked', function() {
      code.renderProducers(data);
      expect(data.producers[0].unlocked).to.be.equal(true);
      expect(data.producers[1].unlocked).to.be.equal(true);
      expect(data.producers[2].unlocked).to.be.equal(false);
    });

    it('only appends unlocked producers', function() {
      code.renderProducers(data);
      const producerContainer = document.getElementById('producer_container');
      expect(producerContainer.childNodes.length).to.be.equal(2);
      expect(producerContainer.childNodes[0].childNodes).to.have.length(5);
    });

    it("deletes the producer container's children before appending new producers", function() {
      const producerContainer = document.getElementById('producer_container');
      const fakeProducer = document.createElement('div');
      producerContainer.appendChild(fakeProducer);
      code.renderProducers(data);
      expect(producerContainer.childNodes.length).to.be.equal(2);
      expect(producerContainer.childNodes[0].childNodes).to.have.length(5);
    });

    it('is not in some way hardcoded to pass the tests', function() {
      data.producers.push({ id: 'producer_D', price: 1, unlocked: true });
      const producerContainer = document.getElementById('producer_container');
      code.renderProducers(data);
      expect(producerContainer.childNodes.length).to.be.equal(3);
      expect(producerContainer.childNodes[0].childNodes).to.have.length(5);
      expect(producerContainer.childNodes[1].childNodes).to.have.length(5);
      expect(producerContainer.childNodes[2].childNodes).to.have.length(5);
    });
  });

  // This far into slice 2, you've defined a function which renders the producers to the screen, with the help of some other functions. What producers are rendered depends, of course, on how much coffee the player has accumulated.

  // While it might be passing the tests, nothing in our code yet calls the renderProducers function. How can we test it in the browser?

  // Try running `renderProducers(data)` in the browser console. This might show you some producers, depending on how much coffee you have. You can click a bunch more times and run the function again to test it out-- or you can just set `data.coffee` to a big number before running `renderProducers(data)`. Try that to see if the function works.

  // How is our code actually going to run this function? That's what the next test, the last one in slice 2, addresses; we'll go back to a funciton you wrote in slice 1 and modify it, slightly.
  describe('The clickCoffee function', function() {
    // Clear out our fake DOM
    beforeEach('reset the fake DOM', function() {
      resetJSDOM();
    });

    // Set up some fake data. Note that we're just below the threshhold to unlock and render producer_B
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 99,
        totalCPS: 10,
        producers: [
          { id: 'producer_A', price: 50, cps: 5, qty: 0 },
          { id: 'producer_B', price: 200, cps: 10, qty: 1 },
          { id: 'producer_C', price: 500, cps: 20, qty: 0 }
        ]
      };
    });

    it('updates the dom to reflect any newly unlocked producers', function() {
      code.clickCoffee(data);
      const producerContainer = document.getElementById('producer_container');
      expect(producerContainer.childNodes.length).to.be.equal(2);
    });
  });
});

// That's the end of slice 2. In the browser, you should now have an interactive app that lets you click the coffee mug to get coffee, and which renders producers to the screen as they become unlocked.

// Next we'll wire up the 'buy' buttons on the proucers and then set up a 'tick' function which 'runs' the producers, adding coffee automatically every second based on what producers the player has.

/***************************
 *   SLICE 3 STARTS HERE
 ***************************/

describe('Slice 3: Buying Producers & Tick', function() {
  describe('The getProducerById function', function() {
    // Set up some fake data
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        producers: [
          { id: 'producer_A', price: 50 },
          { id: 'producer_B', price: 200 },
          { id: 'producer_C', price: 500 }
        ]
      };
    });

    it('returns an object', function() {
      const result = code.getProducerById(data, 'producer_A');
      expect(result).to.be.an('object');
    });
    it('returns the correct producer object', function() {
      const testIDs = ['producer_A', 'producer_B', 'producer_C'];
      const results = testIDs.map(testID => code.getProducerById(data, testID));
      expect(results[0].price).to.be.equal(50);
      expect(results[1].price).to.be.equal(200);
      expect(results[2].price).to.be.equal(500);
    });
    it('is not hardcoded to pass the tests', function() {
      // Just like the last test, but we've reversed the order of the producers in the data
      data.producers = data.producers.reverse();
      const testIDs = ['producer_A', 'producer_B', 'producer_C'];
      const results = testIDs.map(testID => code.getProducerById(data, testID));
      expect(results[0].price).to.be.equal(50);
      expect(results[1].price).to.be.equal(200);
      expect(results[2].price).to.be.equal(500);
    });
  });

  describe('The canAffordProducer function', function() {
    // Set up some fake data
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 100,
        producers: [
          { id: 'producer_A', price: 50 },
          { id: 'producer_B', price: 200 },
          { id: 'producer_C', price: 500 }
        ]
      };
    });

    it('returns a boolean', function() {
      const result = code.canAffordProducer(data, 'producer_A');
      expect(result).to.be.a('boolean');
    });
    it('returns true if the player can afford the producer', function() {
      const result = code.canAffordProducer(data, 'producer_A');
      expect(result).to.be.equal(true);
    });
    it('returns false if the player cannot afford the producer', function() {
      const result = code.canAffordProducer(data, 'producer_B');
      expect(result).to.be.equal(false);
    });
  });

  describe('The updateCPSView function', function() {
    // Clear out our fake DOM
    beforeEach('reset the fake DOM', function() {
      resetJSDOM();
    });

    it('calls document.getElementById() or document.querySelector()', function() {
      const spyOnGetElementById = sinon.spy(document, 'getElementById');
      const spyOnQuerySelector = sinon.spy(document, 'querySelector');
      code.updateCPSView(100);
      const wereFnsCalled =
        spyOnGetElementById.called || spyOnQuerySelector.called;
      expect(wereFnsCalled).to.equal(true);
      spyOnGetElementById.restore();
      spyOnQuerySelector.restore();
    });

    it('updates the total cps indicator to display the current total cps', function() {
      const cpsIndicator = document.getElementById('cps');

      code.updateCPSView(50);
      expect(cpsIndicator.innerText).to.equal(50);

      code.updateCPSView(100);
      expect(cpsIndicator.innerText).to.equal(100);
    });
  });

  describe('The updatePrice function', function() {
    it('returns an integer, not a float', function() {
      const result = code.updatePrice(501);
      expect(result).to.be.a('number');
      expect(result % 1).to.be.equal(0);
    });
    it('returns 125% of the input price, rounded down', function() {
      const result = code.updatePrice(501);
      expect(result).to.be.equal(626);
    });
  });

  describe('The attemptToBuyProducer function', function() {
    // Set up some fake data
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 100,
        totalCPS: 0,
        producers: [
          { id: 'producer_A', price: 50, cps: 5, qty: 0 },
          { id: 'producer_B', price: 200, cps: 10, qty: 0 },
          { id: 'producer_C', price: 500, cps: 20, qty: 0 }
        ]
      };
    });

    it('returns a boolean', function() {
      const result = code.attemptToBuyProducer(data, 'producer_A');
      expect(result).to.be.a('boolean');
    });

    it('returns false if the player cannot afford the producer', function() {
      const result = code.attemptToBuyProducer(data, 'producer_B');
      expect(result).to.be.equal(false);
    });
    it('returns true if the player can afford the producer', function() {
      const result = code.attemptToBuyProducer(data, 'producer_A');
      expect(result).to.be.equal(true);
    });

    it('increments the quantity of the producer in question only if the player can afford it', function() {
      code.attemptToBuyProducer(data, 'producer_A');
      expect(data.producers[0].qty).to.be.equal(1);

      code.attemptToBuyProducer(data, 'producer_B');
      expect(data.producers[1].qty).to.be.equal(0);
    });

    it("decrements the player's coffee by the *current* price of the producer, but only if the player can afford it", function() {
      code.attemptToBuyProducer(data, 'producer_B');
      expect(data.coffee).to.be.equal(100);

      code.attemptToBuyProducer(data, 'producer_A');
      expect(data.coffee).to.be.equal(50);
    });
    // hint: use a function already written
    it('updates the price of the producer to 125% of the previous price, rounded down, but only if the player can afford the producer', function() {
      code.attemptToBuyProducer(data, 'producer_A');
      expect(data.producers[0].price).to.be.equal(62);

      code.attemptToBuyProducer(data, 'producer_B');
      expect(data.producers[1].price).to.be.equal(200);
    });
    // hint: use a function already written
    it('updates the total CPS, but only if the player can afford the producer', function() {
      code.attemptToBuyProducer(data, 'producer_A');
      expect(data.totalCPS).to.be.equal(5);

      code.attemptToBuyProducer(data, 'producer_B');
      expect(data.totalCPS).to.be.equal(5);
    });
    it("does not modify data in any way if the player tries to buy something they can't afford", function() {
      const snapshot = JSON.stringify(data);
      code.attemptToBuyProducer(data, 'producer_B');
      expect(JSON.stringify(data)).to.equal(snapshot);
    });
  });

  describe('The buyButtonClick function', function() {
    // JSDOM doesn't have window.alert, so we'll roll our own
    window.alert = alertString => {
      console.log('window.alert() called with:', alertString);
    };

    // Clear out our fake DOM
    beforeEach('reset the fake DOM', function() {
      resetJSDOM();
    });

    // Set up some fake data
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 100,
        totalCPS: 0,
        producers: [
          { id: 'producer_A', price: 50, cps: 5, qty: 0 },
          { id: 'producer_B', price: 200, cps: 10, qty: 0 },
          { id: 'producer_C', price: 500, cps: 20, qty: 0 }
        ]
      };
    });

    // Hint: use the function you've already written!
    it('mutates the data only if the player can afford the producer', function() {
      // buyButtonClick accepts a browser event argument. Here we simulate this by creating an event object ourselves we'll only give that fake event bject the properties that are relevant for our purposes

      // This purchase should suceed
      const snapshot = JSON.stringify(data);
      const event = { target: { tagName: 'BUTTON', id: 'buy_producer_A' } };
      code.buyButtonClick(event, data);
      expect(JSON.stringify(data)).to.not.be.equal(snapshot);

      // This purchase should fail
      const snapshot2 = JSON.stringify(data);
      const event2 = { target: { tagName: 'BUTTON', id: 'buy_producer_B' } };
      code.buyButtonClick(event2, data);
      expect(JSON.stringify(data)).to.be.equal(snapshot2);
    });

    // Hint: see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
    it('shows an alert box with the message "Not enough coffee!" only if the player cannot afford the producer', function() {
      const spyOnAlert = sinon.spy(window, 'alert');

      // This purchase should fail
      const event = { target: { tagName: 'BUTTON', id: 'buy_producer_B' } };
      code.buyButtonClick(event, data);
      expect(spyOnAlert.called).to.equal(true);

      // This purchase should not fail
      spyOnAlert.called = false;
      const event2 = { target: { tagName: 'BUTTON', id: 'buy_producer_A' } };
      code.buyButtonClick(event2, data);
      expect(spyOnAlert.called).to.equal(false);

      spyOnAlert.restore();
    });

    // Notice that at the bottom of script.js we attach an event listener that calls `buyButtonClick` not just to a buy button but to the entire producer container. Here we test that you filter clicks so that the function pays attention only to clicks on buy buttons
    it("does not modify data or show an alert box if the event passed in doesn't represent a click on a button element", function() {
      const spyOnAlert = sinon.spy(window, 'alert');
      const snapshot = JSON.stringify(data);

      // This represents a click on something other than a button
      const event = { target: { tagName: 'DIV' } };
      code.buyButtonClick(event, data);

      // Now let's check to make sure this didn't do anything
      expect(spyOnAlert.called).to.equal(false);
      expect(JSON.stringify(data)).to.equal(snapshot);
    });

    // Hint: call a function you've already written!
    it('renders the updated producers when a purchase succeeds', function() {
      const event = { target: { tagName: 'BUTTON', id: 'buy_producer_A' } };
      code.buyButtonClick(event, data);
      const producerContainer = document.getElementById('producer_container');
      expect(producerContainer.childNodes.length).to.be.equal(1);
    });

    // Hint: call a function you've already written!
    it('updates the coffee count on the DOM, reflecting that coffee has been spent, when a purchase succeeds', function() {
      const event = { target: { tagName: 'BUTTON', id: 'buy_producer_A' } };
      code.buyButtonClick(event, data);
      const coffeeCounter = document.getElementById('coffee_counter');
      expect(coffeeCounter.innerText).to.equal(50);
    });

    // Hint: call a function you've already written!
    it("updates the total CPS on the DOM, reflecting that the new producer's CPS has been added", function() {
      const event = { target: { tagName: 'BUTTON', id: 'buy_producer_A' } };
      code.buyButtonClick(event, data);
      const cpsIndicator = document.getElementById('cps');
      expect(cpsIndicator.innerText).to.equal(5);
    });
  });

  describe('The tick function', function() {
    // Clear out our fake DOM
    beforeEach('reset the fake DOM', function() {
      resetJSDOM();
    });

    // Set up some fake data. Note that we're just one tick below the threshhold to render producer_B
    let data;
    beforeEach('initialize some fake data', function() {
      data = {
        coffee: 90,
        totalCPS: 10,
        producers: [
          { id: 'producer_A', price: 50, cps: 5, qty: 0 },
          { id: 'producer_B', price: 200, cps: 10, qty: 1 },
          { id: 'producer_C', price: 500, cps: 20, qty: 0 }
        ]
      };
    });

    it('increases coffee count by the total CPS', function() {
      code.tick(data);
      expect(data.coffee).to.be.equal(100);
    });

    // Hint: use what you've written already! The tick function can be just a few lines
    it('updates the dom to reflect this new coffee count', function() {
      code.tick(data);
      const coffeeCounter = document.getElementById('coffee_counter');
      expect(coffeeCounter.innerText).to.equal(100);
    });

    it('updates the dom to reflect any newly unlocked producers', function() {
      code.tick(data);
      const producerContainer = document.getElementById('producer_container');
      expect(producerContainer.childNodes.length).to.be.equal(2);
    });
  });
});

// If you've finished the last slice, you should now be able, in the browser, to buy producers and see the coffee count increment automatically. It's possible to progress in the game more quickly than at the end of slice 2, when all you could do is click, but if you want to cheat to make sure everything is working, remember that you can always open the console and set `data.coffee` to a very large number.

// Don't forget to commit your changes-- and to take a look at the extra credit in the README, if you have time to spare!
