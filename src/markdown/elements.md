### Element Tags

When writing HTML, some elements are self closing, such as an input element. For example, with HTML you can write an input as `<input>`.

Self-closing tags in JSX will always have a `/` at the end of the opening tag.

```jsx
const App = () => {
  return <input />;
};
```

You may only return one 'top level' JSX element from a component. A 'top level' element is the most parent element being returned from a component.

This component is returning a single top level element - the 'ul'. The top level element can have as many elements inside of it as needed.

```jsx
const App = () => {
  return (
    <ul>
      <li>Red</li>
      <li>Green</li>
    </ul>
  );
};
```

If you need to return multiple elements, wrap them with a containing element, like a div.

```jsx
const App = () => {
  return (
    <div>
      <h3>Colors</h3>
      <ul>
        <li>Red</li>
        <li>Green</li>
      </ul>
    </div>
  );
};
```

Sometimes, you don't want to insert an extra wrapping element, since it can conflict with some CSS styles. If you don't want to add an extra element, you can return wrap the content in a 'fragment', which looks like an empty JSX element.

```jsx
const App = () => {
  // The empty brackets are a 'React Fragment'
  return (
    <>
      <h3>Colors</h3>
      <ul>
        <li>Red</li>
        <li>Green</li>
      </ul>
    </>
  );
};
```
