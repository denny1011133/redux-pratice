import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions"


const SongList = function (props) {

  function renderList() {
    return props.songs.map(song => {
      return (
        <div className="item" key={song.id}>
          <div className="ui tiny image">
            <img alt="" src={song.image} />
          </div>
          <div className="middle aligned content">
            {song.name}
            <div className="right floated content">
              <div className="ui button basic primary" onClick={() => {
                props.selectSong(song)
              }}>檢視</div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (<div className="ui divided items">{renderList()}</div>)
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);
