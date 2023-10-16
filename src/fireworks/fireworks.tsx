import "./fireworks.css";

const Fireworks = () => {
  const items = [];
  const count: number = process.env.REACT_APP_FIREWORK_COUNT
    ? +process.env.REACT_APP_FIREWORK_COUNT
    : 10;

  for (let i = 0; i < count; i++) {
    items.push(<div key={i} className="firework"></div>);
  }
  return <div>{items}</div>;
};

export default Fireworks;
