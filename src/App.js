'use strict';

const e = React.createElement;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Content'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);
