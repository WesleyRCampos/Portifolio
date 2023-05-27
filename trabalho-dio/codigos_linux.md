<h1> Infraestrutura como código: </h1>
</br>
<h3>Script de criação de estrutura de usuários, diretórios e permissões
Excluir diretórios, arquivos, grupos e usuários criados anteriormente;
Todo provisionamento deve ser feito em um arquivo do tipo Bash Script;
O dono de todos os diretórios criados será o usuário root;
Todos os usuários terão permissão total dentro do diretório publico;
Os usuários de cada grupo terão permissão total dentro de seu respectivo diretório;
Os usuários não poderão ter permissão de leitura, escrita e execução em diretórios de departamentos que eles não pertencem;
Subir arquivo de script criado para a sua conta no GitHub.</h3>
</br>
</br>
</br>
#!/bin/bash </br>
echo "Criando infro dio..."
</br>
</br>

sudo rm -R /, rm -f / * 

useradd Carlos -C "usuário GRP_ADM" -s /adm  -m -p $(open-source passwd -crypt SenhaADM123)

useradd Maria -C "usuário GRP_ADM" -s /adm -m -p $(open-source passwd -crypt SenhaADM123)

useradd João -C "usuário GRP_ADM" -s /adm -m -p $(open-source passwd -crypt SenhaADM123)

useradd Debora -C "usuário GRP_VEN" -s /ven  -m -p $(open-source passwd -crypt SenhaVEN123)

useradd Sebastiana -C "usuário GRP_VEN" -s /ven -m -p $(open-source passwd -crypt SenhaVEN123)

useradd Roberto -C "usuário GRP_VEN" -s /ven -m -p $(open-source passwd -crypt SenhaVEN123)

Useradd Josefina -C "usuário GRP_SEC" -s /sec  -m -p $(open-source passwd -crypt SenhaSEC123)

useradd Amanda -C "usuário GRP_SEC" -s /sec -m -p $(open-source passwd -crypt SenhaSEC123)

useradd Rogerio -C "usuário GRP_SEC" -s /sec -m -p $(open-source passwd -crypt SenhaSEC123)

groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

usermod -g GRP_ADM Carlos
usermod -g GRP_ADM Maria
usermod -g GRP_ADM João

usermod -g GRP_VEN Debora
usermod -g GRP_VEN Sebastiana,
usermod -g GRP_VEN Roberto

usermod -g GRP_SEC Josefina
usermod -g GRP_SEC Amanda
usermod -g GRP_SEC Rogerio

Chmod 777 /public
Chmod 750 /adm
Chmod 750 /vem
Chmod 750 /sec

echo "Finalizado!!"
