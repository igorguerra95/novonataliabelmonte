# Natália Belmonte | Neuropsicologia & Psicologia Clínica

Landing page institucional de alto padrão para a psicóloga e neuropsicóloga **Natália Belmonte** (CRP 10/12139). Pós-graduanda em Neuropsicologia pelo **Instituto de Ensino e Pesquisa Albert Einstein - SP**.

---

## 🚀 Como Publicar no GitHub Pages (Sem Tela Branca)

A tela fica branca no GitHub Pages quando ele tenta carregar os arquivos de desenvolvimento em vez da build compilada. Para resolver isso de forma simples e definitiva, o projeto já inclui a pasta **/docs** e o workflow do **GitHub Actions**.

### 🌟 Opção 1: Publicação Rápida via pasta `/docs` (Recomendada - 1 Clique)

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment**:
   - **Source**: Mantenha **Deploy from a branch**.
   - **Branch**: Selecione `main` (ou `master`).
   - **Pasta**: Altere de `/ (root)` para **/docs**!
4. Clique em **Save** (Salvar).
5. Pronto! Em 1 minuto o site estará funcionando perfeitamente no link:  
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

---

### ⚙️ Opção 2: Publicação Automática via GitHub Actions

Se preferir usar automação do GitHub Actions:
1. No seu repositório no GitHub, vá em **Settings** ➔ **Pages**.
2. Em **Source**, selecione **GitHub Actions**.
3. Em **Settings** ➔ **Actions** ➔ **General**, desça até **Workflow permissions** e marque **Read and write permissions**.
4. O workflow configurado em `.github/workflows/deploy.yml` fará o build e deploy automaticamente a cada `git push`.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (incluso com o Node.js)

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar para produção (gera dist/ e docs/)
npm run build
```

---

## 📞 Informações da Profissional

- **Nome**: Natália Belmonte
- **Registro Profissional**: CRP 10/12139
- **Formação**: Pós-graduanda em Neuropsicologia pelo Instituto de Ensino e Pesquisa Albert Einstein - SP
- **Abordagem**: Psicoterapia de base psicanalítica para adultos e idosos
- **Consultório**: Tv. Rômulo Maiorana, nº 700 - Marco. Ed. Torre Vitta Office, sala 1506 (Belém - PA)
- **Atendimento**: Presencial e On-line para todo o Brasil
- **Telefone / WhatsApp**: (91) 98264-4888
