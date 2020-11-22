import logo from './logo.svg';
import './App.css';
import  AddTask  from './AddTask/AddTask'
import ListTask from './ListTask/Listtask'
import UserLists from './UserListsApi/UserLists';

function App() {
  return (
    <div className="App">
   {/* <AddTask/>
      <ListTask/>*/}
   <UserLists/>

    </div>
  );
}

export default App;
