import React, { useState, useEffect } from 'react';
import Track from './Track';
import firebase from './firebase';

export default function TrackList() {
  const [trackList, setTrackList] = useState();

  useEffect(() => {
    const trackRef = firebase.database().ref('Job Track');
    trackRef.on('value', (snapshot) => {
      const trackLists = snapshot.val();
      const trackList = [];
      for (let id in trackLists) {
        trackList.push({ id, ...trackLists[id] });
      }
      setTrackList(trackList);
    });
  }, []);

  return (
    <div>
      {trackList
        ? trackList.map((trackList, index) => <Track trackList={trackList} key={index} />)
        : ''}
    </div>
  );
}