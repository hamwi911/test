import React, {Component} from 'react';
import {getTrackList} from "../../services/lyricService";
import LyricTile from "../../components/LyricTile";
import './index.scss';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TrackList: [],
        }
    }

    async componentDidMount() {
        const Tracks = await getTrackList();
        this.setState({
            TrackList: Tracks.data.message.body.track_list,
        });
        // console.log(this.state.lyricList)
    }

    render() {
        return (
            <div className="lyric-parent">
                {
                    this.state.TrackList.map((item, index) => {
                        return (
                            <LyricTile data={item.track}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Index;
