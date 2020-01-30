import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from '../../../components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
  const postId = pathname.split('/post/')[1];
  return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0]
};

HeaderBlock.defaultProps = {
  title: 'Website Title',
  description: 'Site description',
  imageUrl: 'https://images.unsplash.com/photo-1578167597239-14f8fc680b6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80'
};

export default withRouter(connect(mapStateToProps)(HeaderBlock));
