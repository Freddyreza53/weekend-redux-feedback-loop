import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import SubmittedPage from '../SubmittedPage/SubmittedPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingForm />
      <UnderstandingForm />
      <SupportForm />
      <CommentsForm />
      <ReviewForm />
      <SubmittedPage />

    </div>
  );
}

export default App;
