import { Fragment, useState } from 'react';
import "./style.css";

export const Device = ({
  value = 'desktop',
  onChange = () => { },
  style,
  className,
  position = "horizontal"
}) => {
  const [show, setShow] = useState(false);
  const deviceValue = [
    {
      value: 'desktop',
      icon: 'dashicons-desktop',
    },
    { value: 'tablet', icon: 'dashicons-tablet' },
    { value: 'mobile', icon: 'dashicons-smartphone' },
  ];
  return (
    <Fragment>
      <div style={style} className={className}>
        {!show && (
          <div style={{ display: 'flex' }}>
            <button onClick={() => setShow(true)} className="single-device">
              <span
                className={`dashicons dashicons-${value === 'desktop'
                  ? 'desktop'
                  : value === 'tablet'
                    ? 'tablet'
                    : 'smartphone'
                  }`}
              ></span>
            </button>
          </div>
        )}
        {show && (
          <div style={{ display: position === "horizontal" ? "flex" : "grid" }}>
            {deviceValue.map(({ value, icon }, i) => (
              <button
                key={i}
                onClick={() => {
                  setShow(false);
                  onChange(value);
                }}
                className="single-device"
              >
                <span className={`dashicons ${icon}`}></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};
