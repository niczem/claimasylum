import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Typography from "@mui/material/Typography";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__links">
        <Link to="/impressum">{t('Impressum')}</Link>
        <Link to="/contact">{t('Contact')}</Link>
        <Link to="/accessdata">{t('Access Data')}</Link>
        </div>
        <div className="footer__logos">
          <Typography >
          {t('FooterText')}
          </Typography>
          <div> 
            <img src="./Logos/BMBF_RGB_Gef_L_e-1.jpg" />
            <img src="./Logos/PrototypeFund-P-Logo.png" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

