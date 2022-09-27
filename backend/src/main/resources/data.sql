INSERT INTO tb_user ( email, password) VALUES ('ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user ( email, password) VALUES ('bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_role (authority) VALUES ('ROLE_STUDENT');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_event(name, date, img_url) VALUES ('Roga DX', '2021-05-16', 'https://doity.com.br/media/doity/eventos/evento-172076-banner.jpeg');
INSERT INTO tb_event(name, date, img_url) VALUES ('Cesmac woman', '2021-05-16', 'https://cecs.anu.edu.au/sites/default/files/images/code-like-a-girl.jpg');
INSERT INTO tb_event(name, date, img_url) VALUES ('Mulheres tech', '2021-05-16', 'https://empreendedor.com.br/wp-content/uploads/2022/07/ARTE-OFICIAL_Elas-lideram-768x388.jpg');
INSERT INTO tb_event(name, date, img_url) VALUES ('W I T', '2021-05-16', 'https://csbc.ufsc.br/wp-content/uploads/2021/07/wit.jpeg');

INSERT INTO tb_news(name, description, url) VALUES ('ELA F@Z: Mulheres na Tecnologia 2022','Pelo terceiro ano consecutivo o time da Opice Blum Academy celebra o Dia Internacional da Mulher com sua já tradicional propagação de conteúdo, promovendo discussões de temas de suma relevância e que, na verdade, deveriam ser pauta diária da sociedade.', 'https://opiceblumacademy.com.br/evento/ela-fz-mulheres-na-tecnologia-2022/');
INSERT INTO tb_news(name, description, url) VALUES ('Termo Metro', 'O Mulher Tech Sim Senhor conta com o apoio de grandes empresas do setor de tecnologia como Google, Alura, Hostdime, Dock, MaxMilhas, Fretebrás, Todos Empreendimentos, dentre outras.','https://www.termometrodapolitica.com.br/2022/09/02/evento-de-tecnologia-promete-reunir-mais-de-300-mulheres-em-joao-pessoa/');
INSERT INTO tb_news(name, description, url) VALUES ('Maratona de programação para mulheres','Organizado por mulheres, a edição brasileira do “SheHacks” ocorre em outubro e chama mulheres universitárias cis e trans para propor formas de melhorar a acessibilidade tecnológica na sociedade; inscrições vão até este sábado ','https://jornal.usp.br/diversidade/maratona-de-programacao-para-mulheres-busca-solucoes-tecnologicas-para-acessibilidade/');
INSERT INTO tb_news(name, description, url) VALUES ('Women In Tech Latam Awards','Nove mulheres à frente de iniciativas transformadoras foram premiadas na tarde desta quinta-feira (1º/9) no Women In Tech Latam Awards, evento que reconhece a atuação de mulheres na área de tecnologia.','https://epocanegocios.globo.com/Tecnologia/noticia/2022/09/conheca-8-vencedoras-do-women-tech-latam-awards.html');
