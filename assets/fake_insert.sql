INSERT INTO usuario (nome, telefone, email, senha) VALUES
  ('João', '555-1234', 'joao@email.com', 'senha123'),
  ('Maria', '555-5678', 'maria@email.com', 'senha456'),
  ('Pedro', '555-2468', 'pedro@email.com', 'senha789');
  
INSERT INTO carrinho (idUsuario, total) VALUES
  (1, 50.00),
  (2, 75.00),
  (3, 30.00);
  
INSERT INTO pedido (codigo, isDelivery, horarioEntrega, previsaoMinEntrega, previsaoMaxEntrega, tpParagamento, stPedido, idUsuario) VALUES
  ('P123', TRUE, '2023-02-18 15:00:00', 30, 45, 'Cartão de Crédito', 'Em Preparação', 1),
  ('P456', FALSE, NULL, 60, 75, 'Dinheiro', 'Aguardando Pagamento', 2),
  ('P789', TRUE, '2023-02-18 20:00:00', 45, 60, 'Cartão de Débito', 'Enviado', 3);
  
INSERT INTO comercio (nomeComercio, cnpj, cpf, endereco, metodosPagamento) VALUES
  ('Mercado Central', '12345678000190', NULL, 'Rua Central, 123', 'Cartão de Crédito, Cartão de Débito, Dinheiro'),
  ('Padaria do João', '98765432000121', NULL, 'Avenida do Pão, 456', 'Cartão de Crédito, Dinheiro'),
  ('Restaurante do Carlos', '01234567000180', NULL, 'Praça da Comida, 789', 'Cartão de Crédito, Cartão de Débito, Vale Refeição');
  
INSERT INTO produto (codigo, nome, estoque, preco, unidadeMedida, idComercio) VALUES
  ('001', 'Arroz', 500.0, 15.0, 'kg', 1),
  ('002', 'Feijão', 300.0, 8.0, 'kg',1),
  ('003', 'Óleo de Soja', 200.0, 4.5, 'litro', 2),
  ('004', 'Leite Integral', 100.0, 3.5, 'litro', 2),
  ('005', 'Macarrão Espaguete', 250.0, 4.0, 'kg', 3);
  
INSERT INTO itemCompra (quantidade, valorTotal, observacoes, idCarrinho, idPedido) VALUES
  (2, 30.0, 'sem açúcar', 1, 1),
  (1, 8.0, 'marca X', 2, 2),
  (3, 10.5, 'embalagem menor', 1, 3),
  (4, 22.0, 'promoção da semana', 3, 2),
  (2, 15.0, NULL, 2, 1);
