import { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Utils/Button/Button';
import getImages from '../service/image-api';
import Loader from '../Utils/Loader/Loader';

import ModalWindow from '../Modal/Modal';

// status:
// //   'idle',
//    'pending',
// //  пш'resolved',
// //   'rejected',
//end
//cant find

export default class App extends Component {
  state = {
    searchRequest: '',
    images: [],
    page: 1,
    activeImage: {},
    showModal: false,
    total: null,
    status: 'idle',
    error: null,
  };

  async componentDidUpdate(_, { searchRequest, activeImage }) {
    const changeSearchRequest = searchRequest !== this.state.searchRequest;
    const clickOnImage = activeImage !== this.state.activeImage;

    if (changeSearchRequest) {
      await this.resetOldImageState();
      this.imagesFinder();
    }

    if (clickOnImage) this.toggleShowModal();
  }

  imagesFinder = () => {
    this.setState({ status: 'pending' });
    getImages(this.state.searchRequest, this.state.page)
      .then(this.setResolvedRequest)
      .catch(this.setRejectedRequest);
  };

  setResolvedRequest = ({ hits, total }) =>
    this.setState(({ images, page }) => ({
      images: [...images, ...hits],
      status: 'resolved',
      page: page + 1,
      total,
    }));

  setRejectedRequest = error => this.setState({ error, status: 'rejected' });

  setActiveImage = image => this.setState({ activeImage: image });

  resetOldImageState = () => {
    this.setState({ images: [], page: 1, total: null });
  };

  toggleShowModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  onSubmit = ({ searchValue }) =>
    this.setState({ searchRequest: searchValue.split(' ').join('+') });

  render() {
    const { total, page, images, showModal, activeImage, status } = this.state;

    const endOfColection = Math.ceil(total / 12) + 1 === page;
    const imageIsFound = images.length > 0;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        {imageIsFound && (
          <ImageGallery images={images} setActiveImage={this.setActiveImage} />
        )}

        {!endOfColection && imageIsFound && (
          <Button text="Load more" onClick={this.imagesFinder} />
        )}

        {status === 'pending' && <Loader />}

        {showModal && (
          <ModalWindow toggleModal={this.toggleShowModal}>
            <img src={activeImage.largeImageURL} alt={activeImage.tags} />
          </ModalWindow>
        )}
      </>
    );
  }
}
