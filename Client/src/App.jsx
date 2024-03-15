import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard'
import QuestionForm from './components/QuestionForm'
import CreateQuizSection from './components/CreateQuizSection'
import JoinQuizSection from './components/JoinQuizSection'
import CreateSessionSection from './components/CreateSessionSection'
import JoinSessionSection from './components/JoinSessionSection'
import LeaderboardSection from './components/LeaderboardSection'
import FeedbackSection from './components/FeedbackSection'



function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/create-quiz',
      element: <CreateQuizSection />,
    },
    {
      path:'/join-quiz',
      element:<JoinQuizSection></JoinQuizSection>
    },
    {
      path:'/create-session',
      element:<CreateSessionSection></CreateSessionSection>
    },
    {
      path:'/join-session',
      element:<JoinSessionSection></JoinSessionSection>
    },
    {
      path:'/leaderboard',
      element:<LeaderboardSection></LeaderboardSection>
    },
    {
      path:'/feedback',
      element:<FeedbackSection></FeedbackSection>
    }


  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
