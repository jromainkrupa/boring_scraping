# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  def initialize(variant: :neutral, size: :default, data: {}, **options)
    @variant = variant
    @size = size
    @data = data
    @options = options
  end

  private

  def classes
    [
      # Base classes
      "inline-flex items-center justify-center whitespace-nowrap rounded-md",
      "text-sm font-medium transition-all gap-2",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      
      # Variant specific classes
      variant_classes,

      # Size classes
      size_classes
    ].join(" ")
  end

  def variant_classes
    case @variant
    when :yellow
      "bg-yellow-400 text-black border-2 border-black " \
      "shadow-[2px_2px_0px_rgba(0,0,0,1)] " \
      "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    
    when :purple
      "bg-purple-500 text-white border-2 border-black " \
      "shadow-[2px_2px_0px_rgba(0,0,0,1)] " \
      "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    else # :neutral
      "bg-white text-black border-2 border-black " \
      "shadow-[2px_2px_0px_rgba(0,0,0,1)] " \
      "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    end
  end

  def size_classes
    case @size
    when :sm
      "h-9 px-3"
    when :lg
      "h-11 px-8 text-xl"
    when :icon
      "h-10 w-10"
    else # :default
      "h-10 px-4 py-2"
    end
  end
end
