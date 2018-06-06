import React, {Component} from 'react'; //by adding {Component} dont have to "extends React.Component" instead just "extends Component"
//same as const Component = React.Component

/*
const SearchBar = () =>{  //in order to user to see this search bar req render inside DOM
                          //we can use index.js to render
                          //since independence need to export to index.js
  return <input />;
};// functional component
*/

class SearchBar extends Component{
  //gives SearchBar an access to all of the
  //functionality that re-act component has
  //using class component is to be more aware such that it can communicate

  constructor(props){
    //initializing a state in class based compile
    //first and only function called automatically whenever new instance is created
    super(props);
    //Component has its own constructor functions
    //since we are defining already defined function of parent class,
    //call parent method using super()

    this.state = {term:''};
    //whenever we use state we initialize it by creating a new obj and assigning it to this.state
    //when user update with searchbar, property "term" records the change in state
  }

  render() {
    //return <input onChange = {event => console.log(event.target.value)} />;
    //onChange =built-in function of React.Component
    //instead of "onChange = {this.onInputChange}" it can be refactored to :
    //"onChange = {(event) => console.log(event.target.value)} "
    // to replace method onInputChange()

    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
         onChange = {event => this.onInputChange(event.target.value)} />
      </div>
      //it is only in constructor function where brute force change state
      //in other cases need to use this.setState
      //when reference js variable put it inside curly braces inside jsx

      //onChange = {event => this.setState({term: event.target.value})}
      //instead use above code and use aditional method to cover for it
    )

  }

  /*
  //whenever input changes run this function
  onInputChange(event){ //event handler
    console.log(event.target.value);

  }
  */

  //state is a plain js obj that is used to record and react to user event
  // each class based comp has its own state obj that whenever state is changed the comp immediatly renders and alos force all of its children to renders

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
}
//new SearchBar : instance of a class
export default SearchBar;
