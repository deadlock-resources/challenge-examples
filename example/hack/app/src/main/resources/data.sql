insert into cat (id, name, url)
values
    (1, 'Tabby cat', 'img/tabby_cat.jpg'),
    (2, 'pierre', 'img/tabby_cat.jpg'),
    (3, 'paul', 'img/tabby_cat.jpg'),
    (4, 'jack', 'img/tabby_cat.jpg');

insert into comment (id, content, cat_id)
VALUES
    (1, 'Super cute !', 1),
    (2, 'Lovely !', 1),
    (3, 'Dirty !', 2);