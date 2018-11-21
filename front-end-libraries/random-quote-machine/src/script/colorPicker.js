export default function rnmColor() {
  const colorList = [
    '#CCCC00', '#FFCC33', '#FF9900', '#FF6600', '#FF6633', '#FF0033',
    '#990033', '#993366', '#660033', '#CC0099', '#CC3399',
    '#CC99CC', '#9999FF', '#333399', '#3366FF', '#0066CC', '#0099CC', '#99CCCC',
    '#339999', '#CCCC99', '#33CC33', '#666666',
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}
