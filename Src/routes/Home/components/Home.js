import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';

import MapContainer from './MapContainer';

class Home extends Component {

    componentDidMount() {
        this.props.getCUrrectLocation();
    }
    render() {
        const region = {
            latitude: 6.466032,
            longitude: 3.544584,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        return (
        <Container>
            {/* to make sure it already exist else dont show */}
            { this.props.region.latitude && 
            <MapContainer region={this.props.region} />
        }
        </Container>
        );
    }
}

export default Home;
