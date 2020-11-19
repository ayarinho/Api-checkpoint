import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../Redux/Store/Store'
import Task from '../Task/Task';
import '../style.css'

const ListTask = () => {

    const AllSate = useSelector(state => state.todos)
     
    const filter= useSelector(state=> state.filter);

     console.log(filter);
    
    return (
  <>
   
    {  
    filter.length>0? <>
      
      <div className="container_filter" >
    {

        filter.map(item => <Task data={item}/>)
    }

          </div>

     </>      
    :null
    
    }
     
        <div className="container">
            {AllSate.length > 0 ? AllSate 
                .map(item => <Task data={item} />) : null }

                
        </div>
   </>
    );


}
export default ListTask;