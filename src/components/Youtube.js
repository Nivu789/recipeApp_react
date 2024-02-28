import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

class Example extends React.Component {
    render(props) {
      const opts = {
        height: '390',
        width: '585',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
  
      return <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />;
    }
}

export default Example