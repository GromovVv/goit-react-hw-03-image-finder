import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.scss';

const ImageGallery = ({ img, onClick }) => {
  return (
    <ul className="ImageGallery">
      {img.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="ImageGalleryItem" key={id}>
          <ImageGalleryItem
            url={webformatURL}
            alt={tags}
            onClick={() => onClick(largeImageURL, tags)}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired
};

export default ImageGallery;
