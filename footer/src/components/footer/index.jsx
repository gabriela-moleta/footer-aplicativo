import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* Sobre */}
        <div className={style.about}>
          <h2 className={style.logo}>Clean.</h2>
          <p>
            O site Clean oferece produtos de skincare, maquiagem e cuidados com a pele...
          </p>
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

      <div className={style.bottom}>
        <p>© 2025 Clean. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
