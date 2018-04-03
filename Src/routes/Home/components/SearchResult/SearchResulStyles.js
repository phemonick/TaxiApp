import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = {
    searchResultWrapper: {
        top: 220,
        position: 'absolute',
        width,
        height: 1000,
        backgroundColor: '#FFFFFF',
        opacity: 0.9
    },
    primaryText: {
        fontWeight: 'bold',
        color: '#373737'
    },
    secondaryText: {
        fontStyle: 'italic',
        color: '#7D7D7D'
    },
    leftIcon: {
        fontSize: 20,
        color: '#7D7D7D'
    },
    distance: {
        fontSize: 12
    }

};
export default styles;
