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

# post1 = Post.create(
#     body: Faker::Quote.matz,
#     user_id: demo_user.id,
#     like_count: 3
# )