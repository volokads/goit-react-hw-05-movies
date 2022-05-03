import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import  HomeView  from './views/HomeView';
import MoviePage from './views/MoviePage';
import  MovieDetailsPage  from './views/MovieDetailsPage';
// import  Reviews  from './views/Reviews';
// import  Cast  from './views/Cast';
import NotFoundView from './views/NotFoundView';
// import { Suspense, lazy } from 'react';
import  { lazy }  from 'react'

// const HomeView = lazy(()=> import('./views/HomeView.jsx'))
// const MoviePage = lazy(()=> import('./views/MoviePage'))
// const MovieDetailsPage = lazy(()=> import('./views/MovieDetailsPage'))
const Reviews = lazy(()=> import('./views/Reviews'))
const Cast = lazy(()=> import('./views/Cast'))
// const NotFoundView = lazy(()=> import('./views/NotFoundView'))

export const App = () => { 

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Suspense fallback={<div className="loading">Loading...</div>}> */}
        <Route index element={<HomeView />} />
        {/* </Suspense> */}
        <Route path='movies/' element={<MoviePage />} />
          {/* <Suspense fallback={<div >Loading...</div>}> */}
        <Route path='movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
          {/* </Suspense> */}
        <Route path='*' element={<NotFoundView/>}/>
      </Route>
    </Routes>
  )
}
