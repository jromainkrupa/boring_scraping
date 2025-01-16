import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["trigger", "content", "icon"]

  toggle(event) {
    const trigger = event.currentTarget
    const content = this.contentTargets[this.triggerTargets.indexOf(trigger)]
    const icon = this.iconTargets[this.triggerTargets.indexOf(trigger)]
    
    // Close all other accordions
    this.contentTargets.forEach((c, index) => {
      if (c !== content) {
        c.classList.add("hidden")
        this.triggerTargets[index].setAttribute("aria-expanded", "false")
        this.iconTargets[index].style.transform = "rotate(0deg)"
      }
    })

    // Toggle current accordion
    const isExpanded = trigger.getAttribute("aria-expanded") === "true"
    trigger.setAttribute("aria-expanded", !isExpanded)
    content.classList.toggle("hidden")
    icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)"
  }
} 