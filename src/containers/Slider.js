import SliderComponent from '../components/SimpleSlider';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        profile: state.profile
    };
  }

const Slider = connect(
        mapStateToProps
    )(SliderComponent);

export default Slider;
