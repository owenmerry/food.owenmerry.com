import { CallToAction, TextBlock, Features } from 'owenmerry-designsystem';
import Menu from '../components/Menu';

export default function About() {
    return (
      <div>
      <style jsx global>{`
        html, body {
          font-family: 'Arial';
          margin:0px;
          padding:0px;
          }
        `}
      </style>
        <Menu page='about'/>
        <TextBlock
          title='So.. what’s this all about?'
          paragraph={[
            'Well i did a 3 month cooking course in Dublin Cookery School and i created this website to showcase/show off my cooking creations.',
            'Alot of the food will be specialised for fine dining as that is the type of food i am most intrested in.',
          ]}
          backgroundColor='transparent'
        />
        <CallToAction
          title='Did you like this?'
          paragraph='You can check out alot of my other mini website projects by going to my main website.'
          buttonLabel='View Other Projects'
          backgroundColor='#2020C0'
          href='https://www.owenmerry.com'
          linkExternal
        ></CallToAction>
      </div>
    );
  }