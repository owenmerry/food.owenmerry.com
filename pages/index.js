import { Header, CardList, Background } from 'owenmerry-designsystem';

export default function Index() {
    return (
      <div>
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
              {name:'About',url:'/about'},
              {name:'Menu',url:'/menu'},
            ]
          }
        }/>
        <CardList 
          items={[
                {image:'./food.png',title:'Pan fried salmon, walnut pesto, pickled cucumber, wasabi mayo, nori seaweed flakes, sesame seeds, radish and pea shoots.',},
                {title:'Pan fried salmon, walnut pesto, pickled cucumber, wasabi mayo, nori seaweed flakes, sesame seeds, radish and pea shoots.',},
                {title:'Pan fried salmon, walnut pesto, pickled cucumber, wasabi mayo, nori seaweed flakes, sesame seeds, radish and pea shoots.',},
                {title:'Pan fried salmon, walnut pesto, pickled cucumber, wasabi mayo, nori seaweed flakes, sesame seeds, radish and pea shoots.',},
              ]
          }
          cardSettings={{
            shadowLarge: true,
            width: '400px',
            imageHeight: '400px',
          }}
        />
      </div>
    );
  }