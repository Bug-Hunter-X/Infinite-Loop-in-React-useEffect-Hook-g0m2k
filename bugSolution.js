```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This runs only once on mount, then no more
    // No dependency array means it will only run once after mount
    // To trigger updates, consider using other event handlers or changing different state variables
    console.log('Component Mounted');
    //Add any operations here
  }, []); // Empty dependency array prevents infinite loop

  return <div>Count: {count}</div>;
}
```