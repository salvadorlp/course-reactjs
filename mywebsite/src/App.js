import React, { Component } from "react";

// StateLess x StateFull
// in the majority of cases, Statefull components will be represented by classes
//
// import React, { Component } from "react";
//
// class App extends Component {
//   render() {
//     return(
//     <h1>Olá ReactJS</h1>
//     );
//   }
// }
//
// export default App;
//
// In this component you must use render() method because it is responsible for show and re-show informations on the screen
//
// The same component can be coded like this:
// import React from "react";

// const App = () => {
//   return(
//     <h1>Olá ReactJS</h1>
//   );
// };

// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props); // use all resources from this component
//     this.state = {
//       name: "Matheus",
//       count: 0,
//     };

//     this.increase = this.increase.bind(this); // connecting increase function to this class
//     this.decrease = this.decrease.bind(this);
//   }

//   increase() {
//     let state = this.state;
//     state.count += 1;

//     this.setState(state);
//   }

//   decrease() {
//     let state = this.state;
//     if (state.count === 0) {
//       alert("Can't reduce below zero!");
//       return;
//     }
//     state.count -= 1;

//     this.setState(state);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <h1>
//           <button onClick={this.decrease}>-</button>
//           {this.state.count}
//           <button onClick={this.increase}>+</button>
//         </h1>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: "00:00:00",
//     };
//   }

//   // will be called right after component was mounted
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: new Date().toLocaleTimeString() });
//     }, 1000);
//   }

//   // every time component was updated, this method will be called
//   componentDidUpdate() {
//     console.log("Updated!");
//   }

//   // componentWillMount() right before component is mounted
//   // shouldComponentUpdate()
//   // componentWillUpdate() called when shouldComponentUpdate() returns true
//   // componentWillUnmount()

//   render() {
//     return (
//       <div>
//         <h1>React time update</h1>
//         <h2>{this.state.time}</h2>
//       </div>
//     );
//   }
// }

// import Member from "./components/member";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Project</h1>
//         <Member name="visitor" />
//       </div>
//     );
//   }
// }

// import Feed from "./components/feed";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feed: [
//         { id: 1, username: "Salvador", likes: 212, comments: 23 },
//         { id: 2, username: "Arthur", likes: 266, comments: 15 },
//         { id: 3, username: "Caio", likes: 1, comments: 5 },
//       ]
//     };
//   }

//   render() {
//     return (
//       this.state.feed.map((item) => {
//         return (
//           <Feed id={item.id} username={item.username} likes={item.likes} comments={item.comments}/>
//         )
//       }) 
//     )
    
//   }
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        gender: 'Male'
      }
    }

    this.formData = this.formData.bind(this);
  }

  formData(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render(){
    return(
      <div>
        <h2>Faça o login</h2>
        <label>Name: </label>
        <input type="text" name="name" value={this.state.form.name} onChange={this.formData}></input> <br/>
        <label>Email: </label>
        <input type="email" name="email" value={this.state.form.email} onChange={this.formData}></input> <br/>
        <label>Password: </label>
        <input type="password" name="password" value={this.state.form.password} onChange={this.formData}></input> <br/>
        <label>Gender: </label> 
        <select name="gender" value={this.state.form.gender} onChange={this.formData}>
          <option value ="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <ui>
          <li>{this.state.form.email}</li>
          <li>{this.state.form.password}</li>
          <li>{this.state.form.gender}</li>
        </ui>
      </div>
    )
  }
}

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       error: ''
//     }

//     this.createAccount = this.createAccount.bind(this);
//   }

//   createAccount(event){
//     const {name, email, password} = this.state;

//     if(name !== '' && email !== '' && password !== ''){
//       alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\n`);
//       this.setState({error: ''})
//     }else{
//       this.setState({error: 'Fill all fields'});
//     }

//     event.preventDefault();
//   }

//   render(){
//     return(
//       <div>
//         <h1>Create Your Account</h1>
//         <form onSubmit={this.createAccount}>
//           <label>Name: </label>
//           <input type="text" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}></input> <br/>
//           <label>Email: </label>
//           <input type="email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}></input> <br/>
//           <label>Password: </label>
//           <input type="password" value={this.state.password} onChange={ (e) => this.setState({password: e.target.value})}></input> <br/>
//           {this.state.error && <p>{this.state.error}</p>} {/** {this.state.error !== '' <p>{this.state.error}</p>} */}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

export default App;
