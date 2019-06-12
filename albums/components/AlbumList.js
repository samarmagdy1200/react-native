import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    // HTTP request to backend server
    // set data to state.albums
    axios.get('https://amrdiab.herokuapp.com/api/albums').then(res => {
      this.setState({ albums: res.data.albums });
    });
  }

  renderAlbums() {
    if (this.state.albums.length === 0)
      return <ActivityIndicator visible={true} size="large" color="#123456" />;
    else
      return this.state.albums.map(album => {
        return <AlbumDetail key={album.title} albumProp={album} />;
      });
  }

  render() {
    const { albums } = this.state;

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
