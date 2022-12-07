import * as React from 'react';
import './StoryCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";

export default function StoryCard({ story, setSavedStories, handleDelete, savedStories }) {

  async function handleSave() {
    const token = localStorage.getItem("token")
    const headers = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    let savedStory = await axios.post("/api/news/saveStory", story, {headers: headers})
    console.log(savedStory, "saved story")
    console.log(savedStories.JSON.stringify(), "saved stories")
    let newSavedStories = [...savedStories]
    newSavedStories.push(savedStory)
    setSavedStories(newSavedStories)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={story.urlToImage}
        alt="news story image"
      />
      <CardActions>
        <a href={story.url}><Button size="small">{story.source.name}</Button></a>
        { savedStories && savedStories.includes(story) ?
        <Button size="small" onClick={() => handleDelete(story._id)}>Unsave -</Button>
        :
        <Button size="small" onClick={handleSave}>Save +</Button>
        }
      </CardActions>
      <CardContent>
        <Typography align="left" gutterBottom variant="h5" component="div">
          <a href={story.url}>{story.title}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}