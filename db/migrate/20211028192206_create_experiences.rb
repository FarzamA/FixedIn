class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.integer :user_id, null: false 

      t.string :title, null: false 
      
      t.string :company, null: false 

      t.string :location

      t.boolean :current, null: false

      t.date :start_date, null: false 

      t.date :end_date

      t.string :industry

      t.text :description

      t.timestamps
    end
  end
end
