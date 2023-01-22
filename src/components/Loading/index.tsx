import '../../styles/Loading/index.css';
import spinner from './assets/imgs/spinner.gif';

const Loading = () => {
  return (
    <div className="loading">
      <img src={spinner} alt="Loading spinner" title="Loading" />
    </div>
  );
};

export default Loading;
