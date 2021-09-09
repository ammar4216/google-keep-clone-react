import React from 'react'
import { useDispatch } from "react-redux";
import { searchTodo } from "../../redux/actions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: 350,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Searchbar() {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch();

  const searchHandler = (e) =>{
    setSearch(e.target.value);
  }

  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    console.log(search)
    dispatch(searchTodo({search: search}))
    setSearch("")
  }
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root} onSubmit={searchSubmitHandler} >
    <InputBase
      className={classes.input}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search google maps' }
    }
      value={search}
      onChange={searchHandler}
      
    />
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}

export default Searchbar
