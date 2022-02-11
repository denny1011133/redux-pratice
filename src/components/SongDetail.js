import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return null
    }
    return <div className="item">
        <div className="image">
            <img alt="" width="70%" src={song.image} />
        </div>
        <div className="content">
            <div className="meta">
                <a href="#" className="header">歌手:{song.artist}</a>
            </div>
            <div className="description">
                <p>{song.description}</p>
            </div>
            <div className="extra">
                <div className="ui label">{song.type}</div>
                <div className="ui label">{song.releaseDate}</div>
                <div className="ui right floated primary button">
                    聽歌去
                    <i className="right chevron icon"></i>
                </div>
            </div>
        </div>
    </div>

};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
