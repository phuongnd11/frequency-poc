import React from 'react';

class ChannelItem extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        const { item, handleRowClick, activeRow, idx } = this.props;
        return (
            <tr className={activeRow && activeRow == idx ? 'active' : null} onClick={handleRowClick}>
                <td className="title">{item.title}</td>
                <td className="videos">{item.video}</td>
                <td className="duration">{item.duration}</td>
                <td className="status">{item.status}</td>
                <td>
                    <button type="button" className="btn btn-default"><span className="caret"></span></button>
                </td>
            </tr>
        )
    }
}

export default ChannelItem