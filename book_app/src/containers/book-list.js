import React, {Component} from 'react';
//container is a react component that has a direct connection to the staet managed by redux
import {connect} from 'react-redux';

import{selectBook} from '../actions/index';
import{bindActionCreators} from 'redux';


class BookList extends Component{

  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          key ={book.title}
          onClick = {()=>this.props.selectBook(book)}
          className="list-group-item">{book.title}

        </li>
      );
    });
  }

  render(){
    //console.log(this.porps.asdf)// ->'123'
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps(state){
  //whatevr is returned will show up as porps inside BookList
  // when state changes container automatically re render
  return{
    //asdf:'123'
    books:state.books
  };
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators ({selectBook:selectBook},dispatch);
}

//promote booklist from a component to a container- it needs to know about this new dispatch method, selectBook. make it available as a prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
