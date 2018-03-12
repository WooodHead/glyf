import * as types from '../actions/actionTypes';
import moment from 'moment';

const initialState = [
  // {
  //   title: 'Dagens Media',
  //   url: 'https://www.dagensmedia.se/',
  //   logo: '',
  //   feedUrl: 'https://www.dagensmedia.se/rss.xml',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  // {
  //   title: 'Veckans Affärer',
  //   url: 'https://www.va.se/',
  //   logo: '',
  //   feedUrl: 'https://www.va.se/rss',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  // {
  //   title: 'KIT',
  //   url: 'https://kit.se/',
  //   logo: '',
  //   feedUrl: 'https://kit.se/feed',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  // {
  //   title: 'Resume',
  //   url: 'https://www.resume.se/',
  //   logo: '',
  //   feedUrl: 'https://www.resume.se/rss-nyheter',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  // {
  //   title: 'Breakit',
  //   url: 'https://www.breakit.se/',
  //   logo: '',
  //   feedUrl: 'https://www.breakit.se/feed/artiklar',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  // {
  //   title: 'Dagens Industri',
  //   url: 'https://www.di.se/',
  //   logo: '',
  //   feedUrl: 'https://www.di.se/rss',
  //  items: [],
  // lastUpdated: null,
  // isLoading: false,
  // isError: false,
  // position: null,
  // },
  {
    title: 'SVT Nyheter',
    url: 'https://www.svt.se/',
    logo: require('./../assets/svt.svg'),
    feedUrl: 'https://www.svt.se/nyheter/rss.xml',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 3,
  },
  {
    title: 'Sveriges Radio Ekot',
    url: 'https://sverigesradio.se/ekot',
    logo: require('./../assets/sveriges-radio.svg'),
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 5,
  },
  {
    title: 'Svenska Dagbladet',
    url: 'https://www.svd.se/',
    logo: require('./../assets/svenska-dagbladet.svg'),
    feedUrl: 'https://www.svd.se/?service=rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 4,
  },
  {
    title: 'Expressen',
    url: 'https://expressen.se/',
    logo: require('./../assets/expressen.svg'),
    feedUrl: 'https://feeds.expressen.se',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 2,
  },
  {
    title: 'Aftonbladet',
    url: 'https://www.aftonbladet.se/',
    logo: require('./../assets/aftonbladet.svg'),
    feedUrl: 'https://www.aftonbladet.se/rss.xml',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 0,
  },
  {
    title: 'Dagens Nyheter',
    url: 'https://www.dn.se/',
    logo: require('./../assets/dagens-nyheter.svg'),
    feedUrl: 'https://www.dn.se/nyheter/m/rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
    position: 1,
  },
];

const newsReducer = (state = initialState, action) => {
  const i = state.findIndex(s => s.feedUrl === action.feedUrl);
  switch (action.type) {
    case types.FETCH_NEWS:
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: true,
          isError: false,
          // position: null,
        },
        ...state.slice(i + 1),
      ];
    case types.RECEIVE_NEWS:
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: false,
          isError: false,
          // position: null,
          items: action.news,
          lastUpdated: moment().toDate(),
        },
        ...state.slice(i + 1),
      ];
    case types.FETCH_NEWS_ERROR:
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: false,
          isError: true,
          lastUpdated: moment().toDate(),
        },
        ...state.slice(i + 1),
      ];
    default:
      return state;
  }
};

export default newsReducer;
