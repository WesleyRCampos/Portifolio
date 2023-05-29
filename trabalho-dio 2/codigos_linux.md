<h1> Infraestrutura como código: </h1>
</br>
<h3>Script de criação de estrutura de Criação de Servidor Web
Subir arquivo de script criado para a sua conta no GitHub.</h3>
</br>
</br>
</br>
#!/bin/bash </br>
echo "Atualizando servidor dio..."
</br>
</br>


apt-get upadate

apt-get upgrade -y

apt-get install apache2 -y

apt-get install unzip -y

cd/tmp

echo "Baixando e copiando os arquivos da aplicação dio..."
</br>
</br>

wgwt htpps://github.com/denilsbonconatti/linux-site-dio/archive/refs/heads/main.zip

unzipe main.zip

cd linux-site-dio
copy -r * /var/www/html/

echo "Finalizado!!"
