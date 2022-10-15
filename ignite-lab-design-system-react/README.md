# Ignite lab - Design System React Login

Vite + Tailwind + Storybook

```console
yarn create vite
```

Postcss, le arquivos e deixa disponivel para o tailwind. Vite tem integração com postcss

Autoprefixer arruma webkit, moss...

Instalar extensões tailwind e postcss

```console
yarn add -D tailwindcss postcss autoprefixer
```

Inicializar tailwind

```console
npx tailwindcss init -p
```

Configurar storybook

* Adicionar flag --use-npm caso não seja yarn

Adicionar extensão MDX

```console
 npx sb init --builder @storybook/builder-vite 
```

Para rodar o storybook

```console
yarn storybook
```

Criar arquivo .storybook/manager para trocar tema. Editar preview.cjs

Integrado ao tailwind, clsx é um utilitário para ajudar a criar classNames

```console
yarn add clsx
```

Slot do radix ui ajuda a trocar tags, ex: span para p

```console
yarn add @radix-ui/react-slot  
```

Para ícone no text input

```console
yarn add phosphor-react
```

Para o checkbox

```console
yarn add @radix-ui/react-checkbox
```

Build storybook

```console
yarn build-storybook
```

Add-on para o storybook de acessibilidade

a11y, traz informações de acessibilidade em uma aba no storybook


Converte svg em componente react

https://transform.tools/

Para adicionar testes com storybook

```console
yarn add -D @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner
```


```console
yarn add axios
```


MSW - mock backend

```console
yarn add msw msw-storybook-addon -D

npx msw init public/
```



```console

```



```console

```



```console

```



```console

```