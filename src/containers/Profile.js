import ProfileComponent from '../components/Profile';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        profile: state.profile
    };
  }

const Profile = connect(
        mapStateToProps
    )(ProfileComponent);

export default Profile;
