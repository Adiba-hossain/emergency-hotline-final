1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById -> selects one element by its ID. Returns an element.

getElementsByClassName -> selects all elements with a class. Returns a live HTMLCollection.

querySelector -> selects the first element that matches a CSS selector. Returns an element.

querySelectorAll -> selects all elements that match a CSS selector. Returns a static NodeList.

2. How do you **create and insert a new element into the DOM**?

Create a new element -> use document.createElement("tagName").

Add content or attributes -> element.innerText = "Text" or element.classList.add("className").

Insert into the DOM -> use methods like: parent.appendChild(element) -> adds at the end of parent.

3. What is **Event Bubbling** and how does it work?

Event bubbling means that when something happens on an element (like a button click), the event first happens on that element, then moves up to its parent, then the parent’s parent, and so on.

For example: click a button inside a box -> first the button reacts -> then the box reacts -> then the page reacts. It “bubbles up” automatically.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is when a parent element handles events for its children instead of adding a listener to each child. The parent checks which child was clicked using the event.

It saves memory, works for new elements added later, and makes managing events easier.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault(): Stops the browser from doing its normal thing for an event. For example, clicking a link normally opens a page, or submitting a form reloads the page. Using preventDefault() stops that default behavior so custom code can run instead.

stopPropagation(): Stops an event from moving through the DOM. Normally, events bubble up from the element you clicked to its parents (or capture down from parents). Using stopPropagation() prevents parent or ancestor elements from reacting to that event.
