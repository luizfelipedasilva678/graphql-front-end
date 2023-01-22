import '../../styles/MainContent/index.css';
import { MainContentProps } from '../../types/mainContentProps';

const MainContent = ({ children }: MainContentProps) => {
  return <main className="main">{children}</main>;
};

export default MainContent;
