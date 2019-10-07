import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './LyricTile.scss';

class LyricTile extends Component {
    render() {
        const track = this.props.data;
        console.log(track);
        return (
            <div className="box">
                <h5>{track.artist_name}</h5>
                <p className="card-text">
                    <strong> Track</strong>: {track.track_name}
                    <br/>
                    <strong> Album</strong>: {track.album_name}
                </p>
                <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                    View Lyrics
                </Link>
            </div>
        );
    }
}

export default LyricTile;
