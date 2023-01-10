import PropTypes from 'prop-types';
import { SectionCss, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionCss>
      {title && <Title>{title}</Title>}
      {children}
    </SectionCss>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
