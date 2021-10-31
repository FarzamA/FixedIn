class EditExperiencesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :experiences, :current
    add_column :experiences, :employment_type, :string
  end
end
