
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface AnimatedSendButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const AnimatedSendButton: React.FC<AnimatedSendButtonProps> = ({ onClick, disabled }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (disabled || isAnimating) return;
    
    setIsAnimating(true);
    onClick();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isAnimating}
      className={`send-button relative w-full h-12 rounded-lg overflow-hidden transition-all duration-300 ${
        isAnimating ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div className={`send-content flex items-center justify-center gap-2 text-white transition-all duration-500 ${
        isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
      }`}>
        <Send className="h-4 w-4" />
        <span>Send Message</span>
      </div>
      
      <div className={`sent-content absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ${
        isAnimating ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
      }`}>
        <svg
          className="paper-plane w-6 h-6 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`plane-path ${isAnimating ? 'animate-plane-fly' : ''}`}
          />
        </svg>
        <span>Sent!</span>
      </div>
      
      {isAnimating && (
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
      )}
    </button>
  );
};

export default AnimatedSendButton;
