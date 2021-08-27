USE basicRegistrationSystem;

CREATE TABLE `user_data`
(
    id         BIGINT       AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(255) ,
    name varchar(255),
    surname varchar(255),
    password  varchar(255)
)
    engine = innodb
    charset = utf8mb4;


