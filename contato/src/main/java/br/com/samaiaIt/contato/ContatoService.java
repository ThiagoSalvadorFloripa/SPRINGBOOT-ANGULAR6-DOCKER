package br.com.samaiaIt.contato;

import java.util.List;

public interface ContatoService {

    Contato create(Contato contato);

    Contato delete(int id);

    List<Contato> findAll();

    Contato findById(int id);

    Contato update(Contato contato);
}
