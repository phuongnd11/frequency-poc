import React from 'react';
import update from 'react/lib/update';
import ChannelItem from './ChannelItem';

class ListChannel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {channels:[],
          videos:[],
          activeRow: null
        }
        this.eachChannel = this.eachChannel.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
	}

	componentDidMount() {
		this.fetchChannels();
	}

	fetchChannels() {
		var $;
		$ = require('jquery');
		$.ajax({
			url : "https://jsonp.afeld.me/?url=https://dev.freq.us/api/2.0/channels/all",
			type : "get",
			headers : {
				'Content-Type': 'application/json',
				'X-Frequency-DeviceId': '556a6dc3-1ea0-09b6',
				'X-Frequency-Auth': 'ba4cea0a-d4c4-4951-8991-029df07a4242'
			},
			success: function (data) {
				this.setState({ channels: data.channels });
			}.bind(this)
		});
	}

    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Channel Title</th>
                    <th># of Videos</th>
                    <th>Duration</th>
                    <th>Channel Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>										
                    {
					    this.state.channels.map(this.eachChannel)
				    }
                </tbody>
            </table>	
        )
    }

    handleRowClick(i) {
        this.props.fetchVideos(this.state.channels[i].channel_id);
        this.setState({ activeRow: i} , () => {
//          this.props.itemClick({});
        });
//		console.log(this);
    }
    
    eachChannel(item, i) {
		return (
            <ChannelItem
              key={i}
              item={item}
              handleRowClick={() => this.handleRowClick(i)}
              activeRow={this.state.activeRow}
              idx={i}
            />
        );
    }
}

export default ListChannel