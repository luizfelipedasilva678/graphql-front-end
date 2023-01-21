import './index.css';

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <main className="main">{children}</main>;
};

export default MainContent;
