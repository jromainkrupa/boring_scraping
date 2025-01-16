class HomePageCtaComponent < ViewComponent::Base
  include ApplicationHelper
  def initialize(variant: nil, size: :lg, with_modal: false, wrapper_class: "mt-12 flex items-center justify-center")
    @variant = variant
    @size = size
    @with_modal = with_modal
    @wrapper_class = wrapper_class
  end

  private

  attr_reader :variant, :size, :with_modal, :wrapper_class
end 