package br.com.samaiaIt.contato;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface ContatoRepository extends Repository<Contato, Integer> {

    void delete(Contato contato);

    List<Contato> findAll();

    Contato findOne(int id);

    Contato save(Contato contato);
}
