import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "ant" ]

  connect() {
    this.mouseX = 0
    this.mouseY = 0
    this.antRotation = 0
    document.addEventListener("mousemove", this.updateMousePosition.bind(this))
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this))
  }

  disconnect() {
    document.removeEventListener("mousemove", this.updateMousePosition.bind(this))
    cancelAnimationFrame(this.animationFrameId)
  }

  updateMousePosition(event) {
    const rect = this.antTarget.getBoundingClientRect()
    const antCenterX = rect.left + rect.width / 2
    const antCenterY = rect.top + rect.height / 2
    
    const deltaX = event.clientX - antCenterX
    const deltaY = event.clientY - antCenterY
    this.targetRotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90
  }

  animate() {
    if (this.targetRotation !== undefined) {
      const rotationDiff = this.targetRotation - this.antRotation
      this.antRotation += rotationDiff * 0.1
      this.antTarget.style.transform = `rotate(${this.antRotation}deg)`
    }
    
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this))
  }
}
