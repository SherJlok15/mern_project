import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddForm, NotFound } from './components';
import { HeaderBlock, PostsList, FullPost } from './modules';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBlock />
        <div className="container">
          <div className="content">
            {/*<button type="button" className="btn btn-primary">
              Add post
            </button>*/}
            <div className="content">

            </div>

                <Switch>
                  <Route
                    path="/"
                    exact
                    component={() => (
                      <PostsList />
                    )}
                  />
                  <Route
                    path="/post/:id"
                    exact
                    component={FullPost}
                  />
                  <Route
                    path="/post/:id/edit"
                    exact
                    component={AddForm}
                  />
                  <Route path="*" component={NotFound}/>
                </Switch>


          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
