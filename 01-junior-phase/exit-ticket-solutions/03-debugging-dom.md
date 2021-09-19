# Day 03: Debugging, DOM

(Credit: Sarah Zhao)

**You should be able to:**
- Be able to identify common ways to debug software and procedures to prevent bugs
- Define the DOM
- Manipulate the DOM using the DOM API
- Explain how a browser uses HTML, CSS, and JavaScript to display a web page


## What technique(s)/tools would you use to debug a program that crashes but gives you an error on a line that you didn't write (i.e. from an external dependency)?

- **In general**
  - `console.log` / `console.trace` / `console.error`

- **Preventative measures**
  - Check your linter

- **If problem exists in the browser**
  - `debugger`
    - Issue: It can be useful, but it can also be in a piece of code you don't even recognize, so you need to decide when to stop walking through functions you and your team didn't write.

- **A _classic_ move**
  - Comment out the program, then uncomment piece by piece until it crashes
    - This is surprisingly useful if you know that everything worked before you added your batch of code. You can start commenting out certain sections to make sure individual pieces still work, and slowly add on more until it breaks.

- **Less useful (in this context)**
  - Read the stack trace
    - Since you didn't write this code, the stack trace won't truly help you. The only thing it _can_ help is to possibly figure out what librarry you were using/where in a general location your broken code can be.

- **Toss it in the bin**
  - Revert to a prior commit
    - Just start again.


## Which of the following are true about the DOM? (Check all that apply)

|   | Option | Explanation (if applicable) |
| - | ------ | --------------------------- |
| ☑️ | **It is a tree** |  |
|   | A single webpage can have any number of DOMs | You can actually create a "new DOM" but there will always be **one** DOM that renders the page, you can also create Shadow DOMs using Web Components technology, but there's still one main DOM. |
| ☑️ | **It stands for: Document Object Model** |  |
| ☑️ | **It allows us to use JavaScript to manipulate the document content and structure** |  |
|   | You cannot traverse the DOM from JavaScript, only through the browser's console |  |


## How would you select the first instance of an `<h1>` tag in the DOM?

- `document.querySelector('h1')`
  - **Explanation:** `querySelector` returns the ***first*** `Element` within the document that matches the specified selector.
