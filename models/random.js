module.exports.rand = () => {
  let number = Math.floor((Math.random() * 9)+1);
  let color = ["red", "green", "pink", "yellow","brown", "blue", "cyan", "orange", "grey"];
  let random = {
    number: number,
    color: color[Math.floor((Math.random() * 9)+1)-1]
  }
  return random
}
