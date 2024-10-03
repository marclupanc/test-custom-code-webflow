const App = () => {
    const [store, setStore] = React.useState("hello");
    console.log(store);
    return (
      <div>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  