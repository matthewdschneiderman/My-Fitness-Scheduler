import NavBar from './components/NavBar';
import SchedulePage from './pages/SchedulePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<NavBar />}
      >
        <Route
          path='schedules'
          element={<SchedulePage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
