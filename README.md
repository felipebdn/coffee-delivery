<!-- PROJECT LOGO -->
<p align="center">

  <h1 align="center">Coffee Delivery</h1>

  ### Clique aqui pra abrir o site - <a href="https://coffee-delivery-three-psi.vercel.app/">Coffee Delivery</a>

</p>

## Sobre esse projeto:

| | | |
|---|---|---|
| ![Imagem 1](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/home.png?raw=true) | ![Imagem 2](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/coffees.png?raw=true) | ![Imagem 3](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/checkout.png?raw=true) |
| ![Imagem 4](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/completed-checkout.png?raw=true) | ![Imagem 5](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/form-checkout-error.png?raw=true) | ![Imagem 6](https://github.com/felipebdn/coffee-delivery/blob/master/public/images/success.png?raw=true) |


#### As funcionalidades comuns são:

- Escolher a quantidades de cada café.
- No header procurar pelo seu cep e aparecerá a cidade e o estado.
- Na pagina de checkout lista dos os cafés selecionados com suas respectivas quantidades.
- Mostra o valor total dos cafes junto com o frete (frete padrão independente da localização).
- Caso ja tenha preenchido o cep no header, o formulário de endereço preencherá parcialmente automaticamente.
- Validação de campos vazios no formulário de endereço e na forma de pagamento.
- Pagamento realizado pela API do <a href="https://stripe.com/">Stripe.</a>
- Pagina de finalização de compra mostrando os dados de entrega.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
