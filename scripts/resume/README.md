# Currículo / Resume

Gerador dos PDFs em `public/`. Os PDFs **não** são editados à mão: eles saem daqui.

O Node 22 desta máquina está em `~/.local/node22` e não está no PATH, então:

```bash
export PATH="$HOME/.local/node22/bin:$PATH"
```

```bash
npm run resume         # gera os 4 PDFs em public/
npm run resume:check   # valida o que um ATS extrai deles
```

O `check.py` precisa de `pypdf` (`python3 -m pip install pypdf`).

## Arquivos gerados

| Arquivo | Idioma | Páginas | Uso |
| --- | --- | --- | --- |
| `bernardo-righi-curriculo.pdf` | pt | 1 | botão de download do site |
| `bernardo-righi-resume.pdf` | en | 1 | botão de download do site |
| `bernardo-righi-curriculo-completo.pdf` | pt | 2 | versão completa, sob demanda |
| `bernardo-righi-resume-full.pdf` | en | 2 | versão completa, sob demanda |

## Por que Chromium e não LaTeX

A versão anterior era pdfTeX + FontAwesome. Cada ícone caía na camada de texto
como glifo sem mapeamento, e o ATS lia coisas como `♂phone+55 (51) 99601-1501`
e `💼EXPERIENCIA PROFISSIONAL`. O Chromium embute `ToUnicode` correto nas fontes
que ele faz subset, então o texto extraído é igual ao texto da página.

## Regras que o conteúdo precisa manter

- nenhuma fonte de ícone, em lugar nenhum: rótulos escritos (`E-mail:`, `Telefone:`);
- campos de contato separados por `" | "` com espaço de verdade;
- habilidades separadas por vírgula, uma categoria por linha;
- URL do projeto nunca colada na stack;
- coluna única, sem tabelas, sem float, sem posicionamento absoluto;
- `hyphens: none` (palavra quebrada no fim da linha destrói o match de keyword);
- `letter-spacing: 0` (espaçamento por caractere faz o extrator inserir espaço dentro da palavra).

## Como mexer

- texto → `data.mjs` (é a única fonte de verdade das duas versões);
- layout → `template.mjs`;
- tamanho da fonte → não mexa: o `build.mjs` desce a escala de 100% até caber na
  contagem de páginas alvo, e falha se precisar passar de 85%. Se falhar, corte
  conteúdo em `data.mjs`.
