import React from "react";
import * as newsAPI from "../../utilities/news-api";
import { useEffect } from "react";
import StoryCard from "../../components/StoryCard/StoryCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function SavedStoryPage({
  savedStories,
  setSavedStories,
  handleDelete,
  setCurrentStory,
}) {
  // useEffect(function () {
  //   async function fetchStory() {
  //     const stories = await newsAPI.getSavedStories();
  //     setSavedStories(stories);
  //   }
  //   fetchStory();
  // }, []);

  return (
    <Box className="page-body" sx={{ flexGrow: 1 }}>
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#004aad",
          width: "100vw",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: "-1.2rem",
        }}
      >
        <h1 className="font-link" style={{ color: "white", fontSize: "3rem" }}>
          Saved Stories
        </h1>
      </Paper>
      <hr></hr>
      {savedStories.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 8, lg: 12 }}
        >
          {savedStories.map((story, idx) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={idx} id="gridItem">
                <StoryCard
                  key={idx}
                  story={story}
                  savedStories={savedStories}
                  setSavedStories={setSavedStories}
                  handleDelete={handleDelete}
                  setCurrentStory={setCurrentStory}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>No Saved Stories</div>
      )}
    </Box>
  );
}
