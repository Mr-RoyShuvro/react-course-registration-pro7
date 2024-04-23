import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalCredit = credit => {
    setTotalCredit(credit + totalCredit);
  }

  const handleRemainingCredit = (credit) => {
    setRemainingCredit(remainingCredit - credit);
  }

  const handleTotalPrice = price => {
    setTotalPrice(totalPrice + price);
  }

  const handleAddToBookmarks = (course, credit, price) => {

    const newTotalCredit = totalCredit + credit;
    const newRemainingCredit = remainingCredit - credit;

    if (newRemainingCredit < 0) {
      alert('Your remaining credit is not enough to add this course. Please remove some bookmarks or try another course.');
      return;
    }

    if (bookmarks.some(bookmark => bookmark.title === course.title)) {
      alert('This course is already in your bookmarks.');
      return;
    }

    const newBookmarks = [...bookmarks, course];


    // newBookmarks.filter(r => r.title !== r.title)
    



    setTotalCredit(newTotalCredit);
    setRemainingCredit(newRemainingCredit);
    setBookmarks(newBookmarks);
    handleTotalCredit(credit);
    handleRemainingCredit(credit);
    handleTotalPrice(price);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Courses handleAddToBookmarks={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit} remainingCredit={remainingCredit} totalPrice={totalPrice}></Bookmarks>
      </div>
    </>
  )
}

export default App