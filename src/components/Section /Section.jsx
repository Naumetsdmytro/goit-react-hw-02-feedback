import PropTypes from 'prop-types';

import style from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
