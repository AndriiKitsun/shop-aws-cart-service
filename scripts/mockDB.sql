create type status as enum ('OPEN', 'ORDERED');

create table if not exists carts (
    id UUID PRIMARY KEY NOT NULL,
    user_id UUID NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT null,
    status status NOT NULL
)

create table if not exists cart_items (
    id UUID PRIMARY KEY NOT NULL,
    cart_id UUID REFERENCES carts(id),
    product_id UUID,
    quantity INTEGER
);

INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES
    ('a8069607-7724-4705-878a-42839e6c33f1', 'ab391de9-f6d1-42a6-a314-6a1b603fb1ac', '2023-12-04T11:22:30.210Z', '2023-12-04T12:22:30.210Z', 'ORDERED'),
    ('aa80c8c3-a154-4a51-972e-8d6ea7aafb68', 'bc965966-6ec1-42f6-886c-bb407addeb61', '2023-12-04T11:22:30.210Z', '2023-12-04T12:22:30.210Z', 'ORDERED'),
    ('e61171f4-dd23-454e-bfc1-64495680612d', 'ab391de9-f6d1-42a6-a314-6a1b603fb1ac', '2023-12-04T11:22:30.210Z', '2023-12-04T12:22:30.210Z', 'OPEN'),
    ('e74f06db-e2d5-4773-9df4-6c3856c390b0', 'bc965966-6ec1-42f6-886c-bb407addeb61', '2023-12-04T11:22:30.210Z', '2023-12-04T12:22:30.210Z', 'OPEN'),
    ('6ec76c62-b9cb-43da-9f20-430ab772aac5', '3974e0e0-ec5f-463d-90b5-01d2809fb687', '2023-12-04T11:22:30.210Z', '2023-12-04T12:22:30.210Z', 'ORDERED');

INSERT INTO cart_items (id, cart_id, product_id, quantity) VALUES
    ('97158202-d72d-4abe-91ec-0d8db0d9095d', 'a8069607-7724-4705-878a-42839e6c33f1', 'e4d10bf5-4c7a-4131-b0dc-21162ada51f1', 3),
    ('5b16ffc0-313f-4922-b41c-32e3653194da', 'aa80c8c3-a154-4a51-972e-8d6ea7aafb68', '665e3be7-69c5-4440-acb0-519e9a1e86a0', 4),
    ('c59e6a24-8154-45e9-be93-915a17e4d3c8', 'e61171f4-dd23-454e-bfc1-64495680612d', 'b90840f3-75d1-411c-af64-67d1c2c38307', 5),
    ('bfef2a79-f74f-46fc-a6a1-b951e5bab579', 'e74f06db-e2d5-4773-9df4-6c3856c390b0', 'd94cf999-961a-4892-bfa5-d44c5ae2b920', 6),
    ('e3836560-722b-42d8-b22a-878a65b05746', '6ec76c62-b9cb-43da-9f20-430ab772aac5', 'e4c15496-1a80-4edc-974e-218a806378fa', 1);

