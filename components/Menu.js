
import { Header, Background } from 'owenmerry-designsystem';

const Menu = (props) => {
    return (<div>
          <Background
            height='400px'
            style='angle'
            color='#C2C2FF'
          ></Background>
        <Header 
            logoURL='./logo.svg'
            backgroundColor='transparent'
            menuSettings={
              {
                align: 'right',
                items: [
                  {name:'Photos',url:'/',selected: props.page === 'photos'},
                  {name:'About',url:'/about',selected: props.page === 'about'},
                ]
              }
        }/></div>);
};

export default Menu;