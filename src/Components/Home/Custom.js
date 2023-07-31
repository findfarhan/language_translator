import React from 'react';
import group2 from '../../assets/images/group2.png';
import groupimg2 from '../../assets/images/groupimg-2.png';
import { useTranslation } from 'react-i18next';

const Custom = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className="col-md-6 t  d-none d-md-block "
            style={{ padding: '0em 4em 0em 5em' }}
          >
            <div className="d-none d-md-block">
              <h1 className="to-make-first-h">
                {t('Custom')} <br /> {t('Embossment')}
              </h1>
              <p className="to-make-first-p pt-4 pb-3">{t('lorem')}</p>
            </div>
            <button className="to-make-btn">{t('get')}</button>
          </div>

          <div className="col-md-6  d-flex align-items-center pb-5 pe-0 d-none d-lg-block">
            <img src={group2} className="img-fluid"></img>
          </div>
          <div className="col-md-6  d-flex align-items-center pb-5 justify-content-center d-block d-lg-none">
            <img src={groupimg2} className="img-fluid"></img>
          </div>
        </div>
        <div className="d-block d-md-none pb-5 text-center">
          <h1 className="to-make-first-h word-wrap2">
            {' '}
            {t('Custom Embossment')}
          </h1>
          <p className="to-make-first-p pt-4 pb-3 px-5">{t('lorem')}</p>
          <button className="to-make-btn">{t('get')}</button>
        </div>
      </div>
    </>
  );
};

export default Custom;
