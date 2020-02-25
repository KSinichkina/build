import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Spinner.scss';

const Spinner = ({
  color,
  trackColor,
  thickness,
  size,
  blockName,
  className,
  style,
  ...other
}) => {
  const finalClassName = cx(blockName, className);
  const finalSpinnerClassName = cx(`${blockName}__spinner`, {
    [`${className}__spinner`]: className,
  });
  const blockSize = { width: size, height: size };

  return (
    <div
      className={finalClassName}
      style={{
        ...blockSize,
        ...style,
      }}
      {...other}
    >
      <svg className={finalSpinnerClassName} style={blockSize}>
        <g>
          <rect
            fill="transparent"
            stroke={trackColor}
            strokeWidth={thickness}
            width={size - thickness}
            height={size - thickness}
            x={thickness / 2}
            y={thickness / 2}
            rx={size}
            ry={size}
          />
          <circle
            fill="transparent"
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="round"
            cx={`${size / 2}`}
            cy={`${size / 2}`}
            r={`${size / 2 - thickness / 2}`}
            strokeDasharray="100"
            pathLength="100"
          />
        </g>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  blockName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string,
  trackColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Spinner.defaultProps = {
  blockName: 'ch-spinner',
  thickness: 3.5,
  size: 40,
  color: '#3d84d1',
  trackColor: '#d6e5f5',
};

export default Spinner;
