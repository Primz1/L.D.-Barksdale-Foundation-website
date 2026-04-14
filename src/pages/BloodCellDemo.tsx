import React from 'react';
import { BloodCellCursor } from '../components/BloodCellCursor';
import '../styles/BloodCellDemo.css';

export const BloodCellDemo: React.FC = () => {
  return (
    <div className="blood-cell-demo">
      <BloodCellCursor />
      
      <div className="demo-content">
        <h1>Blood Cell Cursor Effect</h1>
        <p>Move your mouse around to see the interactive blood cell cursor with morphing trail</p>
        
        <div className="interactive-elements">
          <button className="demo-button">Hover Me</button>
          <div className="demo-card">
            <h3>Interactive Card</h3>
            <p>This is a demo card to test cursor interaction</p>
          </div>
        </div>

        <div className="info-section">
          <h2>Features</h2>
          <ul>
            <li>✓ Realistic blood cell shaped cursor</li>
            <li>✓ Morphing trail effect with 18 dots</li>
            <li>✓ Smooth Goo filter for organic feel</li>
            <li>✓ Idle animation mode</li>
            <li>✓ Gradient color transition</li>
            <li>✓ Mobile/Touch support</li>
            <li>✓ High performance SVG rendering</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
