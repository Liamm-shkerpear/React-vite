import './style.css'

// component = html + css + js
const MyComponent = () => {
    // const name = "Thanh"; //string
    // const name = 123; //number
    // const name = true; //boolean
    // const name = undefined;
    // const name = null; 
    const name = [1, 2, 3];
    // const people = {
    //     name: "Thanh",
    //     age: 20
    // }
    return (
        <>
      <div> hello {JSON.stringify(name)} </div>
      <div className="child"
        style={{borderRadius: "10px"}}
      >child</div>
      </>
    );
  }
  export default MyComponent;