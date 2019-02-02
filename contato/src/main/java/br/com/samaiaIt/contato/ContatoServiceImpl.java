package br.com.samaiaIt.contato;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContatoServiceImpl implements ContatoService {

    @Autowired
    private ContatoRepository repository;

    @Override
    public Contato create(Contato contato) {
        return repository.save(contato);
    }

    @Override
    public Contato delete(int id) {
        Contato contato = findById(id);
        if(contato != null){
        	contato.setStatus(false);
            repository.save(contato);
        }
        return contato;
    }

    @Override
    public List<Contato> findAll() {
        return repository.findAll();
    }

    @Override
    public Contato findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Contato update(Contato contato) {
        return repository.save(contato);
    }
}
