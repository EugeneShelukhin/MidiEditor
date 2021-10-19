function SixteenthTail(props) {
  let { x, y } = props;
  return (
    <path
      d={`M ${x},${y}  
        C ${x},${y} ${x + 1},${y} ${x + 5},${y + 4} 
        C ${x + 9},${y + 8} ${x + 11},${y + 12} ${x + 11},${y + 16} 
        C ${x + 11}, ${y + 20} ${x + 9},${y + 28} ${x + 7},${y + 28} 
  
        C ${x + 8},${y + 25} ${x + 9},${y + 22} ${x + 9},${y + 19} 
        C ${x + 9},${y + 18} ${x + 9},${y + 14} ${x + 6},${y + 10} 
        C ${x + 4},${y + 7} ${x + 1},${y + 6} ${x},${y + 6} z`}
    />
  );
}

export default SixteenthTail;
