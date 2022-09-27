import ReactPaginate from 'react-paginate';
import { Spring, animated } from 'react-spring';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css';

type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

function Pagination({ pageCount, range, onChange, forcePage }: Props) {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      previousLabel={
        pageCount !== 0 ? (
          <div className="pagination-arrow-container">
            <ArrowIcon />
          </div>
        ) : (
          <p></p>
        )
      }
      nextLabel={
        pageCount > 0 ? (
          <div className="pagination-arrow-container">
            <ArrowIcon />
          </div>
        ) : (
          <Spring
            loop
            from={{ opacity: 1, color: 'rgb(14,26,19)' }}
            to={[
              { opacity: 2, color: '#ef3742' },
              { opacity: 1, color: '#737070' },
            ]}
          >
            {(styles) => (
              <animated.span className="spring-animated" style={styles}>
                vazio...
              </animated.span>
            )}
          </Spring>
        )
      }
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
}

export default Pagination;
