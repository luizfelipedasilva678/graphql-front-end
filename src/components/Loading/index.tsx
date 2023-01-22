import spinner from './assets/imgs/spinner.gif';
import './index.css';

const Loading = () => {
  return (
    <div className="loading">
      <img src={spinner} alt="Loading spinner" title="Loading" />
    </div>
  );
};

export default Loading;
