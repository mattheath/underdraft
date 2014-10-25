class PositionsController < ApplicationController
  def show
    @projecting_overdraft = true
    @amount = "£479"
    @repay_amount = "£479.85"
    @fee_in_p = "85"
  end

  def success

  end
end
