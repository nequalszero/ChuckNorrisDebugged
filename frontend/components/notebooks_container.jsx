import {connect} from 'react-redux';
import Notebooks from './notebooks';

const mapStateToProps = (state) => {
	return {notebooks: state.notebooks};
};

export default connect(mapStateToProps, null)(Notebooks);
