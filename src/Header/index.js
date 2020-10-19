import { connect } from 'react-redux'
import { handleSearch } from '../actions/index'
import HeaderComponent from './HeaderComponent'

const mapDispatchToProps = (dispatch) => ({
	onSearch: value => dispatch(handleSearch(value)) 
})

const Header = connect(null, mapDispatchToProps)(HeaderComponent)

export default Header