import React from 'react';
import { Text } from 'react-native';
import { View, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchResulStyles';

export const SearchResult = () => (
        <View style={styles.searchResultWrapper}>
            <List>
                <ListItem><Text> List item </Text></ListItem>
                <ListItem><Text> List item </Text></ListItem>
            </List>
        </View>
        );
export default SearchResult;
