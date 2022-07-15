import Avatar from '../img/angela.jpeg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <p>Redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">Download</a>
    </aside>
  );
};

export default Sidebar;