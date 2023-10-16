const Counter = ({ count, label }: Props) => {
  const addZero = (count: number) => {
    let text = count.toString();
    if (text.length === 1) {
      text = "0" + text;
    }
    return text;
  };

  return (
    <div className="Counter">
      <div className="count">{addZero(count)}</div>
      <div className="label">{label}</div>
    </div>
  );
};

interface Props {
  count: number;
  label: string;
}

export default Counter;
