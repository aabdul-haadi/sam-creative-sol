import React from 'react';
import OptimizedPortfolio from './OptimizedPortfolio';

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ setCurrentPage }) => {
  return <OptimizedPortfolio setCurrentPage={setCurrentPage} />;
};

export default Portfolio;