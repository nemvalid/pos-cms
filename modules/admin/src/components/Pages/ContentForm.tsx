import { Box, Card, CardActionArea, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetEditableFieldsForContentTypeQuery } from '../../store/services/contentType';

export const ContentFormRenderer = ({ model }: { model: string }) => {
  const { data, isLoading } = useGetEditableFieldsForContentTypeQuery(model);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!data) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.properties.filter(field => field.metadata?.editable).map(field => (
          <Grid item xs={6} md={3} key={field.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                    {field.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Widget: {field.metadata.widget}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const ContentForm = () => {
  const { modelName } = useParams();
  if (!modelName) return <CircularProgress />;

  return <ContentFormRenderer model={modelName} />;
};
