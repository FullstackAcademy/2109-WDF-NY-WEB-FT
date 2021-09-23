/*
1. Let's add an event listener here. Define parent and addEventListener()
2. Run live server and click on parent container; show dev tools
3. Check out the event target, point ouf the event property itself
4. Revise event listener: Change console log to e.target and add padding line
5. Add stopPropogation: define childThree and its event listener.
- When we click the fourth child, or first or second, they turn purple. Third does not. But when you click outer container, it turns purple. Because we call stopPropagation() in the child 3 event listener, the event does not bubble up to the parent elements; it never reaches the event  listener attached to the parent, so it doesn't turn purple. Any existing parent handlers are not notified of the event.
6. This context: let's talk about the relevance of the this context with event handlers. Select .child.one. and create a user object.
7. Add event listener so that on click, user.greeting is called.
8. What do we expect to get? Explain what's happening
9. Fix by adding the bind() call
*/

/************ Event delegation & stopPropagation */

let parent = document.querySelector('.parent')

parent.addEventListener('click', (e) => {
    console.log(e.target) // STEP 1
    e.target.style.padding = '100px' // STEP 4
    e.target.style.backgroundColor = 'purple' // STEP 4
    console.log('Help, I am being clicked') // STEP 1
})

let childThree = document.querySelector('.child.three')

childThree.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log(e)
    e.target.style.border = '20px dashed yellow'
})

//---------------------------------- This Context in terms of Event Listeners------------------------------

// Selects all elements with both name1 and name2 set within its class attribute
let childOne = document.querySelector('.child.one')

let user = {
    firstName: "Sarah",
    greeting: function() { alert('My name is ' + this.firstName) }
}

// What happens if don't use it
user.greeting = user.greeting.bind(user) // LAST STEP

// This will return undefined if we don't bind context
childOne.addEventListener(
    "click",
    user.greeting //Call site and context
)

/*
    We expect this to give us an alert returning My name is Sarah  but instead it returns My name is undefined. Why?
    When we pass the greeting function to the addEventListener method, we are only passing a reference to the function but not the context of user.
    The callback is called in the context of childOne, which means this refers to childOne and not user.
    We are not in control of when the click is going to be triggered. That is left up to the window and the window calls it.
*/


