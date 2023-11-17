import SearchPage from './components/SearchPage/SearchPage';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
    return (
        <div>
            <ErrorBoundary>
                <SearchPage />
            </ErrorBoundary>
        </div>
    );
}

export default App;
