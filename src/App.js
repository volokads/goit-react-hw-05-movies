import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Suspense, lazy } from 'react';
// import { Triangle } from 'react-loader-spinner'

const HomeView = lazy(()=> import('./views/HomeView.jsx'))
const MoviePage = lazy(()=> import('./views/MoviePage'))
const MovieDetailsPage = lazy(()=> import('./views/MovieDetailsPage'))
const Reviews = lazy(()=> import('./views/Reviews'))
const Cast = lazy(()=> import('./views/Cast'))
const NotFoundView = lazy(()=> import('./views/NotFoundView'))

export const App = () => { 

  return (
    <Suspense
      fallback={<p>Loading...</p>}
      // fallback={< Triangle color="#00BFFF" height={80} width={80} />}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path='movies/' element={<MoviePage />} />
          <Route path='movies/:movieId' element={<MovieDetailsPage />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFoundView/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}
