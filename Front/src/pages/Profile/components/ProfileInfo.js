// ProfileInfo.js
const ProfileInfo = ({ iconSrc, label, value, iconWidth, iconHeight }) => {
  return (
    <div className="section">
      <img className="icon" width={iconWidth} height={iconHeight} src={iconSrc} alt={label} />
      <div className="item">{label}</div>
      <div className="value" title={value}>{value}</div>
    </div>
  );
};

export default ProfileInfo;
