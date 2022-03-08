import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useGetEditableContentTypesQuery } from "../../store/services/contentType";

export const Content = () => {
  const contentTypes = useGetEditableContentTypesQuery();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {contentTypes.data?.map(contentType => (
          <Grid item xs={6} md={4} key={contentType.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                    {contentType.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button component={Link} size="small" color="primary" to={`/content/new/${contentType.parameterized_name}`}>
                  Add new
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};