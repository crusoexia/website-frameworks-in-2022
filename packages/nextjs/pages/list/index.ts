import List from './List';
//import { getTodos } from '../api/todos';
import {NextPageContext} from 'next';

export default List;

//export async function getStaticProps() {
  //const todos = getTodos();
  //return {
    //props: {
      //todos,
    //},
  //};
//}

export async function getServerSideProps(_ctx: NextPageContext) {
  const todos = await (await fetch(new URL('http://localhost:3000/api/todos'))).json();
  return {
    props: {
      todos,
    }
  }
}
