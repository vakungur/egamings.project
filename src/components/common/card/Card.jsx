import React from 'react';
import {Link} from "react-router-dom";

function Card({games, handleClickFavorite}) {
    return (
        games.map((game) => {
            return (
                <div className="uk-child-width-1-2@m uk-child-width-1-1@l" uk-height-match=".uk-card-body"
                     uk-grid='true' key={game.ID}>
                    <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <div className="uk-text-center">
                                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                        <img className="uk-transition-scale-up uk-transition-opaque"
                                             data-src={game.ImageFullPath} data-width="1000" data-height="667"
                                             alt="UIkit cards" uk-img=""/>
                                        <div className="uk-position-center">
                                            <span className="uk-transition-fade" uk-icon="icon: plus; ratio: 2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">{game.Name.en}</h3>
                                <p className="uk-text-truncate">{game.Name.en}</p>
                                <div className="uk-child-width-auto uk-flex-middle" uk-grid='true'>
                                    <div>
                                        <ul className="uk-iconnav uk-flex-left">
                                            <button onClick={(e) => handleClickFavorite(e, game.ID)}>Добавить</button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-footer">
                                <div className="uk-flex uk-flex-between">
                                    <Link to={`games/${game.ID}`}>
                                        Играть
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default Card;
