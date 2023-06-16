import "./Bar.css";

function Bar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="bar-inner">
        <div className="bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="bar-label">{props.label}</div>
    </div>
  );
}

export default Bar;
