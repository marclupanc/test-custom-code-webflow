const Counter = () => {
  //initilize a count variable at 0, the setCount function
  // will be used to re-set the "count" value.
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count} likes</h2>
      {/* Reset count to its previous value + 1 */}
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      {/* Reset count to its previous value - 1 */}
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

const App = () => {
    return (
      <div>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <Counter />
      </div>
    );
  };




  ReactDOM.render(<App />, document.getElementById("root"));
  
