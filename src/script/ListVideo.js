import React from 'react';
import VideoItem from './VideoItem';

class ListVideo extends React.Component {
  eachVideo(item, i) {
    return (
      <VideoItem key={i} video={item} key={item.video_id} />
    );
  }

  render() {
    return (
      <div>
        {
          this.props.videos.map(this.eachVideo)
        }
      </div>
    );
  }
}

ListVideo.propTypes = {
  videos: React.PropTypes.array,
};

export default ListVideo;
