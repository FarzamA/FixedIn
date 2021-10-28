class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false

      t.string :first_name, null: false

      t.string :last_name, null: false

      t.string :headline, null: false

      t.string :location, null: false 

      t.string :industry, null: false

      t.string :password_digest, null: false 

      t.string :session_token, null: false

      t.timestamps
    end

    # We want unique emails, session tokens for users and easy lookup
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    # For search bar purposes later
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :headline 
    add_index :users, :industry
  end
end
