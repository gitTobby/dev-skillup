import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Top from '../../Exercises/Top';
import Counter from '../../Exercises/Counter';
import Contact from '../../Exercises/Contact';
import Realgrid2 from '../../Exercises/Realgird2';

const Switcher = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route path="/Exercises/Top" component={Top} />
      <Route path="/Exercises/Counter" component={Counter} />
      <Route path="/Exercises/Contact" component={Contact} />
      <Route path="/Exercises/Realgrid2" component={Realgrid2} />
    </Switch>
  );
};

export default Switcher;
