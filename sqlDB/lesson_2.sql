use sergey;

create table cities(
                       id int primary key auto_increment,
                       city varchar(25) not null
)
drop table users;
drop table cities;

/*create table users (
    id int primary key auto_increment,
    name varchar(20) not null,
    age int not null,
    city_id int null,
    foreign key (city_id) references cities(id)
)*/


select * from users join cities on cities.id = users.city_id;
select users.id, name, age, city from users join cities on cities.id = users.city_id;

select * from cities c join users u on c.id = u.city_id;
select * from cities c left join users u on c.id = u.city_id;
select * from cities c right join users u on c.id = u.city_id;

select users.* from users join cities c on c.id = users.city_id where  city = "Lviv";

select distinct name from users;
select sum(users.age) from users
union
select max(users.age) from users;

select age from users where gender = 'female';
select * from cars where price in (select age from users where gender = 'male');

