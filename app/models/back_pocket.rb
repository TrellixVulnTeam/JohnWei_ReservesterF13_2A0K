class BackPocket < ActiveRecord::Base
  attr_accessible :restaurant_id, :owner_id

  belongs_to :owner
  belongs_to :restaurant
  validates_uniqueness_of :restaurant_id, scope: :owner_id

  def self.pocketed?(owner, restaurant)
  	where( owner_id: owner.id, restaurant_id: restaurant.id).present?
  end
end
