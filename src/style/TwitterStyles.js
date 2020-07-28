import { makeStyles } from '@material-ui/core/styles';

export const twitterStyles = makeStyles( () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-even',
    overflow: 'hidden',
    backgroundColor: '#cbfafa'
  },
  gridList: {
    width: 200,
    height: 500,
  },
  searchBarDimensions: {
    height: '45px',
    fontSize: '35px',
    display: 'flex',
  },
  searchButtonDimensions: {
    height: '50px',
    display: 'flex',
  },
}));