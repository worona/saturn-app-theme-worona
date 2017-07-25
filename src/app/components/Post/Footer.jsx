import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// import Comments from '../Comments';
import styles from './styles.css';

const Footer = ({ categories, tags }) =>
  <div className={styles.postFooter}>
    <div className={styles.categories}>
      {categories.map(category =>
        <span key={category.id} className={styles.category}>
          <Link to={`?cat=${category.id}`}>
            {category.name}
          </Link>
        </span>
      )}
      {tags.map(tag =>
        <span key={tag.id} className={styles.category}>
          <Link to={`?tag=${tag.id}`}>
            {tag.name}
          </Link>
        </span>
      )}
    </div>
  </div>;
  // <Comments disqusShortname={'adslzone'} />

Footer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

export default Footer;
