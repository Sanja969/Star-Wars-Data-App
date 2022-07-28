import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-white d-flex align-items-center justify-content-around">
      <button type="button" onClick={() => navigate('/')} className="logo-footer">Star Wars</button>
      <a href="https://sanja42.pythonanywhere.com/" className="text-decoration-none text-white">COPYRIGHT © SANJA969</a>
    </footer>
  );
};

export default Footer;
