class EditExperiences < ActiveRecord::Migration[5.2]
  def change
    change_column_null :experiences, :start_date, true
  end
end
