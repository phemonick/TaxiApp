import React from 'react';
import { View } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './MapContainerStyles';
import { SearchBox } from '../SearchBox';
import SearchResult from '../SearchResult';

export const MapContainer = ({ region }) => (
        <View style={styles.container}>
            <MapView 
            provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                <Marker 
                    coordinate={region}
                    pinColor="green"
                />
            </MapView>
            <SearchBox />
            <SearchResult />
        </View>
        );
    export default MapContainer;
