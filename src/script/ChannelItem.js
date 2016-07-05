import React from 'react';

function ChannelItem({
  item,
  handleRowClick,
  activeRow,
  idx,
}) {
  return (
    <tr className={activeRow && activeRow === idx ? 'active' : null} onClick={handleRowClick}>
      <td className="title">{item.title}</td>
      <td className="videos">{item.video}</td>
      <td className="duration">{item.duration}</td>
      <td className="status">{item.status}</td>
      <td>
        <button type="button" className="btn btn-default"><span className="caret"></span></button>
      </td>
    </tr>
  );
}

ChannelItem.propTypes = {
  item: React.PropTypes.object,
  handleRowClick: React.PropTypes.func,
  activeRow: React.PropTypes.number,
  idx: React.PropTypes.number,
};

export default ChannelItem;
