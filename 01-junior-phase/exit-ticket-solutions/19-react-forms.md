# Day 19: React Forms

**You should be able to:**
- Explain the difference between controlled and uncontrolled forms
- Build a form using React
- Explain the difference between local `state` and application `state`


## Controlled forms require... (check all that apply)

- an event handler for `change` events ☑️
- a call to `preventDefault` ☑️
- the `value` for one or more inputs to be specified by React ☑️
- a `method` and `action` attribute
- an event handler for the `submit` event ☑️

**Reference:**
  - [React: Forms](https://reactjs.org/docs/forms.html)


## Local `state` vs. Application `state`
<small>Pick where each example of state should live, in the local or application state.</small>

### Note: Each one of these can have an argument for either or.

|   | Local `state` | Application `state` | Explanation |
| - | ------------- | ------------------- | ----------- |
| User data used in almost all components |   | ☑️ | This would be better managed higher up on the `state` tree since this user data is used in many components. |
| The contents of a form to add a todo item | ☑️ |   | Usually **only** the form itself needs to know about the data inside of it. |
| The list of all known Pokémon for a Pokédex app | ☑️ | ☑️ | This app is giving us data on all the known Pokémon, which can affect how different parts of the application will run so that list data should probably be managed higher in the `state` tree. However, the argument can be made that the answer is "it depends" on what kind of functionality we are looking to have for that list. |
| Interactions with a chat bot | ☑️ |   | The kind of data in here could just be local, as the interactions don't necessarily need to be known outside of local `state`. Though, the interactions _can_ be saved in the database to be used for later. However, it could very well be that the bot interactions can help inform other parts of the app, which then it would be more appropriate on application `state`. |
| How many carrots you have in your cart when ordering food online |   | ☑️ | If we go on any food ordering service and we put something in our cart, that data is maintained everywhere we go on the application. |
| Your sidebar color preferences in Slack |   | ☑️ | Even though it seems like it would be better with local `state`, as this kind of data is not "complicated", it's probably best to be managed higher up in the `state` tree because all the components in our app depend on this data to make sure our sidebar color preferences are consistent across the app. |
