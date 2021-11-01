class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.integer :user_id, null: false

      t.string :school, null: false 

      t.string :degree

      t.string :field

      t.date :start_date

      t.date :end_date

      t.float :gpa 

      t.text :activities 

      t.text :description

      t.timestamps
    end

    add_index :educations, :user_id
  end
end
