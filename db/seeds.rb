# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Post.destroy_all 
Comment.destroy_all 
Like.destroy_all 
Experience.destroy_all
Education.destroy_all 
Connection.destroy_all 

demo_user = User.create(
    email: 'farzam@mazraf.com',
    first_name: 'Farzam',
    last_name: 'Ahmad',
    headline: 'Aspiring Game Developer/Software Engineer',
    password: 'password',
    location: "Syracuse, New York",
    industry: "FixedIn"
)


user1_name = Faker::Name.name.split(' ')
user1 = User.create(
    email: 'user1@user1.com',
    first_name: user1_name[0],
    last_name: user1_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user2_name = Faker::Name.name.split(' ')
user2 = User.create(
    email: 'user2@user2.com',
    first_name: user2_name[0],
    last_name: user2_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user3_name = Faker::Name.name.split(' ')
user3 = User.create(
    email: 'user32@user3.com',
    first_name: user3_name[0],
    last_name: user3_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user4_name = Faker::Name.name.split(' ')
user4 = User.create(
    email: 'user2@user2.com',
    first_name: user4_name[0],
    last_name: user4_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user5_name = Faker::Name.name.split(' ')
user5 = User.create(
    email: 'user5@user5.com',
    first_name: user5_name[0],
    last_name: user5_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user6_name = Faker::Name.name.split(' ')
user6 = User.create(
    email: 'user2@user2.com',
    first_name: user6_name[0],
    last_name: user6_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user7_name = Faker::Name.name.split(' ')
user7 = User.create(
    email: 'user2@user2.com',
    first_name: user7_name[0],
    last_name: user7_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user8_name = Faker::Name.name.split(' ')
user8 = User.create(
    email: 'user8@user8.com',
    first_name: user8_name[0],
    last_name: user8_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user9_name = Faker::Name.name.split(' ')
user9 = User.create(
    email: 'user2@user2.com',
    first_name: user9_name[0],
    last_name: user9_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user10_name = Faker::Name.name.split(' ')
user10 = User.create(
    email: 'user10@user10.com',
    first_name: user10_name[0],
    last_name: user10_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user11_name = Faker::Name.name.split(' ')
user11 = User.create(
    email: 'user11@user11.com',
    first_name: user11_name[0],
    last_name: user11_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user12_name = Faker::Name.name.split(' ')
user12 = User.create(
    email: 'user12@user12.com',
    first_name: user12_name[0],
    last_name: user12_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user13_name = Faker::Name.name.split(' ')
user13 = User.create(
    email: 'user13@user13.com',
    first_name: user13_name[0],
    last_name: user13_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user14_name = Faker::Name.name.split(' ')
user14 = User.create(
    email: 'user14@user14.com',
    first_name: user14_name[0],
    last_name: user14_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user15_name = Faker::Name.name.split(' ')
user15 = User.create(
    email: 'user15@user15.com',
    first_name: user15_name[0],
    last_name: user15_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user16_name = Faker::Name.name.split(' ')
user16 = User.create(
    email: 'user16@user16.com',
    first_name: user16_name[0],
    last_name: user16_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user17_name = Faker::Name.name.split(' ')
user17 = User.create(
    email: 'user17@user17.com',
    first_name: user17_name[0],
    last_name: user17_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user18_name = Faker::Name.name.split(' ')
user18 = User.create(
    email: 'user18@user18.com',
    first_name: user18_name[0],
    last_name: user18_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user19_name = Faker::Name.name.split(' ')
user19 = User.create(
    email: 'user19@user19.com',
    first_name: user19_name[0],
    last_name: user19_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

user20_name = Faker::Name.name.split(' ')
user20 = User.create(
    email: 'user20@user20.com',
    first_name: user20_name[0],
    last_name: user20_name[1],
    headline: Faker::Job.position,
    password: 'password',
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    industry: "#{Faker::Job.field}"
)

Experience.create(
    user_id: demo_user.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: demo_user.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: demo_user.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user1.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user1.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user1.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user2.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user2.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user2.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user3.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user3.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user3.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user4.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user4.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user4.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user5.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user5.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user5.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user6.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user6.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user6.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user7.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user7.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user7.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user8.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user8.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user8.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user9.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user9.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user9.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user10.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user10.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user10.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user11.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user11.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user11.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user12.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user12.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user12.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user13.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user13.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user13.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user14.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user14.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user14.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user15.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user15.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user15.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user16.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user16.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user16.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user17.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user17.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user17.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user18.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user18.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user18.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)
Experience.create(
    user_id: user19.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user19.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user19.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

Experience.create(
    user_id: user20.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: true,
    start_date: Faker::Date.between(from: '2019-09-23', to: '2021-09-25')
)

Experience.create(
    user_id: user20.id,
    title: Faker::Job.title,
    company: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state}",
    current: false,
    start_date: Faker::Date.between(from: '2017-09-23', to: '2019-09-20'),
    end_date: '2019-09-22'
)

Education.create(
    user_id: user20.id,
    school: Faker::Educator.university,
    degree: Faker::Educator.degree,
    start_date: Faker::Date.in_date_period(year: 2012, month: 8),
    end_date: Faker::Date.in_date_period(year: 2016, month: 5),
    field: Faker::Educator.subject,
    gpa: Faker::Number.between(from: 0.0, to: 4.0).round(1)
)

post1 = Post.create(
    body: Faker::Quote.matz,
    user_id: demo_user.id,
    like_count: 3
)

post2 = Post.create(
    body: Faker::Quote.matz,
    user_id: demo_user.id,
    like_count: 1
)

post3 = Post.create(
    body: Faker::Quote.matz,
    user_id: user1.id,
    like_count: 1
)

post4 = Post.create(
    body: Faker::Quote.matz,
    user_id: user2.id,
    like_count: 2
)

post5 = Post.create(
    body: Faker::Quote.matz,
    user_id: user3.id,
    like_count: 1
)

post6 = Post.create(
    body: Faker::Quote.matz,
    user_id: user4.id,
    like_count: 0
)

post7 = Post.create(
    body: Faker::Quote.matz,
    user_id: user5.id,
    like_count: 1
)

post8 = Post.create(
    body: Faker::Quote.matz,
    user_id: user6.id,
    like_count: 1
)

post9 = Post.create(
    body: Faker::Quote.matz,
    user_id: user7.id,
    like_count: 4
)

post10 = Post.create(
    body: Faker::Quote.matz,
    user_id: user8.id,
    like_count: 1
)

post11 = Post.create(
    body: Faker::Quote.matz,
    user_id: user9.id,
    like_count: 2
)

post12 = Post.create(
    body: Faker::Quote.matz,
    user_id: user10.id,
    like_count: 2
)

comment1 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user1.id,
    post_id: post1.id,
    like_count: 0
)

comment2 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user1.id,
    post_id: post2.id,
    like_count: 0
)

comment3 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user1.id,
    post_id: post3.id,
    like_count: 1
)

comment4 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: demo_user.id,
    post_id: post4.id,
    like_count: 1
)

comment5 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user2.id,
    post_id: post1.id,
    like_count: 0
)

comment6 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user3.id,
    post_id: post5.id,
    like_count: 2
)

comment7 = Comment.create(
    body: Faker::Quote.famous_last_words,
    user_id: user4.id,
    post_id: post7.id,
    like_count: 1
)

like1 = Like.create(
    user_id: demo_user.id,
    likeable_type: "Post",
    likeable_id: post1.id
)

like2 = Like.create(
    user_id: user1.id,
    likeable_type: "Post",
    likeable_id: post1.id
)

like3 = Like.create(
    user_id: user2.id,
    likeable_type: "Post",
    likeable_id: post1.id
)

like4 = Like.create(
    user_id: demo_user.id,
    likeable_type: "Post",
    likeable_id: post2.id
)

like5 = Like.create(
    user_id: user1.id,
    likeable_type: "Post",
    likeable_id: post3.id
)

like6 = Like.create(
    user_id: user2.id,
    likeable_type: "Post",
    likeable_id: post4.id
)

like7 = Like.create(
    user_id: user1.id,
    likeable_type: "Post",
    likeable_id: post4.id
)

like8 = Like.create(
    user_id: user3.id,
    likeable_type: "Post",
    likeable_id: post5.id
)

like9 = Like.create(
    user_id: user5.id,
    likeable_type: "Post",
    likeable_id: post7.id
)

like10 = Like.create(
    user_id: user6.id,
    likeable_type: "Post",
    likeable_id: post8.id
)

like11 = Like.create(
    user_id: user7.id,
    likeable_type: "Post",
    likeable_id: post9.id
)

like12 = Like.create(
    user_id: user1.id,
    likeable_type: "Post",
    likeable_id: post9.id
)

like13 = Like.create(
    user_id: user8.id,
    likeable_type: "Post",
    likeable_id: post9.id
)

like14 = Like.create(
    user_id: user9.id,
    likeable_type: "Post",
    likeable_id: post9.id
)

like15 = Like.create(
    user_id: user8.id,
    likeable_type: "Post",
    likeable_id: post10.id
)

like16 = Like.create(
    user_id: user9.id,
    likeable_type: "Post",
    likeable_id: post11.id
)

like17 = Like.create(
    user_id: user10.id,
    likeable_type: "Post",
    likeable_id: post11.id
)

like18 = Like.create(
    user_id: user10.id,
    likeable_type: "Post",
    likeable_id: post12.id
)

like19 = Like.create(
    user_id: user11.id,
    likeable_type: "Post",
    likeable_id: post12.id
)

like20 = Like.create(
    user_id: user1.id,
    likeable_type: "Comment",
    likeable_id: comment3.id
)

like21 = Like.create(
    user_id: user8.id,
    likeable_type: "Comment",
    likeable_id: comment4.id
)

like22 = Like.create(
    user_id: user3.id,
    likeable_type: "Comment",
    likeable_id: comment6.id
)

like23 = Like.create(
    user_id: user7.id,
    likeable_type: "Comment",
    likeable_id: comment6.id
)

like24 = Like.create(
    user_id: user4.id,
    likeable_type: "Comment",
    likeable_id: comment7.id
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user1.id,
    accepted: true
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user2.id,
    accepted: true
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user3.id,
    accepted: false
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user4.id,
    accepted: true
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user5.id,
    accepted: false
)

Connection.create(
    connector_id: demo_user.id,
    connectee_id: user6.id,
    accepted: true
)

Connection.create(
    connector_id: user7.id,
    connectee_id: user8.id,
    accepted: true
)

Connection.create(
    connector_id: user7.id,
    connectee_id: user3.id,
    accepted: true
)

Connection.create(
    connector_id: user7.id,
    connectee_id: user6.id,
    accepted: true
)

Connection.create(
    connector_id: user7.id,
    connectee_id: user10.id,
    accepted: false
)

Connection.create(
    connector_id: user12.id,
    connectee_id: user1.id,
    accepted: false
)

Connection.create(
    connector_id: user12.id,
    connectee_id: user11.id,
    accepted: true
)