--Bd_SamaiaIt
--Estrutura tabela contato.

CREATE TABLE IF NOT EXISTS `contato` (
`id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dataCadastro` date NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

ALTER TABLE `contato`
 ADD PRIMARY KEY (`id`);

ALTER TABLE `contato`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
