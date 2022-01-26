import { Component } from 'react';
import api from '../service/image-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import ModalWindow from '../Modal/Modal';
import Loader from '../Utils/Loader/Loader';
import Button from '../Utils/Button/Button';
import ErrorMessage from '../Utils/ErrorMessage/ErrorMessage';

const initialValue = {
  images: [],
  page: 1,
  total: null,
};

export default class App extends Component {
  state = {
    ...initialValue,
    searchRequest: '',
    activeImage: null,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(_, { searchRequest }) {
    const searchRequestHasChanged = searchRequest !== this.state.searchRequest;
    if (searchRequestHasChanged) this.onSearch();
  }

  onSearch = () => {
    this.isLoading();
    api
      .getImages(this.state.searchRequest, this.state.page)
      .then(this.setResolvedRequest)
      .catch(this.setRejectedRequest);
  };

  isLoading = () => this.setState({ status: 'loading' });

  setResolvedRequest = ({ hits, total }) =>
    this.setState(({ images, page }) => ({
      images: [...images, ...hits],
      status: 'resolved',
      page: page + 1,
      total,
    }));

  setRejectedRequest = error => this.setState({ error, status: 'rejected' });

  setActiveImage = image => this.setState({ activeImage: image });

  onSubmit = searchRequest =>
    this.setState({
      searchRequest,
      ...initialValue,
    });

  render() {
    const { total, page, images, activeImage, status, error } = this.state;

    const Success = status === 'resolved';
    const isLoading = status === 'loading';
    const Error = status === 'rejected';

    const endOfColection = Math.ceil(total / 12) + 1 === page;
    const imageIsFound = images.length > 0;
    const showButton = !endOfColection && imageIsFound && Success;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        {imageIsFound && (
          <ImageGallery images={images} setActiveImage={this.setActiveImage} />
        )}

        {showButton && <Button text="Load more" onClick={this.onSearch} />}

        {Error && <ErrorMessage text={error} />}

        {isLoading && <Loader />}

        {activeImage && (
          <ModalWindow onClick={() => this.setState({ activeImage: null })}>
            <img src={activeImage.largeImageURL} alt={activeImage.tags} />
          </ModalWindow>
        )}
      </>
    );
  }
}
