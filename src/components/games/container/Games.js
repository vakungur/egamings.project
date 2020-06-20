import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchGames} from "../../../store/games/actions";
import {Card, Loader, Pagination, SearchPanel, Select} from "../../common";

const mapStateToProps = (state) => {
    return {
        categories: state.gamesReducer.categories,
        merchants: state.gamesReducer.merchants,
        games: state.gamesReducer.games,
        isLoading: state.gamesReducer.isLoading
    }
}

const mapDispatchToProps = {
    fetchGames,
}

class Games extends Component {

    state = {
        games: [],
        categories: [],
        merchants: [],
        currentPage: 1,
        gamesPage: 25,
        sort: 'A-Z',
        isFilter: false,
        isFavotite: [],
    }

    componentDidMount() {
        this.props.fetchGames()
        this.setState({
            games: this.props.games
        })
    }

    handleSearch = (e) => {
        let searchQuery = e.target.value.toLowerCase();
        let searchGame = this.props.games.filter((el) => {
            let searchValue = el.Name.en.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1
        });
        this.setState({
            games: searchGame
        })
    }

    handleSort = (e) => {
        const cloneGames = this.state.games.concat();
        if (e.target.value === 'Z-A') {
            cloneGames.sort((b, a) => {
                let nameA = a.Name.en.toLowerCase();
                let nameB = b.Name.en.toLowerCase();
                if (nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                } else {
                    return 0
                }
            })
        } else {
            cloneGames.sort((a, b) => {
                let nameA = a.Name.en.toLowerCase();
                let nameB = b.Name.en.toLowerCase();
                if (nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                } else {
                    return 0
                }
            })
        }
        this.setState({
            games: cloneGames
        })
    }

    handleChangeCategories = (e) => {
        let categoriesGames = this.props.games.filter((game) => {
            return +game.CategoryID === +e.target.value
        })
        this.setState({
            isFilter: true,
            games: categoriesGames
        })
    }

    handleChangeMerchants = (e) => {
        let merchantsGames = this.props.games.filter((game) => {
            return +game.MerchantID === +e.target.value
        })
        this.setState({
            isFilter: true,
            games: merchantsGames
        })
    }

    handlePageCount = (e) => {
        this.setState({
            gamesPage: e.target
        })
    }

    handleClickFavorite = (e, gameID) => {
        const serializedState = JSON.stringify(gameID)
        localStorage.setItem(gameID, serializedState)
    }

    handlePaginate = pageNum => this.setState({
        currentPage: pageNum
    })

    handleNextPage = () => this.setState({
        currentPage: this.state.currentPage + 1
    })

    handlePrevPage = () => this.setState({
        currentPage: this.state.currentPage - 1
    })

    render() {
        const {games, gamesPage, currentPage, sort, isFavotite} = this.state;
        const {isLoading, categories, merchants} = this.props;

        const indexOfLastGame = currentPage * gamesPage;
        const indexOfFirstGame = indexOfLastGame - gamesPage;
        const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)

        return (
            <>
                {isLoading ? <Loader/> :
                    <>
                        <SearchPanel handleSearch={this.handleSearch}/>
                        <span>{"Всего игр"}</span>
                        <p>{this.props.games.length}</p>
                        <span>{"Игр в категории"}</span>
                        <p>{games.length}</p>
                        <Select
                            title="Категории"
                            name="categories"
                            defaultValue='Выберите категорию'
                            onChange={this.handleChangeCategories}
                        >
                            <option value="Выберите категорию">Выберите категорию</option>
                            {categories.map((categoria) => {
                                return (
                                    categoria.Name.ru === undefined ? null :
                                        <option value={categoria.ID} key={categoria.ID}>
                                            {categoria.Name.ru}
                                        </option>
                                )
                            })}
                        </Select>
                        <Select
                            title="Издатели"
                            name="merchants"
                            defaultValue='Выберите издателя'
                            onChange={this.handleChangeMerchants}
                        >
                            <option value="Выберите издателя">Выберите издателя</option>
                            {
                                Object.values(merchants).map(merchant => (
                                    <option value={merchant.ID} key={merchant.ID}>
                                        {merchant.Name}
                                    </option>
                                ))
                            }
                        </Select>
                        <Select
                            title="Количестов игр на странице"
                            name="pageCount"
                            onChange={this.handlePageCount}
                            defaultValue={gamesPage}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </Select>
                        <Select
                            title="Сортировать по имени"
                            name="sortName"
                            defaultValue={sort}
                            onChange={this.handleSort}
                        >
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </Select>
                        <Card games={currentGame}
                              handleClickFavorite={this.handleClickFavorite}
                              isFavotite={isFavotite}
                        />
                        <Pagination gamesPage={gamesPage}
                                    totalGame={games.length}
                                    paginate={this.handlePaginate}
                                    nextPage={this.handleNextPage}
                                    prevPage={this.handlePrevPage}
                        />
                    </>}
            </>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Games);
