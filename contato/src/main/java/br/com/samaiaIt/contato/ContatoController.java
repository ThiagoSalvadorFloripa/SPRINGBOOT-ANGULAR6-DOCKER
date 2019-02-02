package br.com.samaiaIt.contato;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/users"})
public class ContatoController {

    @Autowired
    private ContatoService contatoService;

    @PostMapping
    public Contato create(@RequestBody Contato contato){
        return contatoService.create(contato);
    }

    @GetMapping(path = {"/{id}"})
    public Contato findOne(@PathVariable("id") int id){
        return contatoService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Contato update(@PathVariable("id") int id, @RequestBody Contato contato){
        contato.setId(id);
        return contatoService.update(contato);
    }

    @DeleteMapping(path ={"/{id}"})
    public Contato delete(@PathVariable("id") int id) {
        return contatoService.delete(id);
    }

    @GetMapping
    public List<ContatoDTO> findAll(){
    	ContatoDTO contaoDTO = new ContatoDTO();
    	return contaoDTO.convert(contatoService.findAll());
    }
}
