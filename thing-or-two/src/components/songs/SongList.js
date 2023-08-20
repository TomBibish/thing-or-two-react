import React, { useState } from 'react';
import Song from './Song'
import './SongList.css'
import Table from 'react-bootstrap/Table';

const SongList = (props) => {
    return( 
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Song Name</th>
                    <th>Band</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
            {props.songs.map(song => (
            <Song
                key={song.id}
                song_name={song.song_name}
                band={song.band}
                year={song.year}/>))}
            </tbody>
        </Table>
    )
}
export default SongList