use sergey;
show tables;

select * from cars;
select * from users;

drop table users;

create table users(
                      id int auto_increment primary key,
                      name varchar(20) not null,
                      age int not null
);

insert into users value (null, 'Max', 18);

select * from users;

select id, gender from users;

select * from users where name = 'oleg';
select * from users where age = 30 and gender = 'male';

select * from users where age = 30 or gender = 'male';

select * from users where name like 'o%';
select * from users where name like '%o%';
select * from users where name like '__e%';

select * from users where age !=3;
select * from users where age between 20 and 30;
select * from users where age not between 20 and 30;
select * from users where age < 30;


select * from users where age like 'o%';

select * from users where age in(12,22,45,10,20);

select * from users where length(name) > 4;

select * from users order by age;

select * from users order by  age desc;

select * from users where age > 20 order by age desc;
select * from users where age > 20 order by age desc limit 3;
select * from users where age > 20 order by age desc limit 3 offset 3;

select min(age) from users;

select min(age) as minAge from users;
select max(age) as maxAge from users;
select sum(age) as sumAge from users;
select avg(age) as avgAge from users;

select min(age) as minAge from users group by gender;
select min(age) as minAge, gender from users group by gender;

select min(age) as minAge, avg(age) as avgAge, gender from users group by gender;

select count(*) as count, gender from users group by gender;

select count(*) as modelCount, model from cars where year > 2020 group by model order by modelCount desc;

select count(*) as modelCount, model from cars where year > 2020 group by model having modelCount >= 2 order by modelCount desc;

delete from users where id=9;

update users set gender ='male' where name='lina';