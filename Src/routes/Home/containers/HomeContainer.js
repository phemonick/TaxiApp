import { connect } from 'react-redux';
import Home from '../components/Home';
import { getCUrrectLocation } from '../modules/home';

const mapStateToProps = (state) => ({
    region: state.home.region
});

const mapActionCreators = {
    getCUrrectLocation
};
export default connect(mapStateToProps, mapActionCreators)(Home);
