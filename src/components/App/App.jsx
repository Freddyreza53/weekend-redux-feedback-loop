import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import SubmittedPage from '../SubmittedPage/SubmittedPage';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/" exact>
        <FeelingForm />
      </Route>

      <Route path="/understandingForm">
        <UnderstandingForm />
      </Route>

      <Route path="/supportForm">
        <SupportForm />
      </Route>

      <Route path="/commentsForm">
        <CommentsForm />
      </Route>

      <Route path="/reviewForm">
        <ReviewForm />
      </Route>

      <Route path="/submittedPage">
        <SubmittedPage />
      </Route>

    </div>
    </Router>
  );
}

export default App;
