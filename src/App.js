import { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import ErrorPage from './components/ErrorPage';
import LoadingPage from './components/LoadingPage';
import RecordList from './components/RecordList';
import useFilter, { FILTER_GENDER_FEMALE, FILTER_GENDER_MALE, FILTER_NONE, FILTER_PMT_METHOD_CC, FILTER_PMT_METHOD_CHECK, FILTER_PMT_METHOD_PAYPAL, NO_FILTER_GENDER, NO_FILTER_PMT } from './hooks/useFilter';
import usePagination from './hooks/usePagination';
import useSearch from './hooks/useSearch';

const RECORD_PER_PAGE = 20,
API_REQUEST_URL = 'https://api.enye.tech/v1/challenge/records';

const initialState = {
  loading: false,
  error: false,
  data: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'PagePending': return { ...state, loading: true, error: false }
    case 'PageError': return{ ...state, loading: false, error: true }
    case 'PageLoaded': return { ...state, loading: false, data: action.payload }
    default: return initialState
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState(FILTER_NONE);
  const [filteredData] = useFilter(state.data.profiles, filterTerm);
  const [data] = useSearch(filteredData, searchTerm);
  const [page, setPage] = useState(1);
  const [pageData, pageNumbers] = usePagination(data, page, RECORD_PER_PAGE);
  
  const filterBasedOnParams = (param) => {
    switch (param) {
      case FILTER_GENDER_FEMALE: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_GENDER_MALE);
        newFilterTerm.push(FILTER_GENDER_FEMALE)
        return setFilterTerm(newFilterTerm)
      }
      case FILTER_GENDER_MALE: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_GENDER_FEMALE);
        newFilterTerm.push(FILTER_GENDER_MALE)
        return setFilterTerm(newFilterTerm)
      }
      case NO_FILTER_GENDER: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_GENDER_MALE && term !== FILTER_GENDER_FEMALE);
        return setFilterTerm(newFilterTerm.length === 0 ? FILTER_NONE : newFilterTerm)
      }
      case FILTER_PMT_METHOD_CC: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_PMT_METHOD_CHECK && term !== FILTER_PMT_METHOD_PAYPAL);
        newFilterTerm.push(FILTER_PMT_METHOD_CC)
        return setFilterTerm(newFilterTerm)
      }
      case FILTER_PMT_METHOD_CHECK: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_PMT_METHOD_CC && term !== FILTER_PMT_METHOD_PAYPAL);
        newFilterTerm.push(FILTER_PMT_METHOD_CHECK)
        return setFilterTerm(newFilterTerm)
      }
      case FILTER_PMT_METHOD_PAYPAL: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_PMT_METHOD_CC && term !== FILTER_PMT_METHOD_CHECK);
        newFilterTerm.push(FILTER_PMT_METHOD_PAYPAL)
        return setFilterTerm(newFilterTerm)
      }
      case NO_FILTER_PMT: {
        let newFilterTerm = filterTerm === FILTER_NONE ? [] : filterTerm;
        newFilterTerm = newFilterTerm.filter(term => term !== FILTER_PMT_METHOD_CC && term !== FILTER_PMT_METHOD_CHECK && term !== FILTER_PMT_METHOD_PAYPAL);
        return setFilterTerm(newFilterTerm.length === 0 ? FILTER_NONE : newFilterTerm)
      }
      case FILTER_NONE:
      default: setFilterTerm(FILTER_NONE)
    }
  }

  const fetchData = async () => {
    try {
      dispatch({ type: 'PagePending' })
      const response = await fetch(API_REQUEST_URL);
      const data = await response.json();
      dispatch({ type: 'PageLoaded', payload: data.records })
    } catch (err) {
      dispatch({ type: 'PageError' })
    }
  }

  useEffect(() => {
    // fetch data
    fetchData();
  }, []);

  useEffect(() => {
    if (pageData.length === 0) {
      setPage(1)
    }
  }, [data])

  return (
    <AppWrapper>
      {
        state.error ? (
          <ErrorPage />
        ) : state.loading ? <LoadingPage /> : <RecordList data={pageData} page={page} pageNumbers={pageNumbers} navigateToPage={(num) => setPage(parseInt(num))} filterBasedOnParams={filterBasedOnParams} filterTerm={filterTerm} onSearch={(event) => setSearchTerm(event.target.value.trim())} />
      }
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`

export default App;
