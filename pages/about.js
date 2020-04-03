import { Header, Background } from 'owenmerry-designsystem';

export default function About() {
    return (
      <div>
      <Background></Background>
        <Header menuSettings={
          {
            align: 'right',
            items: [
              {name:'About',url:'/about'},
              {name:'Menu',url:'/menu'},
            ]
          }
        }/>
      </div>
    );
  }