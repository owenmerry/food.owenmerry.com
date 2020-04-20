import { Header, CardList, Background } from 'owenmerry-designsystem';
import fetch from 'isomorphic-unfetch';

const Index = props => {
 // console.log('here is the dataAuth', props.dataAuth);
  //console.log('here is the dataMe', props.dataMe);
  console.log('here is the dataMedia', props.dataMedia);

const cardList = props.dataMedia.data.map((item)=> {
  return {image:item.media_url,title:item.caption,}; 
}); 
const nextPageToken = props.dataMedia.paging.cursors.after;
const instagramToken = props.token;


const getMorePosts = async () => {
 console.log('run script',nextPageToken,instagramToken);
 
 const resMedia = await fetch('http://local.api.owenmerry.com/api/photos/instagram/media/next/'+ nextPageToken +'?token='+ instagramToken +'');
 const dataMediaNext = await resMedia.json();

 console.log(dataMediaNext);

};

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
          items={cardList}
          cardSettings={{
            shadowLarge: true,
            width: '400px',
            imageHeight: '400px',
          }}
        />
        <div className='button' onClick={getMorePosts}>Load more data</div>
      </div>
    );
  }

  Index.getInitialProps = async function() {

    // auth token
    //const authToken = 'AQAOpZmawvF0yNRStEsS5Mpc5EgEjlteGU99YjdH9-Tb9nRdK53OuHhv3yPX7XZczgunhfYfrt6Lcfym2p7_W85e508e3hnEYJO6iFmQ-L2cRinj3frRIONSPL20ULaiuXGs7g0XPFgIILafMNxzwohoRj4gxERP2O0fDfVDXDujuN7w0YKADjjIlQt9FIePg4xyztdrXoYzbwi-UR_0TGqMh9VortzIGKiG8OZum0IFqQ';
    
    // auth
    //const resAuth = await fetch('http://local.api.owenmerry.com/api/photos/instagram/auth?code='+ authToken +'#_');
    //const dataAuth = await resAuth.json();

    // set token
    const token = 'IGQVJXNlVENVhOOXRSbXd6MFdSUVE2ZA1RpeWdHRVlnOEg0eVBpY1FTejhxMnpwa3VXS05aU3pfUk4xSjlfQzFOdlNvNG1wb0tvX3V0QzRLbldoM1l1Qjhia3NmVlhXUUdzZATBNVjJ3';
    
    // me
    // const resMe = await fetch('http://local.api.owenmerry.com/api/photos/instagram/me?token='+ token +'');
    // const dataMe = await resMe.json();

    // media
    const resMedia = await fetch('http://local.api.owenmerry.com/api/photos/instagram/media?token='+ token +'');
    const dataMedia = await resMedia.json();
    //const data = await res;

    // image
    // const resImage = await fetch('http://local.api.owenmerry.com/api/photos/instagram/image/'+ dataMedia.data[0].id +'?token='+ token +'');
    // const dataImage = await resImage.json();
    //const data = await res;
  
    return {
     // dataAuth: dataAuth,
    //  dataMe: dataMe,
      dataMedia: dataMedia,
      token
    //  dataImage: dataImage,
    };
};



  export default Index;
