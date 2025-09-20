import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = ({ show, onClick }) => (
  show ? (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-40"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  ) : null
);

export default ScrollToTopButton;
