## 1. What is the difference between Component and PureComponent?

The difference is that a PureComponent knows better when to re-render a component by knowing what the previous state or props are, and a component ALWAYS re-renders if state changes or props that are not memoized change.

Example where it might break the app: Not sure how it can break the app.

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

I don't know :(

## 3. Describe 3 ways to pass information from a component to its PARENT.

- By callback functions
- By using a global state manager such as React context API
- By using refs
- (NOT RECOMMENDED) updating a prop directly

## 4. Give 2 ways to prevent components from re-rendering.

- By using `useCallback` or `useMemo` to memoize a value or function passed as props.
- By using refs instead of state in some specific cases.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is used to wrap elements but it does not render an HTML element to the DOM. This is because of the way JSX works, as it needs to clearly know the whole element to be rendered to the DOM.

Example where it might break the app: I don't know if this is considered 'breaking' the app, but there are times when I've used fragments and the CSS is messed up, and it is because a fragment is being used and it does not appear on the DOM while inspecting.

## 6. Give 3 examples of the HOC pattern.

- One example is the way Redux worked before hooks, for example withRouter.
- When using authentication, for example, I can create a HOC that wraps all the components that I want to render only when authenticated.

## 7. What's the difference in handling exceptions in promises, callbacks, and async...await?

- In a promise, you just use the `reject` function with a value (error message, for example).
- In async await, you can use a try-catch block.
- In a callback, you can pass an error function, but not sure of this one.

## 8. How many arguments does setState take and why is it async?

`setState` takes 1 argument. It can be only the value itself `setState(newValue)` or it can be also a function that takes the previous state value as an argument and use it to update it `setState(prevValue => prevValue += 1)`. I think it is async so that it does not block interactions with another parts of the app.

## 9. List the steps needed to migrate a Class to Function Component.

- All the lifecycle functions need to be migrated to hooks (for example, componentDidMount => useEffect with an empty dependency array).
- State should be migrated to useState.
- Migrate `this.props` to `props` as parameters.
- Remove `render()` and just return the JSX.

## 10. List a few ways styles can be used with components.

- With normal CSS classes.
- With an external library such as styled-components.
- With inline styles.
- With CSS modules.

## 11. How to render an HTML string coming from the server.

- There is a function to do this, which I don't remember well how to use, but it is something like `dangerousSetInnerHTML`. But this might be a problem for security. It is better not to do this or sanitize the HTML before.
