import Brush from "./Brush"

class Eraser extends Brush {
  draw(x, y) {
      this.ctx.strokeStyle = "white"
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
      this.ctx.lineWidth = 15
  }
}

export default Eraser