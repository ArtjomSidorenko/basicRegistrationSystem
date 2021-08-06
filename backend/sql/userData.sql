USE basicRegistrationSystem;

CREATE TABLE `user_data`
(
    id         BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(255) NOT NULL,
    name varchar(255) not null,
    surname varchar(255) not null,
    password  varchar(255) not null ,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
)
    engine = innodb
    charset = utf8mb4;



