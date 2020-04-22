import { CardList, CallToAction } from 'owenmerry-designsystem';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import Menu from '../components/Menu';

const Index = props => {

//food
const instagramToken = 'IGQVJXNlVENVhOOXRSbXd6MFdSUVE2ZA1RpeWdHRVlnOEg0eVBpY1FTejhxMnpwa3VXS05aU3pfUk4xSjlfQzFOdlNvNG1wb0tvX3V0QzRLbldoM1l1Qjhia3NmVlhXUUdzZATBNVjJ3';
// b&w
//const instagramToken = 'IGQVJVMUxEZAnVXaExmRy1FWGdPNVZAra3VxLW5xalZAHb3VMb0ZAMYmlMZAUx6Tl8tUUVfTU1XWlFsbHBRaXAtak1SaWQwaG04UkVsNWtrc1h0WUY4T2NZAZA3RyVS1OLUY1cHNCV3RSbnZAR';

//state
const [stateListLoading, setStateListLoading] = useState(true);
const [stateMorePostsLoading, setStateMorePostsLoading] = useState(false);
const [stateList, setStateList] = useState(['','','','']);
const [statePage, setStatePage] = useState({});

//getData
useEffect(() => {
const getData = async () => {
  const resMedia = await fetch('http://local.api.owenmerry.com/api/photos/instagram/media?token='+ instagramToken +'');
  const dataMedia = await resMedia.json();

  setData(dataMedia);
}

const setData = (dataMedia) => {

  const cardList = formatInstagramData(dataMedia.data);
  const nextPageToken = dataMedia.paging.cursors.after;
  const hasNextPage = !!(dataMedia.paging.next);

  setStateList(cardList);
  setStatePage({hasNextPage,nextPageToken});
  setStateListLoading(false);
}

getData(instagramToken);

},[]);

//helpers
const formatInstagramData = (data) => {
  return data.map((item)=> {
    return {
      image:item.media_url,
      subtitle:item.caption ? item.caption.substring(0,item.caption.indexOf(".")) : '',
      timestamp:item.timestamp,
    }; 
  }); 
}

//functions
const getMorePosts = async () => {

  //start loading
  setStateMorePostsLoading(true);

  // get data
  const resMedia = await fetch('http://local.api.owenmerry.com/api/photos/instagram/media/next/'+ statePage.nextPageToken +'?token='+ instagramToken +'');
  const dataMediaNext = await resMedia.json();

  //set state
  setStateMorePostsLoading(false);
  setStateList(stateList.concat(formatInstagramData(dataMediaNext.data)));
  setStatePage({hasNextPage:!!(dataMediaNext.paging.next), nextPageToken: dataMediaNext.paging.cursors.after });

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
        <Menu page='photos'/>
        <CardList 
          loading={stateListLoading}
          items={stateList}
          cardSettings={{
            shadowLarge: true,
            width: '400px',
            imageHeight: '400px',
            marginBottom: '50px',
          }}
          loadMoreText='More Posts'
          loadMoreTextLoading='Loading...'
          isLoadMoreLoading={stateMorePostsLoading}
          showLoadMore={statePage.hasNextPage}
          clickLoadMore={getMorePosts}
        />
        <CallToAction
          title='Did you like this?'
          paragraph='You can check out alot of my other mini website projects by going to my main website.'
          buttonLabel='View Other Projects'
          backgroundColor='#2020C0'
          href='http://www.owenmerry.com'
          linkExternal
        ></CallToAction>
      </div>
    );
  }

  Index.getInitialProps = async function() {

    // set token
    const token = 'IGQVJXNlVENVhOOXRSbXd6MFdSUVE2ZA1RpeWdHRVlnOEg0eVBpY1FTejhxMnpwa3VXS05aU3pfUk4xSjlfQzFOdlNvNG1wb0tvX3V0QzRLbldoM1l1Qjhia3NmVlhXUUdzZATBNVjJ3';

    // media
  
    return {
     // dataMedia: dataMedia,
      token
    };
};



  export default Index;
