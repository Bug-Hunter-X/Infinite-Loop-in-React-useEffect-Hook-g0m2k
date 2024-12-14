```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // count is in the dependency array, causing the effect to run endlessly

  return <div>Count: {count}</div>;
}
```