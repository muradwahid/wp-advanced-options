import './panelAlign.css';

export const PanelAlign = (props) => {
  const {
    label,
    icons,
    onChange = () => { },
    value,
    style,
    labelPosition = 'left',
    className
  } = props;
  const labelAlign = labelPosition == 'left' || labelPosition == 'right';
  return (
    <div style={style} className={className}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: `${labelAlign ? 'center' : 'normal'}`,
          flexDirection: `${labelPosition === 'left'
            ? 'row'
            : labelPosition == 'right'
              ? 'row-reverse'
              : labelPosition === 'top'
                ? 'column'
                : 'column-reverse'
            }`,
        }}
      >
        <p
          style={{
            margin: `${labelAlign ? '0' : '8px 0'}`,
            fontSize: '14px',
            fontWeight: 400,

          }}
        >
          {label}
        </p>
        <div
          style={{
            display: 'flex',
            border: '1px solid #ccc',
          }}
        >
          {icons &&
            icons.map((icon, i) => (
              <div
                key={i}
                onClick={() => onChange(icon.label.toLowerCase())}
                className={`single-icon-admin-panel panelAlign ${value === icon.label.toLowerCase() ? 'isActive' : ''
                  }`}
              >
                {icon.value}
                <div className="icon-picker-tooltip-container">
                  <div
                    style={{ padding: '2px 6px' }}
                    className="icon-picker-tooltip"
                  >
                    <span>{icon.label}</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

