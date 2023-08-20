import React, { useState } from 'react';
import './Song.css'
const Song = (props) =>{
    return (
        <tr>
                <td></td>
                <td>{props.song_name}</td>
                <td>{props.band}</td>
                <td>{props.year}</td>
        </tr>)
}
export default Song;