# frozen_string_literal: true

class AccordionComponent < ViewComponent::Base
  include ApplicationHelper
  renders_many :items, "AccordionItemComponent"

  class AccordionItemComponent < ViewComponent::Base
    attr_reader :title

    def initialize(title:)
      @title = title
    end

    def trigger_id
      @trigger_id ||= "accordion-trigger-#{SecureRandom.hex(4)}"
    end

    def content_id
      @content_id ||= "accordion-content-#{SecureRandom.hex(4)}"
    end
  end
end
