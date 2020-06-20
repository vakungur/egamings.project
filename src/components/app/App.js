import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Container, Header, Layout} from "../common";


import './App.scss'
import Games from "../games/container/Games";
import {GamePage} from "../games/components";

function App() {
    return (
        <Container>
            <Header/>
            <Layout>
            <Switch>
                <Route exact path="/" render={() => {
                   return <h1>Добро пожаловать</h1>
                }
                }/>
                <Route exact path = "/games" component={Games} />
                <Route exact path = "games/:id" render={() => {return <GamePage />}} />
            </Switch>
            </Layout>
        </Container>
    );
}

export default App;
