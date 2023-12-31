import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import feedBackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";


function App() {
  const [feedback, setFeedback] = useState(feedBackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
      <Routes>
        <Route 
        exact 
        path="/" 
        element={
          <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
          </>
        }

        ></Route>
        <Route path="/about" element={<AboutPage />}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  );
}
export default App;
