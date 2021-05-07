import { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Loader from './Components/Loader';

import API from './Components/Services';

import './App.scss';

class App extends Component {
  state = {
    url: '',
    alt: '',
    showModal: false,
    imgGallery: [],
    query: '',
    pageNumber: 1,
    bigImg: '',
    bigImgTags: '',
    fetchLength: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.fetchImg();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({
      query,
      pageNumber: 1,
      imgGallery: [],
      fetchLength: '',
    });
  };

  fetchImg = () => {
    const { query, pageNumber } = this.state;
    const options = { query, pageNumber };

    this.setState({ isLoading: true });

    API.fetchImg(options)
      .then(imgGallery => {
        this.setState(prevState => ({
          imgGallery: [...prevState.imgGallery, ...imgGallery],
          pageNumber: prevState.pageNumber + 1,
          fetchLength: imgGallery.length,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        if (this.state.pageNumber > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        return this.setState({ isLoading: false });
      });
  };

  onImgClick = (img, imgTags) => {
    this.setState({ bigImg: img, bigImgTags: imgTags, showModal: true });
  };

  render() {
    const {
      showModal,
      bigImg,
      bigImgTags,
      imgGallery,
      fetchLength,
      isLoading,
      error,
    } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal} url={bigImg} alt={bigImgTags} />
        )}

        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery img={imgGallery} onClick={this.onImgClick} />

        {isLoading && <Loader />}

        {imgGallery.length > 0 && fetchLength === 12 && !isLoading && (
          <Button onClick={this.fetchImg} />
        )}

        {error && <h2 className="Error-Message">WTF? Shit happens, dude 😲🙃🤪. Please try again, bro 😎</h2>}
      </div>
    );
  }
}

export default App;
