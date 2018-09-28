-- Criando a tabela `carros`

CREATE TABLE carros (
  `id` int(11) NOT NULL,
  `marca` varchar(15) NOT NULL,
  `modelo` varchar(15) NOT NULL,
  `ano` int(4) NOT NULL
) ENGINE=InnoDB;

-- Indexes na tabela `carros`

ALTER TABLE carros ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT na tabela `carros`

ALTER TABLE `carros` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;

-- Inserindo dados de exemplo

INSERT INTO `carros` (`marca`, `modelo`, `ano`) VALUES
('Fiat', 'Idea', 2016),
('marca3 alterado', 'modelo3', 2018),
('Ford', 'EcoSport', 2019);
