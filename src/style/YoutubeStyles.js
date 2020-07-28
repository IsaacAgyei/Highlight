import { makeStyles } from '@material-ui/core/styles'

export const youtubeStyles = makeStyles( () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#f2f2f2'
  },
  gridList: {
    width: 200,
    height: 450,
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
}))