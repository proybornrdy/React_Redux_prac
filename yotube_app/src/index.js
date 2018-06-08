/*
react is js lib that is used to produce html (shown to user in a webbrowser)
reactcode == writing individual components/views
-> components is snipsets of code that produce each html
with react code, write multiple diff components and nest these components together by placing one inside the other in diff fashions to make really complex applications relatively simple

component is a collection of js functions that produce html
*/
import _ from 'lodash';

import React, {Component} from 'react';  //core react lib: knows how to work with react components
                            // knows how to render them, nest them together

import ReactDOM from 'react-dom'; //functionality to actually render them
                                  // meaning take component and insert into DOM


import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';   //imported from search_bar.js
                                                  //need specific file location since its not within lib
import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';

const API_KEY = ; //google api key -removed it just in case

//YTSearch({key: API_KEY, term:'surfboards'},function(data){console.log(data);});
//example of using YTSearch

//downwatrd dataflow:
//only the most parent component in the application should be responsible for fetching data
//index is most parent in this case


//create new component
//this produce some html
/*
const App = () =>  {     //const is es6 peice of syntax
                            //it acts like var (declaring variable)
                            //but with const, declared variable is FINAL(non changeable)
                            //function() can be replace to: ()=>
                            // only diff is using "this"

  return (
      <div>
        <SearchBar />
      </div>
    );                        //jsx: allows to write html inside js
                            // this cannot be interpreted by the webbrowser.
                            // same goes for es6.
                            // With help of webpack and babel,translate these jsx and es6 to be interpreted into vanilla js by webbrowser

  // use jsx because this produces actual html that gets inserted into DOM when we "render" the component
}
*/

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      vids: [],
      selectedVideo: null
    };
    /*
    YTSearch({key: API_KEY, term:'bless'},(vids) => {this.setState({
      vids:vids,
      selectedVideo: vids[0]
      });
    });
    //if key and values for state have identical terms, can be compacted using es6 syntax
    //such that this.setState({vids:vids}) ==> this.setState({vids})
    */
    this.videoSearch('surfboards')
    // refactored youtube search into its own method
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term},(vids) => {this.setState({
      vids:vids,
      selectedVideo: vids[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    // <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
    // to throttle above action, add videosearch debounced version.
    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video ={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect= {selectedVideo =>this.setState({selectedVideo})}
            vids = {this.state.vids}/>
        </div>
      );
  }
}

//Take this component's generated html and put it on the page (in DOM-index.html)

// gave access of videoSearch method to searchbar (child of index)

ReactDOM.render(<App />, document.querySelector('.container'));
  // render(App): App here is just a class/type
  //so in order for App to be instance,
  //App -> <App /> : wrap with jsx tags
  //render takes second arg for the target where the instance will be placed
