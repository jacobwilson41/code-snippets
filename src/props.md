### Basic Element Props

Attributes assigned to individual elements are referred to as 'props'.

We can assign just about any prop to a JSX element as we would an HTML element.

Props that expect a string should be written with double quotes.

```jsx
const App = () => {
  return (
    <div>
      <input type="date" />
      <div>
        <img src="https://picsum.photos/150/150" />
      </div>
    </div>
  );
};
```

We can also use curly braces when assigning props to refer to a Javascript variable! We _don't_ wrap the curly braces with double quotes when doing this.

```jsx
const App = () => {
  const type = 'date';

  return <input type={type} />;
};
```

Some HTML attribute names are different when we write JSX. The most common is `class`. With JSX, we write `className` instead of `class`.

```jsx
const App = () => {
  return <button className="btn btn-primary">Submit</button>;
};
```

```warning
The JSX will still work if you write `class`, but React will display an error in your console.
```

If we need to assign several props to an element, it should be broken up into multiple lines.

```jsx
const App = () => {
  return (
    <img
      src="https://picsum.photos/150/150"
      alt="This is a randomly picked photo"
    />
  );
};
```
