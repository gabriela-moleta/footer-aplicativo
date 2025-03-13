import style from "./footer.module.css";


const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* Sobre */}
        <div className={style.about}>
          <h2 className={style.logo}>Clean.</h2>
          <p className={style.description}>
          O site Clean oferece produtos de skincare, maquiagem e cuidados com a pele, com um design minimalista e fácil de <br></br> navegar. Além disso, possui um blog com dicas de beleza, cuidados diários e resenhas de produtos. Ideal para quem busca <br></br>qualidade e informações sobre bem-estar.

          </p>
        </div>
       
    


       

        {/* Newsletter */}
        <div className={style.newsletter}>
          <h3>Newsletter</h3>
          <p>Receba nossas novidades!</p>
          <div className={style.inputGroup}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
          </div>
          <button className={style.button}>ASSINAR</button>
        </div>
      </div>

     {/* Links Relevantes */}
     <div className={style.links}>
          <h3>Relevantes</h3>
          <ul>
            <li><a href="#">Produtos de Skincare</a></li>
            <li><a href="#">Produtos de Maquiagem</a></li>
            <li><a href="#">Produtos de Corpo</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
