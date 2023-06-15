import { useState, useEffect, createContext } from 'react';

// Create Context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
   });

  //  Cursor BG State
  const [cursorBg, setCursorBg] = useState('default');

  const mobileViewportIsActive = window.innerWidth < 768;

   useEffect(() => {
    if(!mobileViewportIsActive){
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener('mousemove', move);
  
      // remove event
      return () => {
        window.removeEventListener('mousemove', move);
        };
    } else {
      setCursorBg('none');
      }
    });

    // cursor variants
    const cursorVariants = {
      default: {
        x: cursorPos.x - 25,
        y: cursorPos.y - 25,
        backgroundColor: '#0e1112',
      },
      text: {
        width: '100px',
        height: '100px',
        x: cursorPos.x - 50,
        y: cursorPos.y - 50,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
      },
      none: {
        width: 0,
        height: 0,
        backgroundColor: 'rgba(255,255,255,1)',
      }
    }

    // Mouse Enter Handler
    const mouseEnterHandler = () => {
      setCursorBg('text');
    }
    // Mouse Leave Handler
    const mouseLeaveHandler = () => {
      setCursorBg('default');
    }

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
