import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

class SomeComponent extends React.Component {
  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('body');
  }

  showTargetElement = () => {
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {
    enableBodyScroll(this.targetElement);
  };

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    return <div>some JSX to go here</div>;
  }
}
