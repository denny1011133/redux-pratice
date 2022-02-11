import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div class="item" key={song.id}>
          <div class="ui tiny image">
            <img alt="" src={song.image} />
          </div>
          <div class="middle aligned content">
            {song.name}
            <div className="right floated content">
              <div className="ui button basic primary">檢視</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided items">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
