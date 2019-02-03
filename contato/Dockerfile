FROM centos
RUN yum install -y java
LABEL mantedor=“thiago.salvadorpower@gmail.com”
VOLUME /tmp
ADD target/contato.jar contato.jar
RUN sh -c 'touch /contato.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/;/urandom","-jar","/contato.jar"]
EXPOSE 8080
