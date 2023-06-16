### step-by-step para instalar o Git no seu computador:


### Comandos Básicos de Git
**Esses são alguns *(dos muitos)* comandos do Git:**

**`git init:`** Inicializa um repositório Git vazio ou reinicializa um repositório existente. Ele cria um novo diretório .git no diretório atual, onde o Git irá armazenar todos os metadados e o histórico de versões.

**`git clone <URL>:`** Cria uma cópia local de um repositório Git existente. Você precisa fornecer a URL do repositório remoto como argumento. Isso é útil quando você deseja obter uma cópia de um projeto já existente.

**`git add <arquivo>:`** Adiciona arquivos ao índice do Git para serem preparados para o próximo commit. Você pode especificar um arquivo específico ou usar git add . para adicionar todos os arquivos alterados no diretório atual.

**`git commit -m "<mensagem  do  commit>":`** Grava as alterações adicionadas ao índice como um novo commit no histórico de versões do Git. A mensagem do commit deve fornecer uma descrição breve e clara das alterações realizadas.

**`git status:`** Mostra o estado atual do seu repositório Git. Ele exibe informações sobre quais arquivos estão modificados, adicionados ou excluídos e se estão prontos para serem confirmados.

**`git push:`** Envia os commits locais para um repositório remoto. Isso é usado para compartilhar suas alterações com outros colaboradores ou para fazer backup do seu trabalho em um repositório remoto, como o GitHub ou o GitLab.

**`git pull:`** Atualiza o seu repositório local com as alterações mais recentes do repositório remoto. É uma combinação dos comandos git fetch e git merge, trazendo as alterações do repositório remoto e mesclando-as com o seu trabalho local.

**`git branch:`** Lista todas as branches (ramificações) presentes no repositório. A branch atual é marcada com um asterisco (*). Você também pode criar novas branches usando **`git branch <nome_da_branch>.`**

**`git checkout <nome_da_branch>:`** Altera a branch atual para a branch especificada. Isso permite que você trabalhe em diferentes ramificações do seu projeto.

**`git merge <nome_da_branch>:`** Mescla a branch especificada com a branch atual. Isso combina o histórico de commits de ambas as branches e cria um novo commit de mesclagem.
