import { useState, useEffect } from 'react'
import AutoComplete from './components/AutoComplete'
import type { User } from './types/global'

// styles
import './App.css'
import { getUsers } from './services/users'
import useDebounce from './hooks/useDebounce'

function App() {
  const [users, setUsers] = useState<Array<User> | null>(null)
  const [search, setSearch] = useState<string>('')

  // this will make it so we're not hitting the endpoint on every keystroke but await for the user to stop searching and then do a single request (ideally)
  const debouncedSearch = useDebounce(search, 2000)

  useEffect(() => {
    /*
      resolved getUser's promised with a chained .then instead of creating a local async function since
      we only really need to await the data once
    
      requesting the data only upon component mounting for the first time since we'll perform subsequent filters through the options array direct manipulation
    */
    getUsers({ name : debouncedSearch }).then(setUsers)
  }, [debouncedSearch])

  if (!users) {
    return 'loading...'
  }

  return (
    <div className='App'>
      {users && (
        <AutoComplete
          id='users-autocomplete'
          value={search}
          onValueChange={(value) => setSearch(value)}
          options={users}
        />
      )}
    </div>
  )
}

export default App
