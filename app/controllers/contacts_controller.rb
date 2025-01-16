class ContactsController < ApplicationController
  invisible_captcha only: [:create], honeypot: :subtitle

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_path, notice: "🎉 Yeah! We'll get back to you soon."
    else
      redirect_to root_path, alert: "Something went wrong"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :company_name)
  end
end
