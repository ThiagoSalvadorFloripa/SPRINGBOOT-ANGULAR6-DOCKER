package br.com.samaiaIt.contato;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class ContatoDTO {
  private int id;

  private String nome;

  private String email;

  private String data;
  
  private String status;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getNome() {
	return nome;
}

public void setNome(String nome) {
	this.nome = nome;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getData() {
	return data;
}

public void setData(String data) {
	this.data = data;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}


public List<ContatoDTO> convert(List<Contato> contatoList){
	
	List<ContatoDTO> resultado = new ArrayList<ContatoDTO>();
	
	for(int i =0;  i<contatoList.size(); i++) {
		ContatoDTO convet = new ContatoDTO();
		convet.setId(contatoList.get(i).getId());
		convet.setNome(contatoList.get(i).getNome());
		convet.setEmail(contatoList.get(i).getEmail());
		if(contatoList.get(i).getStatus()) {
			convet.setStatus("Ativo");
		}else {
			convet.setStatus("Desativo");
		}
		convet.setData(this.convertStringToDate(contatoList.get(i).getDataCadastro()));
		resultado.add(convet);	
	}
	return resultado;
}

public String convertStringToDate(java.util.Date date) {
   String dateString = "ksjdfk";
   SimpleDateFormat sdfr = new SimpleDateFormat("dd/MMM/yyyy");
   try{
	dateString = sdfr.format( date );
   }catch (Exception ex ){
	System.out.println(ex);
   }
   return dateString;
	}
}
