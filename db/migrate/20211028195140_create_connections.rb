class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :connector_id, null: false 

      t.integer :connectee_id, null: false 

      t.boolean :accepted, null: false, defaut: false 

      t.timestamps
    end

    add_index :connections, [:connector_id, :connectee_id], unique: true
  end
end
