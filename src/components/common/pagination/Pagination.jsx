import React, {Component} from 'react';

class Pagination extends Component {

    render() {
        const {gamePage, totalGame, paginate, nextPage} = this.props;

        const pageNumbers = []

        for (let i = 1; i <= Math.ceil(totalGame / gamePage); i++) {
            pageNumbers.push(i)
        }
        return (
            <nav>
                <ul class="uk-pagination" uk-margin="true">
                    {pageNumbers.map(num => (
                            <li key={num}>
                                <a onClick={() => paginate(num)} href="#">{num}</a>
                            </li>
                        )
                    )}
                    <li>
                        <a onClick={() => nextPage()} href="#">Загрузить еще</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;
