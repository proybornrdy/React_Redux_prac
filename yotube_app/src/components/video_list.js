import React from 'react';

import VideoListItem from './video_list_item';

const VideoList =(props) =>{
  //props are from parent as object
  //const videos = props.vids; -> array of videos got from parent
  //in functional component argument props can be only called in by argument
  //but in class based component, can be called using this.props from parent anywhere
  const videoItems = props.vids.map((vids)=>{
    return(
      <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key= {vids.etag}
      video = {vids} />
    )
  });
  // from list of videos from props.vids loop each one of them to put inside videolistitem
  //if items in list dont have keys to identify them,
  //react will need to rerender whole list of itme to update single item
  //by adding special keys to each item, that won't be necessary

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
  //similar to adding class to css class in norm html
  //instead of class use className
  //instead of using for loop, use bbuild in function map()
  //function map(){[nativecode]}
  // array.map(function(number){return number*2});
  //jsx automatically recognize list itmes and render it all together


}

export default VideoList;
