import React from 'react';
import ListChannel from './ListChannel';
import ListVideo from './ListVideo';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
    this.fetchVideos = this.fetchVideos.bind(this);
  }

  fetchVideos(channelId) {
    const $ = require('jquery');
    $.ajax({
      url: `http://203.162.103.34:8082/cors-proxy-1.0-SNAPSHOT/cn1-cors-proxy?_target=https://dev.freq.us/api/2.0/channels/${channelId}/videos`,
      type: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Frequency-DeviceId': '556a6dc3-1ea0-09b6',
        'X-Frequency-Auth': 'ba4cea0a-d4c4-4951-8991-029df07a4242',
      },
      success: function (data) {
        this.setState({ videos: data.videos });
      }.bind(this),
    });
  }

  render() {
    const { activeTab } = this.props;
    return (
      <div className="col-md-12 tab-content">
        <section className={activeTab.name === 'Channels' ? 'panel active in' : 'panel fade'}>
          <div className="row content">
            <div className="col-md-8 list-channel">
              <div className="header">
                <span className="h1 text-right all-channels">All Channels</span>
                <div className="pull-right">
                  <button type="button" className="btn btn-frequency btn-lg">
                    Create New Channel
                  </button>
                </div>
              </div>
              <ListChannel fetchVideos={this.fetchVideos} />
            </div>
            <div className="col-md-4 channel-details">
              <ListVideo videos={this.state.videos} />
            </div>
          </div>
        </section>
        <section className={activeTab.name === 'Curate' ? 'panel active in' : 'panel fade'}>
          <div className="row content">
            <h2 className="panel-heading">Curation</h2>
            <div>Test</div>
          </div>
        </section>
      </div>
    );
  }
}

Content.propTypes = {
  activeTab: React.PropTypes.number,
};

export default Content;
