import dns from 'node:dns';
import {NextPageContext} from 'next';
import List from './List';
//import { getTodos } from '../api/todos';

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
  dns.setDefaultResultOrder('ipv4first');
  const todos = await (await fetch(new URL('http://localhost:3000/api/todos'))).json();
  return {
    props: {
      todos,
    }
  }
}
