import { Fragment, useState } from 'react';
import "./style.css";

export const Device = ({
  value = 'desktop',
  onChange = () => { },
  style,
  className,
  position = "horizontal"
}) => {
  // const [show, setShow] = useState(false);
  const deviceValue = [
    {
      device: 'desktop',
      icon: 'dashicons-desktop',
    },
    { device: 'tablet', icon: 'dashicons-tablet' },
    { device: 'mobile', icon: 'dashicons-smartphone' },
  ];
  return (
    <Fragment>
      <div style={style} className={className}>
        {/* {!show && (
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
        )} */}
        {/* {show && ( */}
          <div style={{ display: position === "horizontal" ? "flex" : "grid",gap:"5px"}}>
            {deviceValue.map(({ device, icon }, i) => (
              <button
                key={i}
                onClick={() => {
                  // setShow(false);
                  onChange(device);
                }}
                className={`advancedOptionssingle-device ${device===value?"active":""}`}
              >
                <span className={`dashicons ${icon} ${device===value?"active":""} `}></span>
              </button>
            ))}
          </div>
        {/* )} */}
      </div>
    </Fragment>
  );
};
