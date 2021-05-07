import PropTypes from 'prop-types';

import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ url, alt, onClick }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img src={url} alt={alt} className="ImageGalleryItem-image" onClick={onClick}/>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;
